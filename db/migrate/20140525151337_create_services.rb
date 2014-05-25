class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :title
      t.string :short_desc
      t.text :long_desc
      t.integer :response_time
      t.float :cost
      t.integer :deliverable_days
      t.boolean :is_published, default: false
      
      t.integer :sub_category_id      
      t.integer :user_id      
      t.timestamps
    end
  end
end
