class Api::V1::SharedApplicationController < ApplicationController
  before_action :authenticate_with_token!

  def get_application
    render json: Application.find_by(id: params[:application_id]), status: :ok
  end

  def return_all_messages
      messages = Message.where(application_id: params[:application_id])
      render json: messages, satus: :ok
  end

  def new_message
    if current_student_user.present?
      user = current_student_user
      name = user.fullname
    else
      user = current_business_user
      name = user.business_name
    end
    if params.values_at(:message, :application_id).all?(&:present?)
      message = Message.new(
                            sender_id: user.id,
                            sender: name,
                            message: params[:message],
                            application_id: params[:application_id]
      )
      if message.save
        render json: message, status: :ok
      else
        render json: {success:false, message: "Could not send message"}, status: 400
      end
    else
      render json: {success:false, message: "Please enter required fields"}, status: 400
    end
  end
end
