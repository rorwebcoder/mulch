class AddSlugAllTables < ActiveRecord::Migration
  def up
    add_column :categories, :slug, :string
    add_column :sub_categories, :slug, :string
    add_column :inner_categories, :slug, :string
  end

  def down
    remove_column :inner_categories, :slug
    remove_column :sub_categories, :slug
    remove_column :categories, :slug
  end
end
