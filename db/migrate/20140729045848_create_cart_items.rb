class CreateCartItems < ActiveRecord::Migration
  def change
    create_table :cart_items do |t|
      t.integer :cart_id
      t.integer :service_id
      t.integer :quantity
      
      t.float :service_cost
      t.string :status, default: 'open'
      t.timestamps
    end
  end
end
