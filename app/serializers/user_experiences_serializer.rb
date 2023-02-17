class UserExperiencesSerializer < ActiveModel::Serializer
  attributes :id, :username, :location

  has_many :experiences
end
