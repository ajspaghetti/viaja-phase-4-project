class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :title, :activity, :description, :rating, :destination_id, :user_id, :user

  has_one :user
  has_one :destination
end
