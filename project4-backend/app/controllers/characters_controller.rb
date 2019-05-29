class CharactersController < ApplicationController
        
    def index
        @characters = Character.all
        render json: @characters
    end

    def create 
        @character = create_character
        render json: @character, status: 201
    end

    def update
        
    end

    private
    def create_character
        @name = params[:name]
        case params[:type]
        when 'lazy'
            @character = Lazy.create(name: @name)
        when 'intelligent'
            @character = Intelligent.create(name: @name)
        end
        @character
    end
end
