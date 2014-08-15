class CartItem < ActiveRecord::Base
  attr_accessible :service_cost, :status, :quantity, :service_id
  
  # Associations
  has_many :cart_item_extra_charges
  belongs_to :cart
  belongs_to :service
end
