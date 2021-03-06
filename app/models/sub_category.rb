class SubCategory < ActiveRecord::Base
  attr_accessible :name, :description,:category_id
  
  extend FriendlyId
  friendly_id :name, use: :slugged
  
  # Associations
  has_many :inner_categories
  has_many :services, :through => :inner_categories
  belongs_to :category
  
    # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  validates :category_id, :presence => true
  
  def get_services_of_sub_category
      services=[]
    inner_categories = self.inner_categories
      inner_categories.each do |inner_category|
        #~ services << inner_category.services
        inner_category.services.each do |service| 
          services << service if service.is_published?
        end
      end
    return services.flatten
  end
  
end
