
class CharactersController < ApplicationController
        
    def index
        @characters = Character.all
        render json: @characters
    end

    def show
        @character = Character.find(params[:id])
        render json: @character
    end

    def create 
        @character = create_character
        render json: @character, status: 201
    end

    def update
        @character = Character.find(params[:id])
        @character.update(character_params)
        # render json: @character
    end

    def all_events
        @character = Character.find(params[:id])
        @events = @character.event_characters
        render json: @events
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

    def character_params
        params.require(:character).permit(
            :gold,
            :coding_ability,
            :health,
            :energy,
            :happiness,
            :creativity,
            :social,
            :minute,
            :day
          )
    end
end
