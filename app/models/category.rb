class Category < ActiveRecord::Base
  attr_accessible :name, :description, :is_public
  
  # Associations
  has_many :sub_categories
end
