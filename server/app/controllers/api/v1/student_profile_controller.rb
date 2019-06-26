class Api::V1::StudentProfileController < ApplicationController
  before_action :authenticate_with_student_token!

  def change_password
    user = current_student_user
    if user.valid_password? params[:current_password]
      if params[:new_password].eql? params[:password_confirmation]
        user.password = params[:new_password]
        if user.save
          render json: {success: true, message: "Success: Password changed"}, status: 200
        else
          render json: {success: false, message: "Could not update password"}, status: 400
        end
      else
        render json: {success: false, message: "Please ensure new passwords match"}, status: 403
      end
    else
      render json: {success: false, message: "Incorrect current password"}, status: 401
    end
  end

  #TOdo Should merge create and edit into one method

  def create_cv
    user = current_student_user

    if params[:cv].values_at(:name, :phone, :address, :content).all?(&:present?)
      binding.pry
      cv = Cv.new(
                            name: params[:cv][:name],
                            phone: params[:cv][:phone],
                            address: params[:cv][:address],
                            content: params[:cv][:content],
                            student_user_id: current_student_user.id
      )

      if cv.save
        render json: cv, status: :ok
      else
        render json: {success:false, cv: "Could not save cv"}, status: 400
      end
    else
      render json: {success:false, cv: "Please enter required fields"}, status: 400
    end
  end

  def edit_cv
    user = current_student_user

    if params[:cv].values_at(:name, :phone, :address, :content).all?(&:present?)
      cv = Cv.find_by(student_user_id: current_student_user.id)
      if !cv.name.eql? params[:cv][:name]
         cv.name = params[:cv][:name]
       end
      if !cv.phone.eql? params[:cv][:phone]
          cv.phone = params[:cv][:phone]
        end
      if !cv.address.eql? params[:cv][:address]
          cv.address = params[:cv][:address]
        end
      if !cv.content.eql? params[:cv][:content]
          cv.content = params[:cv][:content]
        end

      if cv.save
        render json: cv, status: :ok
      else
        render json: {success:false, cv: "Could not save cv"}, status: 400
      end
    else
      render json: {success:false, cv: "Please enter required fields"}, status: 400
    end
  end
end
