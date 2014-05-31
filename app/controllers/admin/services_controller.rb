class Admin::ServicesController < ApplicationController
		layout 'admin_layout'
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@services = Service.order("created_at DESC").all
		end
		
		def new
				@service = Service.new
		end
		
		private		
		def valid_record
				return redirect_to admin_services_path if !Service.exists?(params[:id])
				@service = Service.find(params[:id])
		end
end
