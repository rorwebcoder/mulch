class Admin::InnerCategoriesController < ApplicationController
			layout 'admin_layout'
		before_filter :custom_auth_user
				before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				params[:category] = params[:category].to_i if params[:category]
				params[:sub_category] = params[:sub_category].to_i if params[:sub_category]
				@categories = Category.all
				@category = Category.find(params[:category]) if Category.exists?(params[:category])
				@sub_categories = @category ? @category.sub_categories : []
				@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
				category = @sub_category || @category
				@inner_categories = category ? category.inner_categories : InnerCategory.order("created_at DESC").all
		end
		
		def new
						@inner_category = InnerCategory.new()
		end
						
		def create
				@inner_category = InnerCategory.create(params[:inner_category])
				if @inner_category.save
						flash[:success] = "Inner Category created successfully."
						redirect_to admin_inner_categories_path
				else
						render 'new'
				end
		end
		
		def edit
		end
		
		def update
				if @inner_category.update_attributes(params[:inner_category])
						flash[:success] = "Inner Category updated successfully."
						redirect_to admin_inner_categories_path
				else
						render 'edit'
				end
		end
		
		def show
		end
		
		def destroy
				@inner_category.destroy
				flash[:success] = "Sub Category deleted successfully."
				redirect_to admin_inner_categories_path
		end
		
		# Method defined to handle ajax request to populate sub category, inner category.
		def populate_category
				category = Category.find(params[:category_id])
				@sub_categories = category.sub_categories
		end
		
				private		
		def valid_record
				return redirect_to admin_inner_categories_path if !InnerCategory.exists?(params[:id])
				@inner_category = InnerCategory.find(params[:id])
		end
		
		def custom_auth_user
				if !user_signed_in?
						redirect_to new_user_session_path
				elsif current_user.role != "admin"
						redirect_to home_index_path
				end
		end
end

