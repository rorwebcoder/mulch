module ApplicationHelper


		def categories_home_display
				categories_display = Category.where('is_public = true').limit(7)
				categories_display
		end
		
		def categories_home_more
				categories_more = Category.where('is_public = true')
				categories_more = categories_more - categories_home_display
		end
		
		def categories_count
				categories_cnt = Category.where('is_public = true').count
				categories_cnt
		end
		
end
