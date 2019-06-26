class Api::V1::BusinessUsersController < ApplicationController
  before_action :authenticate_with_token!, only: [:logout]
  skip_before_action :check_user, only: :destroy

  def register
    #We need to check if the user already exists in the database?
    if BusinessUser.find_for_database_authentication(email: params[:email]).nil?
      if params[:business_user].values_at(:email, :password, :password_confirmation, :business_name).all?(&:present?)
        if params[:business_user][:password].eql? params[:business_user][:password_confirmation]
          user = BusinessUser.new(
                          business_name: params[:business_user][:business_name],
                          email:  params[:business_user][:email],
                          password: params[:business_user][:password]
          )
          if user.save
            render json: user.as_json(access_token: user.access_token, email: user.email), status: 201
          else
            render json: user.errors, status: 422
          end
        else
          render json: {success: false, message: "Passwords don't match"}, status: 401
        end
      else
        render json: {success: false, message: "One of more field entries are empty"}, status: 401
      end
    else
      render json: {success: false, message: "User already exists"}, status: 401
    end
  end

  def login

    if params[:email] && params[:password]

      user = BusinessUser.find_for_database_authentication(email: params[:email])

      if user.nil?
        render json: {success: false, message: "Error with your login or password"}, status: 401

      else
        if user.valid_password?(params[:password])
          sign_in("business_user", user)
          render json: {success: true, access_token: user.access_token, email: user.email}, status: :ok

        else
          render json: {success: false, message: "Error with your login or password"}, status: 401
        end
      end
    else
      render json: {success: false, message: "Error with your login or password"}, status: 401
    end
  end

  def logout
    user = BusinessUser.find_by(access_token: params[:access_token])
    user.generate_authentication_token
    user.save
    render json: {is_success: true}, status: :ok
  end
end
