class ServicesController < ApplicationController
			before_filter :custom_auth_user
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
		end
		
		def start_service
		end
		
		def new
					@service = Service.new(:user_id => current_user.id)
				@categories = Category.all
				@sub_categories = []
				@inner_categories = []
		end
		
		
				private		
		def valid_record
				return redirect_to admin_services_path if !Service.exists?(params[:id])
				@service = Service.find(params[:id])
		end
		
		def custom_auth_user
				return redirect_to root_path if !user_signed_in?
		end

		
end
