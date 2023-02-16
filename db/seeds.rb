puts "Seeding users..."
    u1 = User.create(
        username: "ajspaghetti",
        password: "password",
        password_confirmation: "password",
        email: "alexjspagnoli@gmail.com",
        image_url: "",
        bio: "test1"

    )
    u2 = User.create(
        username: "justgovoyage",
        password: "password",
        password_confirmation: "password",
        email: "alexjspagnoli@icloud.com",
        image_url: "",
        bio: "test2"
    )

puts "Seeding activities..."
    a1 = Activity.create(
        title: "Salsa dancing",
        image_url: "",
    )
    a2 = Activity.create(
        title: "Snorkeling",
        image_url: ""
    )

puts "Seeding destinations..."
    d1 = Destination.create(
        title: "Calle San Sebastian",
        image_url: "",
        city: "San Juan Antiguo",
        region: "San Juan",
        country: "Puerto Rico"
    )
    d2 = Destination.create(
        title: "Playa Escambron",
        image_url: "",
        city: "San Juan Antiguo",
        region: "San Juan",
        country: "Puerto Rico"
    )
    d3 = Destination.create(
        title: "Cueva del Indio",
        image_url: "",     
        city: "Islote",
        region: "Arecibo",
        country: "Puerto Rico"
    )

puts "Seeding experiences..."
    Experience.create(
        title: "Dancing with friends at La Factoria",
        description: "We had so much fun out on the town, I highly recommend this bar!",
        image_url: "",
        activity_id: a1.id,
        destination_id: d1.id,
        user_id: u1.id
    )
    Experience.create(
        title: "Saw some amazing fish out in Arecibo!",
        description: "The waters were crystal-clear, people were jumping off the sides of the cliffs while rock-climbing too! I got some awesome pictures as well.",
        image_url: "",
        activity_id: a2.id,
        destination_id: d3.id,
        user_id: u2.id
    )
    Experience.create(
        title: "Saw a MASSIVE shark!",
        description: "We were at the beach with our guide, and there was a HUGE shark when we started snorkeling! The guide told us to ignore it and keep on swimming, but it was crazy how close we got!",
        image_url: "",
        activity_id: a2.id,
        destination_id: d2.id,
        user_id: u1.id
    )

puts "✅ Done seeding!"