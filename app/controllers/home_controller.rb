class HomeController < ApplicationController
		def demo
				if current_user && current_user.role == "admin"
						redirect_to  admin_home_path
				else
						redirect_to  home_index_path
				end
		end
		
		def index
				#~ @services = Service.where('is_published = ?', true)
				@services = Service.find_by_sql "SELECT services.* FROM services INNER JOIN inner_categories ON services.inner_category_id = inner_categories.id INNER JOIN sub_categories ON inner_categories.sub_category_id = sub_categories.id INNER JOIN categories ON sub_categories.category_id = categories.id WHERE (categories.is_published = 1 AND categories.is_public = 1 AND services.is_published = 1)"
		end
end
