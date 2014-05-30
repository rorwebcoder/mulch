class Category < ActiveRecord::Base
  attr_accessible :name, :description, :is_public
  
  # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  #~ validates :is_public, :presence => true
  
  # Associations
  has_many :sub_categories
end
