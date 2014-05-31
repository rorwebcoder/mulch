class Admin::ServicesController < ApplicationController
		layout 'admin_layout'
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
				@services = Service.order("created_at DESC").all
		end
		
		def new
				@service = Service.new
		end
		
		def create
				@service = Service.create(params[:service])
				if @service.save
						flash[:success] = "Service created successfully."
						redirect_to admin_services_path
				else
						render 'new'
				end
		end
		
 def edit
		end
		
		def update
				if @service.update_attributes(params[:service])
						flash[:success] = "Service updated successfully."
						redirect_to admin_services_path
				else
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
		
		private		
		def valid_record
				return redirect_to admin_services_path if !Service.exists?(params[:id])
				@service = Service.find(params[:id])
		end
end
