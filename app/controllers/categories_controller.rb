class CategoriesController < ApplicationController
			before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def show
				@category = Category.find(params[:id])
				@sub_categories = @category.sub_categories
				@categor_services = @category.services
		end
		
		
			private		
		def valid_record
				return redirect_to admin_categories_path if !Category.exists?(params[:id])
				@category = Category.find(params[:id])
		end
		
end
