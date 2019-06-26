class AddStudentUserToApplication < ActiveRecord::Migration[5.1]
  def change
    add_reference :applications, :student_user, foreign_key: true
  end
end
