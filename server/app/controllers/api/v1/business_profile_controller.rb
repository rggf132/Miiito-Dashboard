class Api::V1::BusinessProfileController < ApplicationController
  before_action :authenticate_with_business_token!

  def change_password
    user = current_business_user
    if user.valid_password? params[:current_password]
      if params[:new_password].eql? params[:password_confirmation]
        user.password = params[:new_password]
        if user.save
          render json: "Success: Password changed", status: 200
        else
          render json: {success: false, message: "Could not update password"}, status: 400
        end
      else
        render json: {success: false, message: "Please ensure new passwords match"}, status: 403
      end
    else
      render json: {success: false, message: "Incorrect current password"}
    end
  end
end
