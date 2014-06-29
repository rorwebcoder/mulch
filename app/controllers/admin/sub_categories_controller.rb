class Admin::SubCategoriesController < ApplicationController
				layout 'admin_layout'
				before_filter :custom_auth_user
				before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@sub_categories = SubCategory.order("created_at DESC").all
		end
		
		def new
								@sub_category = SubCategory.new()
		end
						
		def create
				@sub_category = SubCategory.create(params[:sub_category])
				if @sub_category.save
						flash[:success] = "Sub Category created successfully."
						redirect_to admin_sub_categories_path
				else
						render 'new'
				end
		end
		
		def edit
		end
		
		def update
				if @sub_category.update_attributes(params[:sub_category])
						flash[:success] = "Sub Category updated successfully."
						redirect_to admin_sub_categories_path
				else
						render 'edit'
				end
		end
		
		def show
		end
		
		def destroy
				@sub_category.destroy
				flash[:success] = "Sub Category deleted successfully."
				redirect_to admin_sub_categories_path
		end
		
				private		
		def valid_record
				return redirect_to admin_sub_categories_path if !SubCategory.exists?(params[:id])
				@sub_category = SubCategory.find(params[:id])
		end
		
		def custom_auth_user
				if !user_signed_in?
						redirect_to new_user_session_path
				elsif current_user.role != "admin"
						redirect_to home_index_path
				end
		end
end
