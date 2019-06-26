  class Api::V1::StudentHomeController < ApplicationController

  before_action :authenticate_with_student_token!, :except => [:return_all_applications_get_test, :return_all_jobs_search, :return_job_per_string, :return_applications_per_job, :return_all_jobs_get_test, :return_public_business, :return_applications_per_application_id, :return_get_job_per_job_id]

  def return_all_applications
    user_id = current_student_user.id
    applications = Application.where(student_user_id: user_id)
    render json: applications, status: :ok
  end

  def return_all_applications_get_test
      user_id = 1
      @applications = Application.where(student_user_id: user_id)
      render json: {applications: @applications}, status: :ok
  end

  def return_applications_per_job
      job_id = params[:job_id]
      @applications = Application.where(job_id: job_id)
      render json: {applications: @applications}, status: :ok
  end

  def return_applications_per_application_id
      application_id = params[:application_id]
      @application = Application.where(id: application_id)
      #binding.pry
      render json: {application: @application}, status: :ok
  end

  def return_get_job_per_job_id
      job_id = params[:job_id]
      @job = Job.where(id: job_id)
      #binding.pry
      render json: {job: @job}, status: :ok
  end

  def return_job_per_string
      search_string = params[:search_string]
      if !Job.__elasticsearch__.client.indices.exists(index: "jobs")
        Job.__elasticsearch__.import(force: true) # Just for the purpose of making the search work ////
        sleep(1)
      end
      search_string = "*" + search_string + "*"
      # sleep(0.5)
      p search_string
      jobs = Array.new
      p search_string.eql?("")
      if search_string.eql?("")
        p "In if statement"
        response = Job.__elasticsearch__.client.search index: 'jobs',
                  body: {
                    query:{
                      match_all:{}
                    }
                  }
        
       if !response['hits']['hits'].nil?
        response['hits']['hits'].each do |job|
          jobs.push(Job.where(id: job['_id'])[0])
        end
      end
    else
      p "In else statement"
      # binding.pry
      response = Job.__elasticsearch__.search(query: { query_string: { query: search_string }}).response
      if !response['hits']['hits'].nil?
        response['hits']['hits'].each do |job|
          jobs.push(Job.where(id: job['_id'])[0])
        end
      end
    end
      p jobs
      if !jobs.nil?
        render json: jobs, status: :ok
      else
        render json: {jobs: Job.all}, status: :ok
      end
  end

  def return_all_jobs_search
    render json: {jobs: Job.all}, status: :ok
  end

  def return_all_jobs_get_test
      user_id = 1
      @jobs = Job.where(business_user_id: user_id)
      render json: {jobs: @jobs}, status: :ok
  end

  def return_public_business
      job_id = params[:job_id]
      job = Job.find_by(id: job_id)

      business_user = BusinessUser.find_by(id: job.business_user_id)
      render json: {company_name: business_user.business_name}, status: :ok
  end

  def withdraw_application
    if params[:application_id].present?
      application = Application.find_by(id: params[:application_id])
      if application.student_user_id.eql? current_student_user.id
        application.destroy
        render status: :ok
      else
        render json: {success: false, message: "Not authorized to withdraw this application"}, status: 401
      end
    else
      render json: {success: false, message: "Please choose valid application to withdraw"}, status: 401
    end
  end
end


# body: { query: { query_string: { default_field: 'title', default_operator: 'AND', fuzzy_prefix_length: 1, query: "search_string" } } }

# response = Job.__elasticsearch__.search(query: {multi_match: {query: params["f"],fields: ['title']}}).results

# response = Job.__elasticsearch__.search(query: { query_string: { query: "*e* " }})