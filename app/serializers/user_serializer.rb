class UserSerializer < ActiveModel::Serializer

  attributes :id, :username, :location, :number_of_exps

  def number_of_exps
    object.experiences.length
  end
end
