class Event < ApplicationRecord

    has_many :event_characters
    has_many :characters, through: :event_characters 

end
