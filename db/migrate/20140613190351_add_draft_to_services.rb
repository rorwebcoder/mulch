class AddDraftToServices < ActiveRecord::Migration
  def up
    add_column :services, :is_draft, :boolean, :default => true
  end

  def down
    remove_column :services, :is_draft
  end
end
