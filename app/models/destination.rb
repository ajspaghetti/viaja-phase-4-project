class Destination < ApplicationRecord
    has_many :experiences
    has_many :users, through: :experiences

    validates :place_name, presence: true, uniqueness: true
    validates :city, :region, :country, presence: true
end
