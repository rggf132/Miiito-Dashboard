class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.string :sender
      t.string :message
      t.references :application, foreign_key: true

      t.timestamps
    end
  end
end
