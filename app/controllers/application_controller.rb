class ApplicationController < ActionController::Base
  #~ before_filter :authenticate_user!
  #~ before_filter :store_location
  protect_from_forgery
  
  def store_location
    puts "---------------Current url #{request.original_url}---------------------"
    session[:return_to] = request.original_url
  end

  def redirect_back_or_default(default)
    puts "available in session: #{session[:return_to]} -- #{default}"
    redirect_to(session[:return_to] || default)
  end
end
