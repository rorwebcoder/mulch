class OrderItemExtraCharge < ActiveRecord::Base
  attr_accessible :quantity
  
  # Associations
  belongs_to :order_item
  belongs_to :extra_charge
end
