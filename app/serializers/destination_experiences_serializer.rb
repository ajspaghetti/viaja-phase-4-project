class DestinationExperiencesSerializer < ActiveModel::Serializer

  #exps = experiences
  attributes :id, :place_name, :city, :region, :country, :total_exps, :average_exps_rating

  has_many :experiences

  def total_exps
    object.experiences.length
  end

  # def total_activities
  #   object.experiences.length(:activity)
  # end

  def average_exps_rating
    object.experiences.average(:rating)
  end
end