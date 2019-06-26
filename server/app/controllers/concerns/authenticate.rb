module Authenticate
  def current_student_user
    @current_user = StudentUser.find_by(access_token: params[:access_token])
  end

  def current_business_user
    @current_user = BusinessUser.find_by(access_token: params[:access_token])
  end

  def authenticate_with_token!
    render json: { error: "Not Authenticated", is_success: false}, status: :unauthorized unless current_business_user.present? || current_student_user.present?
  end

  def authenticate_with_business_token!
    render json: { error: "Not Authenticated", is_success: false}, status: :unauthorized unless current_business_user.present?
  end

  def authenticate_with_student_token!
    render json: { error: "Not Authenticated", is_success: false}, status: :unauthorized unless current_student_user.present?
  end
end
