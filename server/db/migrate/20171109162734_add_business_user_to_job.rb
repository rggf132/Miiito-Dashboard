class AddBusinessUserToJob < ActiveRecord::Migration[5.1]
  def change
    add_reference :jobs, :business_user, foreign_key: true
  end
end
