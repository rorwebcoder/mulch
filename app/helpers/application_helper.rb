module ApplicationHelper


		def categories_home_display
				Category.public_accessible.limit(7)
		end
		
		def categories_home_more
				categories_more = Category.public_accessible
				categories_more = categories_more - categories_home_display
		end
		
		def categories_count
				Category.public_accessible.count
		end
		
		def categories_home_dropdown_display
    @categories =  Category.public_accessible
  end
  
		
end
