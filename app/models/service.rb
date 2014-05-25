class Service < ActiveRecord::Base
  attr_accessible :title, :short_desc, :long_desc, :response_time, :cost, :deliverable_days, :sub_category_id
  
  # Associations
  belongs_to :sub_category
  belongs_to :user
end
