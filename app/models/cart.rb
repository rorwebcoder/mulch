class Cart < ActiveRecord::Base
  attr_accessible :total_cost, :total_service_cost, :charges, :status
  
  # Associations
  has_many :cart_items
  belongs_to :user
end
