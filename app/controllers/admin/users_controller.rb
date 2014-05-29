class Admin::UsersController < ApplicationController
		layout 'admin_layout'		
		
		def index
				@users =  User.find(:all , :order=> 'created_at desc')
		end
		
end
