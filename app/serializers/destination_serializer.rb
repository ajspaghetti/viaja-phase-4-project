class DestinationSerializer < ActiveModel::Serializer
  attributes :id, :place_name, :city, :region, :country

  def average_exps_rating
    object.experiences.average(:rating)
  end
end
