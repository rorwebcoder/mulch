class CreateOrderItemExtraCharges < ActiveRecord::Migration
  def change
    create_table :order_item_extra_charges do |t|
      t.integer :order_item_id, :extra_charge_id
      t.integer :quantity
      t.timestamps
    end
  end
end
