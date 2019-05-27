class Building < ApplicationRecord
    has_many :events
    has_many :charactors, through: :events
end
