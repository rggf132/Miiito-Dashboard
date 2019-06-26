class Api::V1::BusinessJobController < ApplicationController
  before_action :authenticate_with_business_token!

  def return_all_applications
    if params[:job_id].present?
      applications = Application.where(job_id: params[:job_id])
      render json: applications, status: :ok
    else
      render json: {success: false, message: "Please choose job for which to show applications"}, status: 400
    end
  end
end
