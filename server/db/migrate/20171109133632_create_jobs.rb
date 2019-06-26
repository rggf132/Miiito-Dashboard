class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.text :description
      t.string :business_name
      t.integer :job_length
      t.integer :job_vacancy

      t.timestamps
    end
  end
end
