Note.destroy_all
User.destroy_all
Planet.destroy_all

demo = User.create( username: "fguido", password: "1234")

puts "Creating planets"

planet1 = Planet.create(name: "Mercury", about: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/2_mercury_480x320_new.jpg")
planet2 = Planet.create(name: "Venus", about: "Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/3_480x320_venus.png")
planet3 = Planet.create(name: "Earth", about: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/4_earth_480x320.jpg")
planet4 = Planet.create(name: "Mars", about: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the Red Planet.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/6_mars_480x320.jpg")
planet5 = Planet.create(name: "Jupiter", about: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/9_jupiter_480x320_new.jpg")
planet6 = Planet.create(name: "Saturn", about: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.", image: "https://solarsystem.nasa.gov/system/feature_items/images/154_saturn_carousel_4.jpg")
planet7 = Planet.create(name: "Uranus", about: "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/69_uranus_480x320.jpg")
planet8 = Planet.create(name: "Neptune", about: "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.", image: "https://solarsystem.nasa.gov/system/stellar_items/list_view_images/90_neptune_480x320.jpg")

note1 = Note.create(memo: "Hello", user_id: demo.id, planet_id: planet1.id)

puts "done seeding"