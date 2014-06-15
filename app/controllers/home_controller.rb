class HomeController < ApplicationController
		def demo
				if current_user && current_user.role == "admin"
						redirect_to  admin_home_path
				else
						redirect_to  home_index_path
				end
				
		end
		
		def index
						@services = Service.where('is_published = ?', true)
		end
end
