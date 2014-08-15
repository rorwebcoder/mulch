class CreateCartItemExtraCharges < ActiveRecord::Migration
  def change
    create_table :cart_item_extra_charges do |t|
      t.integer :cart_item_id
      t.integer :extra_charge_id
      t.integer :quantity
      
      t.timestamps
    end
  end
end
