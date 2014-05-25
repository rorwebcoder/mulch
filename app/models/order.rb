class Order < ActiveRecord::Base
  attr_accessible :status
  
  # Associations
  has_many :order_items
  belongs_to :user
end
