class Character < ApplicationRecord
    has_many :event_characters
    has_many :events, through: :event_characters

    after_initialize :set_attributes, if: :new_record?

    def set_attributes
    end

    def reset_action
    end
end
