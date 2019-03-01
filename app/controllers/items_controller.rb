class ItemsController < ApplicationController
	def index
		if request.method == :get
			@items = Item.all
			render :json => @items
		else
			render :json => @items

		end	
	end
	def show 
		
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
	def edit
		@item = Item.find(params[:id])
	end

	def update
		@item = Item.find(params[:id])
		Item.update(params[:id],params[:item])
		
	end
	def put
		if request.method == :options
			render :nothing => true
		else
			@item = Item.find(params[:id])
			Item.update(params[:id],params[:item])
			render :json => Item.find(params[:id])
		end
		#@item = Item.find(params[:id])
		#Item.update(params[:id],params[:item])
	end
	'''def update
		@item = Item.find(params[:id])

		#@item.update(article_params) #no need save
		#flash.notice = "Article #{@article.title} updated" #as it is redirected to show action(as used many times) add it to layout
		redirect_to items_path #to show
	end'''

end
