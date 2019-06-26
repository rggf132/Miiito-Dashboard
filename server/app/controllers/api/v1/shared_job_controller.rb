class Api::V1::SharedJobController < ApplicationController
  before_action :authenticate_with_student_token!, only: [:apply_for_job]
  before_action :authenticate_with_business_token!, only: [:update_application_status]

  def apply_for_job
    if params.values_at(:job_id, :job_message).all?(&:present?)
      application = Application.new(
                                    job_id: params[:job_id],
                                    student_user_id: current_student_user.id,
                                    job_message: params[:job_message],
                                    status: 0
      )
      if application.save
        render json: application, status: :ok
      else
        render json: {error: application.errors, is_success: false}, status: 422
      end
    else
      render json: {success: false, message: "Please enter required fields"}, status: 400
    end
  end

  def update_application_status
    if params.values_at(:application_id, :new_status).all?(&:present?)
      application = Application.find_by(id: params[:application_id])
      application_job = Job.find_by(id: application.job_id)
      if application_job.business_user_id.eql? current_business_user.id
        application.status = params[:new_status]
        application.save
        render status: :ok
      else
        render json: {success: false, message: "Not authorized to modify this application"}, status: 401
      end
    else
      render json: {success: false, message: "Please specify which application to update"}, status: 400
    end
  end
end
