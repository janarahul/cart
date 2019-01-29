class AddDefaultValueToinCartfieldInItem < ActiveRecord::Migration
  def self.up
  	change_column :items, :inCart, :boolean, :default => false
  end

  def self.down
  end
end
