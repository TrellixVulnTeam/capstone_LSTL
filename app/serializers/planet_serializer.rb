class PlanetSerializer < ActiveModel::Serializer
  attributes :id, :name, :about, :image
end
