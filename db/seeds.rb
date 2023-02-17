# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding users..."
    u1 = User.create(
        username: "ajspaghetti",
        password: "password",
        location: "Boulder, CO"

    )
    u2 = User.create(
        username: "justgovoyage",
        password: "password",
        location: "San Juan, PR"
    )

puts "Seeding destinations..."
    d1 = Destination.create(
        place_name: "Calle San Sebastian",
        city: "San Juan Antiguo",
        region: "San Juan",
        country: "Puerto Rico"
    )
    d2 = Destination.create(
        place_name: "Playa Escambron",
        city: "San Juan Antiguo",
        region: "San Juan",
        country: "Puerto Rico"
    )
    d3 = Destination.create(
        place_name: "Cueva del Indio",
        city: "Islote",
        region: "Arecibo",
        country: "Puerto Rico"
    )

puts "Seeding experiences..."
    Experience.create(
        title: "Dancing with friends at La Factoria",
        activity: "Salsa Dancing",
        description: "We had so much fun out on the town, I highly recommend this bar!",
        rating: 4,
        destination_id: d1.id,
        user_id: u1.id
    )
    Experience.create(
        title: "Saw some amazing fish out in Arecibo!",
        activity: "Snorkeling",
        description: "The waters were crystal-clear, people were jumping off the sides of the cliffs while rock-climbing too! I got some awesome pictures as well.",
        rating: 3,
        destination_id: d3.id,
        user_id: u2.id
    )
    Experience.create(
        title: "Saw a MASSIVE shark!",
        activity: "Snorkeling",
        description: "We were at the beach with our guide, and there was a HUGE shark when we started snorkeling! The guide told us to ignore it and keep on swimming, but it was crazy how close we got!",
        rating: 5,
        destination_id: d2.id,
        user_id: u1.id
    )

puts "✅ Done seeding!"