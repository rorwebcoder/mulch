class SubCategory < ActiveRecord::Base
  attr_accessible :name, :description
  
  # Associations
  has_many :services
  belongs_to :category
end
