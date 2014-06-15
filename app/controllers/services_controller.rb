class ServicesController < ApplicationController
		before_filter :custom_auth_user
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def show
		end
		
		def index
		end
		
		def start_service
		end
		
		def new
				@service = Service.new(:user_id => current_user.id)
				@categories = Category.all
				@sub_categories = []
				@inner_categories = []
				session[:draft_service_id] = nil
		end
		
		def create
				@service = Service.create(params[:service].update({:user_id => current_user.id}))
				@save = false
				if @service.save
						session[:draft_service_id] = @service.id
						flash[:success] = "Service created successfully."
						@save = true
						form_data_loader
				else
						@categories = Category.all
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
				end
		end
		
		def form_data_loader
				@category = @service.category.sub_category.category
				@sub_category = @service.category.sub_category
				params[:category] = @category.id
				params[:sub_category] = @sub_category.id
				@categories = Category.all
				@sub_categories = @category.sub_categories
				@inner_categories = @sub_category.inner_categories
		end
		
		def edit
		end
		
		def update
				@save = false
				if @service.update_attributes(params[:service])
						session[:draft_service_id] = @service.id
						flash[:success] = "Service created successfully."
						@save = true
						form_data_loader
				else
						@categories = Category.all
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
				end
		end
		
		# Method defined to handle ajax request to populate sub category, inner category.
		def populate_category
				if params[:purpose] == "category"
						category = Category.find(params[:category_id])
						@sub_categories = category.sub_categories
				elsif params[:purpose] == "sub_category"
						sub_category = SubCategory.find(params[:category_id])
						@inner_categories = sub_category.inner_categories
				end
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
