class AddFieldsToBusinessUser < ActiveRecord::Migration[5.1]
  def change
    add_column :business_users, :access_token, :string
    add_column :business_users, :business_name, :string
  end
end
