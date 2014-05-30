class Admin::InnerCategoriesController < ApplicationController
			layout 'admin_layout'
				before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@inner_categories = InnerCategory.order("created_at DESC").all
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
		
				private		
		def valid_record
				return redirect_to admin_inner_categories_path if !InnerCategory.exists?(params[:id])
				@inner_category = InnerCategory.find(params[:id])
		end
end

