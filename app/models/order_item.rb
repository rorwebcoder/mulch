class OrderItem < ActiveRecord::Base
  attr_accessible :status
  
  # Associations
  has_many :messages
  has_many :order_item_extra_charges
  belongs_to :order
  belongs_to :service
end
