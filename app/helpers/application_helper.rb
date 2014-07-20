module ApplicationHelper


		def categories_home_display
				Category.published.limit(7)
		end
		
		def categories_home_more
				categories_more = Category.published
				categories_more = categories_more - categories_home_display
		end
		
		def categories_count
				Category.published.count
		end
		
		def categories_home_dropdown_display
    @categories =  Category.published
  end
		
		def categories_list
				Category.published.includes(:sub_categories)
		end
		
end
