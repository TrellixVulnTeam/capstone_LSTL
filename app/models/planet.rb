class Planet < ApplicationRecord
    validates :name, :about, :image, presence: true


    has_many :favorites
    has_many :users, through: :favorites
end
