class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :image_url, :bio, :personal_experiences_destinations, :personal_experiences_activities

  has_many :experiences
  has_many :activities
  has_many :destinations

  def personal_experiences_destinations
    self.object.experiences.group_by{|experience| experience.destination_id}
  end

  def personal_experiences_activities
    self.object.experiences.group_by{|experience| experience.activity_id}
  end
end
