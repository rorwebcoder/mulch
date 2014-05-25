class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.float :total_cost
      t.float :total_service_cost
      t.float :charges
      t.string :status, default: 'open'
      
      t.integer :user_id
      t.timestamps
    end
  end
end
