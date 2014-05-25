class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.integer :order_id
      t.integer :service_id
      
      t.float :service_cost
      t.string :status, default: 'open'
      t.timestamps
    end
  end
end
