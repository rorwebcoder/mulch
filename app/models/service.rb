class Service < ActiveRecord::Base
  attr_accessible :title, :short_desc, :long_desc, :response_time, :cost, :deliverable_days, :inner_category_id
  
  # Associations
  has_one :attachment, as: :attachable
  belongs_to :category, :class_name => "InnerCategory", :foreign_key => "inner_category_id"
  belongs_to :user
end
