class User < ApplicationRecord

    has_many :experiences
    has_many :activities
    has_many :destinations

    #username validations
    before_save { username.downcase! }
    validates :username, presence: true, length: { minimum: 4, maximum: 18 }, uniqueness: true, on: :create
    
    #password validations
    has_secure_password    
    validates :password, presence: true, length: { minimum: 8, maximum: 18 }

    #email validations
    before_save { email.downcase! }
    validates :email, presence: true, length: { minimum: 7, maximum: 255 }, uniqueness: true, on: :create


    #bio validations
    validates :bio, presence: true
end


# Excess code, might use later
    #image validations (BREAKS THE CODE IF EMPTY)
    #validates :image_url, presence: true
    #VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    #, format: { with: VALID_EMAIL_REGEX }