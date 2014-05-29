class CreateInnerCategories < ActiveRecord::Migration
  def change
    create_table :inner_categories do |t|
      t.string :name
      t.text :description
      t.integer :sub_category_id
      t.timestamps
    end
  end
end
