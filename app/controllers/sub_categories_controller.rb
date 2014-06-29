class SubCategoriesController < ApplicationController
		
					before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def show
				@sub_category = SubCategory.find(params[:id])
				@inner_categories = @sub_category.inner_categories
				@sub_category_services = @sub_category.services.where("services.is_published = true")
		end
		
		
			private		
		def valid_record
				return redirect_to admin_categories_path if !Category.exists?(params[:id])
				@sub_category = SubCategory.find(params[:id])
		end
		
end
