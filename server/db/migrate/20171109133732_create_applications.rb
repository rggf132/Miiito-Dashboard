class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.integer :status
      t.text :job_message

      t.timestamps
    end
  end
end
