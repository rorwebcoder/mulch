class CartItemExtraCharge < ActiveRecord::Base
  attr_accessible :quantity
  
  # Associations
  belongs_to :cart_item
  belongs_to :extra_charge
end
