class AddCartStatusToItem < ActiveRecord::Migration
  def self.up
    add_column :items, :inCart, :boolean
  end

  def self.down
    remove_column :items, :inCart
  end
end
