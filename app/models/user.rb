class User < ApplicationRecord
    has_many :experiences, dependent: :destroy
    has_many :destinations, through: :experiences

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :location, presence: true
end
