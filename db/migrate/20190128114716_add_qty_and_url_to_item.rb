class AddQtyAndUrlToItem < ActiveRecord::Migration
  def self.up
    add_column :items, :qty, :integer
    add_column :items, :url, :string
  end

  def self.down
    remove_column :items, :url
    remove_column :items, :qty
  end
end
