class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :activity_destination

  has_many :experiences
  has_many :destinations

  def activity_destination
    self.object.destination.title
  end
end