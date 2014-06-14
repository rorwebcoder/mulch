class AdditionalServiceFields < ActiveRecord::Migration
  def up
    add_column :services, :tags, :text
    add_column :services, :buyer_instruction, :text
  end

  def down
    remove_column :services, :tags, :buyer_instruction
  end
end
