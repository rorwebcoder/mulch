class Admin::UsersController < ApplicationController
		layout 'admin_layout'		
		before_filter :custom_auth_user
		
		def index
				@users =  User.find(:all , :order=> 'created_at desc')
		end
		
		private
		
		def custom_auth_user
				if !user_signed_in?
						redirect_to new_user_session_path
				elsif current_user.role != "admin"
						redirect_to home_index_path
				end
		end
end
