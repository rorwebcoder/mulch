class Admin::CategoriesController < ApplicationController
		layout 'admin_layout'
		
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@categories = Category.order("created_at DESC").all
		end
		
		def new
				@category = Category.new()
		end
		
		def create
				@category = Category.create(params[:category])
				if @category.save
						flash[:success] = "Category created successfully."
						redirect_to admin_categories_path
				else
						render 'new'
				end
		end
		
		def edit
		end
		
		def update
				if @category.update_attributes(params[:category])
						flash[:success] = "Category updated successfully."
						redirect_to admin_categories_path
				else
						render 'edit'
				end
		end
		
		def show
		end
		
		def destroy
				@category.destroy
				flash[:success] = "Category deleted successfully."
				redirect_to admin_categories_path
		end
		
		private		
		def valid_record
				return redirect_to admin_categories_path if !Category.exists?(params[:id])
				@category = Category.find(params[:id])
		end
end
