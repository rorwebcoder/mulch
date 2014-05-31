class Attachment < ActiveRecord::Base
  attr_accessible :media
  has_attached_file :media, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :media, :content_type => /\Aimage\/.*\Z/
  
  belongs_to :attachable, :polymorphic => true
end
