class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name
      t.text :description
      t.boolean :is_public, default: false
      t.timestamps
    end
  end
end
