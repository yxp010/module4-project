class Building < ApplicationRecord
    has_many :events
    has_many :characters, through: :events
end
