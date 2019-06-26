Rails.application.routes.draw do
  # devise_for :business_users, default:{default: :json}
  devise_for :student_users, default:{default: :json}

  namespace :api, defaults: {format: :json} do
    namespace :v1 do

      post '/student_register' => 'student_users#register'
      post '/student_facebook' => 'student_users#facebook'
      post '/student_login' => 'student_users#login'
      post '/student_logout' => 'student_users#logout'

      post '/change_student_password' => 'student_profile#change_password'
      post '/change_business_password' => 'business_profile#change_password'

      post '/business_register' => 'business_users#register'
      post '/business_login' => 'business_users#login'
      post '/business_logout' => 'business_users#logout'

      post '/create_job' => 'business_home#create_job'
      post '/job_posts' => 'business_home#return_all_job_posts'
      post '/update_application_status' => 'shared_job#update_application_status'

      post '/apply_for_job' => 'shared_job#apply_for_job'
      post '/student_applications' => 'student_home#return_all_applications'
      get  '/student_applications_test' => 'student_home#return_all_applications_get_test'
      get  '/student_jobs_test' => 'student_home#return_all_jobs_get_test'
      get  '/company_name_test' => 'student_home#return_public_business'
      get  '/get_application_list_per_job' => 'student_home#return_applications_per_job'
      get  '/get_application_per_application_id' => 'student_home#return_applications_per_application_id'
      get  '/get_job_per_job_id' => 'student_home#return_get_job_per_job_id'
      get  '/get_job_list_per_string' => 'student_home#return_job_per_string'
      get  '/get_all_jobs_for_search' => 'student_home#return_all_jobs_search'
      post '/withdraw_application' => 'student_home#withdraw_application'

      post '/job_applications' => 'business_job#return_all_applications'

      post '/view_job' => 'job_search#open_job'
      post '/view_application' => 'shared_application#get_application'

      post '/chat' => 'shared_application#return_all_messages'
      post '/send_message' => 'shared_application#new_message'

      post '/create_cv' => 'student_profile#create_cv'
      post '/edit_cv' => 'student_profile#edit_cv'

    end
  end
end
