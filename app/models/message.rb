class Message < ActiveRecord::Base
  attr_accessible :sender_id, :receiver_id, :order_item_id, :content
  
  # Associations
  belongs_to :sender, :foreign_key => "sender_id", :class_name => "User"
  belongs_to :receiver, :foreign_key => "receiver_id", :class_name => "User"
  belongs_to :order_item
end
