class SubCategory < ActiveRecord::Base
  attr_accessible :name, :description,:category_id
  
  # Associations
  has_many :inner_categories
  belongs_to :category
  
    # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  validates :category_id, :presence => true
  
  def get_services_of_sub_category
      services=[]
    inner_categories = self.inner_categories
      inner_categories.each do |inner_category|
        services << inner_category.services
      end
    return services.flatten
  end
  
end
