class Application < ApplicationRecord
  belongs_to :student_user
  belongs_to :job

  has_many :messages, dependent: :destroy
end
