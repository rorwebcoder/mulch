class Category < ActiveRecord::Base
  attr_accessible :name, :description, :is_public
  
  # Validations
  validates :name, :presence => true, :uniqueness => true
  validates :description, :presence => true
  #~ validates :is_public, :presence => true
  
  # Associations
  has_many :sub_categories
  
  

    def get_services_of_category
      inner_categories=[]
      services=[]
      sub_categories = self.sub_categories
          sub_categories.each do |sub_category|
            inner_categories << sub_category.inner_categories
          end
          inner_categories.flatten.each do |inner_category|
            inner_category.services.each do |service| 
            if service.is_published == true
              services << service
            end
            end
          end

          return services.flatten
      end

end
