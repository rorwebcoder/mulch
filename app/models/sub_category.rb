class SubCategory < ActiveRecord::Base
  attr_accessible :name, :description,:category_id
  
  # Associations
  has_many :inner_categories
  belongs_to :category
  
    # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  validates :category_id, :presence => true
  
end
