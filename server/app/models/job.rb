class Job < ApplicationRecord
  include Searchable
  belongs_to :business_user
  has_many :applications

  # validates :title, presence: true
  # validates :description, presence: true
  # validates :business_name, presence: true
  # validates :job_vacancy, presence: true
  # validates :job_length, presence: true

end
