class Service < ActiveRecord::Base
  attr_accessible :title, :short_desc, :long_desc, :response_time, :cost, :deliverable_days, :inner_category_id, :user_id, :is_published, :attachment_attributes,
                        :buyer_instruction, :tags
  
  # Associations
  has_one :attachment, as: :attachable
  belongs_to :category, :class_name => "InnerCategory", :foreign_key => "inner_category_id"
  belongs_to :user
  
  validates :title, :presence => true
  #~ validates :short_desc, :presence => true
  validates :long_desc, :presence => true
  #~ validates :response_time, :presence => true
  #~ validates :cost, :presence => true
  validates :deliverable_days, :presence => true
  validates :inner_category_id, :presence => true
  validates :user_id, :presence => true
  validates :buyer_instruction, :presence => true
  validates :tags, :presence => true
  
  accepts_nested_attributes_for :attachment

  def validate_and_assign_cost(param_cost)
    if param_cost.to_i > 0
      self.cost = param_cost
      return true
    else
      errors.add(:cost, (param_cost == "") ? "Cost cannot be blank" : "Cost should be greater than Zero." )
      return false
    end
  end
end
