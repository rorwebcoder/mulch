class ExtraCharge < ActiveRecord::Base
  # attr_accessible :title, :body
  attr_accessible :description, :cost
  
  # Associations
  belongs_to :service
end
