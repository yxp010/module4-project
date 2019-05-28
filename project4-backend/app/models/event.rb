class Event < ApplicationRecord
    belongs_to :character
    belongs_to :building
end
