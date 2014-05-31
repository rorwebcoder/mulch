class AddAttachableFields < ActiveRecord::Migration
  def self.up
    add_attachment :attachments, :media
    add_column :attachments, :attachable_id, :integer
    add_column :attachments, :attachable_type, :string
  end

  def self.down
    remove_attachment :attachments, :media
    remove_column :attachments, :attachable_id, :attachable_type
  end
end
