class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :experience_destination, :experience_activity

  belongs_to :destination
  belongs_to :activity
  belongs_to :user

  def experience_destination
    self.object.destination.title
  end

  def experience_activity
    self.object.activity.title
  end

end

# def experience_title
#   self.object.experience.title
# end

# def experience_description
#   self.object.experience.description
# end

# def experience_image
#   self.object.experience.image_url
# end