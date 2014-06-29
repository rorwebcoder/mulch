class CategoriesController < ApplicationController
			before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def show
				@category = Category.find(params[:id])
				@sub_categories = @category.sub_categories
				@categor_services = @category.services.where("services.is_published = true")
		end
		
		
			private		
		def valid_record
				return redirect_to home_index_path if !Category.exists?(params[:id])
				@category = Category.find(params[:id])
		end
		
end
