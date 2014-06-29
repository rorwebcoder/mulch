class InnerCategoriesController < ApplicationController
		before_filter :valid_record, :only => [:show]

		def show
				@inner_category = InnerCategory.find(params[:id])
				@services = @inner_category.services.where("services.is_published = true")
		end


		private		
		def valid_record
				return redirect_to home_index_path if !InnerCategory.exists?(params[:id])
				@inner_category = InnerCategory.find(params[:id])
		end
		
end
