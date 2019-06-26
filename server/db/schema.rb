# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171115122030) do

  create_table "applications", force: :cascade do |t|
    t.integer "status"
    t.text "job_message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "job_id"
    t.integer "student_user_id"
    t.index ["job_id"], name: "index_applications_on_job_id"
    t.index ["student_user_id"], name: "index_applications_on_student_user_id"
  end

  create_table "business_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "access_token"
    t.string "business_name"
    t.index ["email"], name: "index_business_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_business_users_on_reset_password_token", unique: true
  end

  create_table "cvs", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "phone", default: "", null: false
    t.string "address", default: "", null: false
    t.text "content", default: "", null: false
    t.integer "student_user_id"
    t.index ["student_user_id"], name: "index_cvs_on_student_user_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "business_name"
    t.integer "job_length"
    t.integer "job_vacancy"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "business_user_id"
    t.index ["business_user_id"], name: "index_jobs_on_business_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "sender_id"
    t.string "sender"
    t.string "message"
    t.integer "application_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["application_id"], name: "index_messages_on_application_id"
  end

  create_table "student_users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "access_token"
    t.string "provider"
    t.string "uid"
    t.string "image"
    t.string "fullname"
    t.index ["email"], name: "index_student_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_student_users_on_reset_password_token", unique: true
  end

end
