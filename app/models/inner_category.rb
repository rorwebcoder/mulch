class InnerCategory < ActiveRecord::Base
  attr_accessible :name, :description, :sub_category_id
  
  # Associations
  has_many :services
  belongs_to :sub_category
      
  # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  validates :sub_category_id, :presence => true
end
