require 'faker'

StudentUser.destroy_all
BusinessUser.destroy_all
Cv.destroy_all
Job.destroy_all
Application.destroy_all

StudentUser.reset_column_information()
BusinessUser.reset_column_information()
Cv.reset_column_information()
Job.reset_column_information()
Application.reset_column_information()

5.times do |index|
  StudentUser.create!(email: Faker::Internet.email,
                      password: "test123",
                      fullname: Faker::Name.name)
end

p "Created #{StudentUser.count} StudentUsers"

3.times do |index|
  BusinessUser.create!(email: Faker::Internet.email,
                      password: "test123",
                      business_name: Faker::Name.name)
end

p "Created #{BusinessUser.count} BusinessUsers"

business_users = [1,1,2,2,3,3]

6.times do |index|
  Job.create!(title: Faker::Name.title,
                      description: Faker::Lorem.paragraph(sentence_count = 30, supplemental = false, random_sentences_to_add = 3),
                      business_name: BusinessUser.find_by_id(business_users[index-1]).business_name,
                      job_length: Faker::Number.between(from = 1, to = 14),
                      job_vacancy: Faker::Number.between(from = 1, to = 5),
                      business_user_id: business_users[index-1])
end

p "Created #{Job.count} Jobs"

student_users = [1,1,2,2,3,3,4,4,5,5]
jobs = [1,1,2,2,3,3,4,4,5,6]

10.times do |index|
  Application.create!(status: Faker::Number.between(from = 0, to = 2),
                      job_message: Faker::Lorem.paragraph(sentence_count = 8, supplemental = false, random_sentences_to_add = 3),
                      job_id: jobs[index-1],
                      student_user_id: student_users[index-1])
end

p "Created #{Application.count} Applications"
