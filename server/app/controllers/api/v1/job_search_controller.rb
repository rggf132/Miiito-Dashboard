class Api::V1::JobSearchController < ApplicationController
  before_action :authenticate_with_token!,

  def open_job
    if params[:job_id].present?
      render json: Job.find_by(id: params[:job_id]), status: :ok
    else
      render json: {success: false, message: "Job does not exist"}, status: 400
    end
  end
end
