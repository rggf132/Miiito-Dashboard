class AddFieldsToStudentUser < ActiveRecord::Migration[5.1]
  def change
    add_column :student_users, :access_token, :string
    add_column :student_users, :provider, :string
    add_column :student_users, :uid, :string
    add_column :student_users, :image, :string
    add_column :student_users, :fullname, :string
  end
end
