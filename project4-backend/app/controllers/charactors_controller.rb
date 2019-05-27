class CharactorsController < ApplicationController
        
    def index
        @charactors = Charactor.all
        render json: @charactors
    end

    def create 
        @charactor = create_charactor
        render json: @charactor, status: 201
    end

    private
    def create_charactor
        @name = params[:name]
        case params[:type]
        when 'lazy'
            @charactor = Lazy.create(name: @name)
        when 'intelligent'
            @charactor = Intelligent.create(name: @name)
        end
        @charactor
    end
end
