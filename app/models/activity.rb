class Activity < ApplicationRecord
    has_many :experiences
    has_many :destinations, through: :experiences

    validates :title, presence: true
    # validates :image_url, presence: true
end
