class SubCategory < ActiveRecord::Base
  attr_accessible :name, :description
  
  # Associations
  has_many :inner_categories
  belongs_to :category
end
