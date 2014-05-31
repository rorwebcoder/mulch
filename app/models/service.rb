class Service < ActiveRecord::Base
  attr_accessible :title, :short_desc, :long_desc, :response_time, :cost, :deliverable_days, :inner_category_id,:user_id,:is_published
  
  # Associations
  has_one :attachment, as: :attachable
  belongs_to :category, :class_name => "InnerCategory", :foreign_key => "inner_category_id"
  belongs_to :user
  
  validates :title, :presence => true
  validates :short_desc, :presence => true
  validates :response_time, :presence => true
  validates :cost, :presence => true
  validates :deliverable_days, :presence => true
  validates :inner_category_id, :presence => true
  validates :user_id, :presence => true
end
