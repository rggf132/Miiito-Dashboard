class Api::V1::StudentUsersController < ApplicationController
  before_action :authenticate_with_token!, only: [:logout]
  skip_before_action :check_user, only: :destroy

  def facebook
    if params[:facebook_access_token]
      graph = Koala::Facebook::API.new(params[:facebook_access_token])
      user_data = graph.get_object("me?fields=name,email,id,picture")

      user = StudentUser.find_by(email: user_data['email'])
      if user
        user.generate_authentication_token
        user.save
        render json: user, status: :ok
      else
        user = StudentUser.new(
                        fullname: user_data['name'],
                        email:  "benjamin.adzovic@gmail.com",#user_data['email'],
                        uid: user_data['id'],
                        password: Devise.friendly_token[0,20],
                        provider: 'Facebook',
                        image: user_data['picture']['data']['url']
        )

        user.generate_authentication_token
        if user.save
          render json: user, status: :ok
        else
          render json: {error: user.errors, is_success: false}, status: 422
        end
      end
    else
      render json: {error: "Invalid Facebook Token", is_success: false}, status: :unprocessable_entity
    end
  end

  def register

    if StudentUser.find_for_database_authentication(email: params[:email]).nil?
      if params[:student_user].values_at(:email, :password, :password_confirmation, :fullname).all?(&:present?)
        if params[:student_user][:password].eql? params[:student_user][:password_confirmation]
          user = StudentUser.new(
                          fullname: params[:student_user][:fullname],
                          email:  params[:student_user][:email],
                          password: params[:student_user][:password]
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
      user = StudentUser.find_for_database_authentication(email: params[:email])
      if user.nil?
        render json: {success: false, message: "Error with your login or password"}, status: 401
      else
        if user.valid_password?(params[:password])
          sign_in("student_user", user)
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
    user = StudentUser.find_by(access_token: params[:access_token])
    user.generate_authentication_token
    user.save
    render json: {is_success: true}, status: :ok
  end
end
