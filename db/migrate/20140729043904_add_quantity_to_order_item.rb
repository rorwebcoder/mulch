class AddQuantityToOrderItem < ActiveRecord::Migration
  def up
    add_column :order_items, :quantity, :integer
  end

  def down
    remove_column :order_items, :quantity
  end
end
