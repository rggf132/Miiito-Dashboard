class Api::V1::BusinessHomeController < ApplicationController
  before_action :authenticate_with_business_token!
  # skip_before_action :check_user, only: :destroy

  def create_job

    if params[:job].values_at(:title, :description, :job_length, :job_vacancy).all?(&:present?)
      job = Job.new(
                    title: params[:job][:title],
                    business_name: current_business_user.business_name,
                    description: params[:job][:description],
                    job_length: params[:job][:job_length],
                    job_vacancy: params[:job][:job_vacancy],
                    business_user_id: current_business_user.id
      )

      if job.save
        render json: job, status: :ok
      else
        render json: {error: job.errors, is_success: false}, status: 422
      end
    else
      render json: {success: false, message: "Please enter required fields"}, status: 400
    end
  end

  def return_all_job_posts
    if params[:access_token].present?
      user_id = current_business_user.id
      jobs = Job.where(business_user_id: user_id)
      render json: jobs, status: :ok
    else
      render json: {success: false, message: "Session expired - please login into business account"}, status: 400
    end
  end
end
