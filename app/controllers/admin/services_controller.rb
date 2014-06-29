class Admin::ServicesController < ApplicationController
		layout 'admin_layout'
		before_filter :custom_auth_user
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@categories = Category.all
				@category = Category.find(params[:category]) if Category.exists?(params[:category])
				@sub_categories = @category ? @category.sub_categories : []
				@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
				@inner_categories = @sub_category ? @sub_category.inner_categories : []
				@inner_category = InnerCategory.find(params[:service_inner_category_id]) if InnerCategory.exists?(params[:service_inner_category_id])				
				
				category_object = @inner_category || @sub_category || @category
				@services = category_object ? category_object.services : Service.order("created_at DESC").all
		end
		
		def new
				@service = Service.new(:user_id => current_user.id)
				@service.build_attachment
				@service.extra_charges.build
				@categories = Category.all
				@sub_categories = []
				@inner_categories = []
		end
		
		def create
				@service = Service.create(params[:service].update({:user_id => current_user.id, :is_draft => false}))
				if @service.save
						flash[:success] = "Service created successfully."
						redirect_to admin_services_path
				else
						@service.build_attachment if @service.attachment.nil?
						@service.extra_charges.build if @service.extra_charges.blank?
						@categories = Category.all
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
						render 'new'
				end
		end
		
		def edit
				@service.build_attachment if @service.attachment.nil?
				@category = @service.category.sub_category.category
				@sub_category = @service.category.sub_category
				params[:category] = @category.id
				params[:sub_category] = @sub_category.id
				@categories = Category.all
				@sub_categories = @category.sub_categories
				@inner_categories = @sub_category.inner_categories
		end
		
		def update
				if @service.update_attributes(params[:service].update({:user_id => current_user.id, :is_draft => false}))
						flash[:success] = "Service updated successfully."
						redirect_to admin_services_path
				else
						@service.build_attachment if @service.attachment.nil?
						@categories = Category.all
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
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
		
		def update_published_status
				if Service.exists?(params[:service_id])
						@service = Service.find(params[:service_id])
						@service.update_attribute(:is_published, params[:purpose] == "Published")
				else
						@service = nil
				end
		end
		
		private		
		def valid_record
				return redirect_to admin_services_path if !Service.exists?(params[:id])
				@service = Service.find(params[:id])
		end
		
		def custom_auth_user
				if !user_signed_in?
						redirect_to new_user_session_path
				elsif current_user.role != "admin"
						redirect_to home_index_path
				end
		end
end
