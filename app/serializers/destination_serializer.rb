class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :city, :region, :country

  has_many :experiences
  has_many :activities

end
