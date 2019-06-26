class ApplicationController < ActionController::API
  include Authenticate
  include Accessible
  
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  before_action :configure_permited_parameters, if: :devise_controller?

  protected

  def configure_permited_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:fullname])
    devise_parameter_sanitizer.permit(:account_update, keys: [:fullname])
  end

  def render_404
    render json: { error: "Invalid ID", is_success: false}, status: 404
  end
end
