class EventCharactersController < ApplicationController

    def create 
        EventCharacter.create(event_char_params)
    end

    private
    def event_char_params 
        params.require(:event_character).permit(:event_id, :character_id)
    end
end
