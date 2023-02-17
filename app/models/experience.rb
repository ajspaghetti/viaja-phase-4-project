class Experience < ApplicationRecord
    belongs_to :user
    belongs_to :destination

    validates :title, :activity, :description, presence: true
    validates :rating, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }, presence: true
end
