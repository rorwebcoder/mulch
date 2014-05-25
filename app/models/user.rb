class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,  :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  #~ , :token_authenticatable
  attr_accessible :email, :password, :password_confirmation, :name, :about, :remember_me, :locker_attributes, :role
  validates_presence_of :email
  mount_uploader :image
  #~ , ImageUploader
  
  # Associations
  has_many :authorizations
  has_many :orders
  
  #~ after_create :send_confirmation_mail
  
  def send_confirmation_mail
    #~ UserMailer.send_new_user_message(self).deliver
  end

  def self.new_with_session(params,session)
    if session["devise.user_attributes"]
      new(session["devise.user_attributes"],without_protection: true) do |user|
        user.attributes = params
        user.valid?
      end
    else
      super
    end
  end

  def self.from_omniauth(auth, current_user)
    authorization = Authorization.where(:provider => auth.provider, :uid => auth.uid.to_s, :token => auth.credentials.token, :secret => auth.credentials.secret).first_or_initialize
    if authorization.user.blank?
      user = current_user.nil? ? User.where('email = ?', auth["info"]["email"]).first : current_user
      if user.blank?
       user = User.new
       user.password = Devise.friendly_token[0,10]
       user.name = auth.info.name
       user.email = auth.info.email
       auth.provider == "twitter" ?  user.save(:validate => false) :  user.save
     end
     authorization.username = auth.info.nickname
     authorization.user_id = user.id
     authorization.save
   end
   authorization.user
 end
end

