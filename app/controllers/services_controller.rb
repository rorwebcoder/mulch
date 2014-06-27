class ServicesController < ApplicationController
		before_filter :custom_auth_user
		before_filter :find_draft_service, :only => [:new, :finish]
		before_filter :valid_record, :only => [:show, :edit, :update, :destroy]
		
		def index
		end
		
		def start_service
				session[:draft_service_id] = nil
		end
		
		def new
				#~ @service = Service.new(:user_id => current_user.id)
				@categories = Category.public_accessible
				@sub_categories = []
				@inner_categories = []
				form_data_loader if @available_in_session
				build_extra_charges if params[:step] == "3"
		end
		
		def build_extra_charges
				if @service.extra_charges.length < 1
						@service.extra_charges.build
				end
		end
		
		def create
				@service = Service.create(params[:service].update({:user_id => current_user.id}))
				@save = false
				if @service.save
						@service.build_attachment if @service.attachment.nil?
						session[:draft_service_id] = @service.id
						flash[:success] = "Service created successfully."
						@save = true
						form_data_loader
				else
						@categories = Category.public_accessible
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
				end
		end
		
		def form_data_loader
				@category = @service.category.sub_category.category
				@sub_category = @service.category.sub_category
				params[:category] = @category.id
				params[:sub_category] = @sub_category.id
				@categories = Category.all
				@sub_categories = @category.sub_categories
				@inner_categories = @sub_category.inner_categories
		end
		
		def edit
		end
		
		def update
				if params[:step] == "1"
						update_step1_process
				elsif params[:step] == "2"
						update_step2_process
				elsif params[:step] == "3"
						update_step3_process
				end
		end
		
		def update_step3_process
				#~ @step3_save = @service.validate_and_assign_cost(params[:service][:cost])
				#~ @service.save if @step3_save
				@step3_save = @service.update_attributes(params[:service])
		end
		
		def update_step2_process
				@step2_save = false
				if @service.update_attributes(params[:service])
						@step2_save = true
				end
				redirect_to new_service_path(:step => 3)
		end
		
		def update_step1_process
				@save = false
				if @service.update_attributes(params[:service])
						@service.build_attachment if @service.attachment.nil?
						session[:draft_service_id] = @service.id
						flash[:success] = "Service created successfully."
						@save = true
						form_data_loader
				else
						@categories = Category.public_accessible
						@category = Category.find(params[:category]) if Category.exists?(params[:category])
						@sub_categories = @category ? @category.sub_categories : []
						@sub_category = SubCategory.find(params[:sub_category]) if SubCategory.exists?(params[:sub_category])
						@inner_categories = @sub_category ? @sub_category.inner_categories : []
				end
		end
		
		# Method defined to handle ajax request to populate sub category, inner category.
		def populate_category
				if params[:purpose] == "category"
						category = Category.find(params[:category_id])
						@sub_categories = category.sub_categories
				elsif params[:purpose] == "sub_category"
						sub_category = SubCategory.find(params[:category_id])
						@inner_categories = sub_category.inner_categories
				end
		end
		
		def finish
				if @service
						@service.update_attribute(:is_draft, false)
						session[:draft_service_id] = nil
				end
				redirect_to root_path
		end
		
				private		
		def valid_record
				return redirect_to admin_services_path if !Service.exists?(params[:id])
				@service = Service.find(params[:id])
		end
		
		def custom_auth_user
				return redirect_to root_path if !user_signed_in?
		end
		
		def find_draft_service
				if Service.exists?(session[:draft_service_id])
						@service = Service.find(session[:draft_service_id])
						@available_in_session = true
				else
						@service = current_user.services.build
						session[:draft_service_id] = nil
						@available_in_session = false
				end
		end

end
