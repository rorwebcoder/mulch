class AddPublishedFieldToCategory < ActiveRecord::Migration
  def up
    add_column :categories, :is_published, :boolean, :default => true
  end

  def down
    remove_column :services, :is_published
  end
end
