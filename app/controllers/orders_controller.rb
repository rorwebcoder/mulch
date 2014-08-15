class OrdersController < ApplicationController
		before_filter :custom_auth_user
		
		def new
		end
		
		def purchase
				
		end
		
		private
		def custom_auth_user
				if !user_signed_in?
						store_location
						return redirect_to new_user_session_path
				end
		end
		
		def store_location
				puts "---------------Current url #{request.original_url}---------------------"
    session[:return_to] = request.original_url
		end
end
