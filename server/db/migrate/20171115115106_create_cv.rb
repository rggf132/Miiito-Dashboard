class CreateCv < ActiveRecord::Migration[5.1]
  def change
    create_table :cvs do |t|
      t.string :name,         null: false, default: ""
      t.string :phone,        null: false, default: ""
      t.string :address,      null: false, default: ""

      t.text :content,        null: false, default: ""
    end
  end
end
