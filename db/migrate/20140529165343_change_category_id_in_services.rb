class ChangeCategoryIdInServices < ActiveRecord::Migration
  def change
    rename_column :services, :sub_category_id, :inner_category_id
  end
end
