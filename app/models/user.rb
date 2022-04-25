class User < ApplicationRecord
    has_secure_password
    has_many :favorites
    has_many :planets, through: :favorites

    validates :username, presence: true, uniqueness: true
    validates :password, length: {minimum: 3}
    validates :password_digest, presence: true
end
