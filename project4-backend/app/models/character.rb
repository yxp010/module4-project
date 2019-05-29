class Character < ApplicationRecord
    has_many :events
    has_many :buildings, through: :events

    after_initialize :set_attributes, if: :new_record?

    def set_attributes
    end

    def reset_action
    end
end
