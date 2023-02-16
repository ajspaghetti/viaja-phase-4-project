class Destination < ApplicationRecord
    has_many :experiences
    has_many :activities, through: :experiences

    validates :title, presence: true
    # validates :image_url, presence: true
    validates :city, presence: true
    validates :region, presence: true
    validates :country, presence: true
end
