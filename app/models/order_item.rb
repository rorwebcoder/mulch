class OrderItem < ActiveRecord::Base
  attr_accessible :status
  
  # Associations
  has_many :messages
  belongs_to :order
  belongs_to :service
end
