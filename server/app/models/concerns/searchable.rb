module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model

    mapping do
      indexes :id, type: 'integer'
      indexes :title, type: 'string'
      indexes :description, type: 'text'
      indexes :business_name, type: 'string'
      indexes :job_length, type: 'integer'
      indexes :job_vacancy, type: 'integer'
      indexes :created_at, index: :not_analyzed
      indexes :updated_at, index: :not_analyzed
      indexes :business_user_id, type: 'integer'
    end

    def self.search(query)
      # ...
    end
  end
end
