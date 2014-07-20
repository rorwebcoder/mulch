class Attachment < ActiveRecord::Base
  attr_accessible :media
  #~ has_attached_file :media, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  has_attached_file :media,
      :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
      :url => "/system/:attachment/:id/:style/:filename"
  #~ validates_attachment_content_type :media, :content_type => /\Aimage\/.*\Z/
  validates_attachment :media, :presence => true,
    :content_type => { :content_type => /^image\/(png|gif|jpeg)/ }
    #:size => { :in => 0..10.kilobytes }
  
  belongs_to :attachable, :polymorphic => true
end
