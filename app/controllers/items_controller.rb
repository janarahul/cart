class ItemsController < ApplicationController
	def index
		@items = Item.all

		render :json => @items
	end

	def new
		@item = Item.new
	end
	def create
		@item = Item.new(params[:item])
		#@item = Item.new(article_params)
		@item.save
		flash[:notice] = "Item #{@item.name} created"
		redirect_to items_path
	end

end
