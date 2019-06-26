class AddStudentUserToCv < ActiveRecord::Migration[5.1]
  def change
    add_reference :cvs, :student_user, foreign_key: true
  end
end
