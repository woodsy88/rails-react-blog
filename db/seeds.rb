@user = User.create(email: "test@test.com", password_digest: "password", username: "andrew")

puts "1 user created"


100.times do |article|
    Article.create!( title: "South Rentail Rink", 
                    description: "31 Richmond Dr", 
                    user_id: @user.id)
end

puts "100 articless have been created"