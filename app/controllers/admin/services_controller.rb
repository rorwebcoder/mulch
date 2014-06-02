class Admin::ServicesController < ApplicationController
		layout 'admin_layout'
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@services = Service.order("created_at DESC").all
		end
		
		def new
				@service = Service.new(:user_id => current_user.id)
				@categories = Category.all
				@sub_categories = []
				@inner_categories = []
		end
		
		def create
				@service = Service.create(params[:service].update({:user_id => current_user.id}))
				if @service.save
						flash[:success] = "Service created successfully."
						redirect_to admin_services_path
				else
						@categories = Category.all
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
						render 'new'
				end
		end
		
 def edit
		end
		
		def update
				if @service.update_attributes(params[:service].update({:user_id => current_user.id}))
						flash[:success] = "Service updated successfully."
						redirect_to admin_services_path
				else
						render 'edit'
				end
		end
		
		def show
		end
		
		def destroy
				@service.destroy
				flash[:success] = "Service deleted successfully."
				redirect_to admin_services_path
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
end
