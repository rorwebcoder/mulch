# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.find_or_create_by_email({ name: 'admin', email: "admin@test.com", password: "admin123", password_confirmation: "admin123", role: "admin",confirmed_at: Time.now, confirmation_sent_at: Time.now })

# category accessible to both user & admin => Public categories
food_category = Category.find_or_create_by_name(:name => "Food N Beverage", :description => "food and beverage category", :is_public => true)
ites_category = Category.find_or_create_by_name(:name => "ITES", :description => "ITES category", :is_public => true)
web_category = Category.find_or_create_by_name(:name => "Web N More", :description => "web and more category", :is_public => true)

# category accessible only to admin => Private categories
emergency_category = Category.find_or_create_by_name(:name => "Emergency Services", :description => "emergency services category", :is_public => false)
gift_category = Category.find_or_create_by_name(:name => "Gifts", :description => "gifts category", :is_public => false)

# Sub-category
{
"FOOD" => ["Starter","Veg Curry & Thali","Biryani","Kathi Roll n Sandwich","Non Veg Curry","Pasta & Maggi","Raita & Salad","Breads","Paranthas","Desert"], 
"BEVERAGES" => [],
"CONSUMABLE" => [],
"ESSENTIALS" => [],
"PARTYSHOP" => []
}.each_pair do |sc_name, ic_list|
		sub_category = SubCategory.find_or_create_by_name(:name => sc_name, :description => "#{sc_name} sub category", :category_id => food_category.id)
		ic_list.each do |ic_name|
				InnerCategory.find_or_create_by_name(:name => ic_name, :description => "#{ic_name} inner category", :sub_category_id => sub_category.id)
		end
end

["Ambulance", "Service	Pickup/Drop",	"Plumber or Electrician",	"Car Mechanic & breakdown service",	"Pest Control",	"Movers & Packers"].each do |sc_name|
		sub_category = SubCategory.find_or_create_by_name(:name => sc_name, :description => "#{sc_name} sub category", :category_id => emergency_category.id)
end

# Sub & Inner category for ITES
{
		"Graphics & Design" => ["Cartoons & Caricatures", "Web Design & UI", "Business Cards", "Landing Pages", "Logo Design", "Photography & Photoshopping", "Banners & Headers", "Illustration", "Presentation Design", "Architecture", "Ebook Covers & Packages", "Flyers & Brochures", "Other"],
		"Online Marketing" => ["Web Analytics", "Fan Pages", "Social Marketing", "Article & PR Submission", "Keywords Research", "Get Traffic", "Blog Mentions", "SEO", "Video Marketing", "Domain Research", "Bookmarking & Links", "Other"],
		"Video & Animation" => ["Commercials", "Puppets", "Editing & Post Production", "Stop Motion", "Animation & 3D", "Intros", "Testimonials & Reviews by Actors", "Other"],
		"Music & Audio" => ["Audio Editing & Mastering", "Rap Music", "Custom Ringtones", "Jingles", "Hip-Hop Music", "Voicemail Greetings", "Songwriting", "Narration & Voice-Over", "Custom Songs", "Music Lessons", "Sound Effects & Loops", "Other"]
}.each_pair do |sc_name, ic_list|
		sub_category = SubCategory.find_or_create_by_name(:name => sc_name, :description => "#{sc_name} sub category", :category_id => ites_category.id)
		ic_list.each do |ic_name|
				InnerCategory.find_or_create_by_name(:name => ic_name, :description => "#{ic_name} inner category", :sub_category_id => sub_category.id)
		end
end

# Sub & Inner category for Web N More
{
		"Writing & Translation" => ["Copywriting", "Transcripts", "Speech Writing", "SEO Keyword Optimization", "Website Content", "Proofreading & Editing", "Creative Writing & Scripting", "Reviews", "Press Releases", "Translation", "Resumes & Cover Letters", "Other"],
		"Programming & Tech	" => [".Net", "Databases", "WordPress", "QA & Software Testing", "C++", "Java", "Flash", "Technology", "CSS & HTML", "JavaScript", "iOS, Android & Mobile", "Other", "Joomla & Drupal", "PSD to HTML", "PHP"],
		"Advertising" => ["Hold Your Sign", "Outdoor Advertising", "Flyers & Handouts", "Radio", "Human Billboards", "Music Promotion", "Pet Models", "Banner Advertising", "Other"],
		"Business" => ["Business Plans","Virtual Assistant","Legal Consulting","Career Advice","Business Tips","Market Research","Branding Services","Presentations","Financial Consulting","Other"],
		"Lifestyle" => ["Animal Care & Pets","Makeup, Styling & Beauty","Cooking Recipes","Relationship Advice","Online Private Lessons","Parenting Tips","Diet & Weight Loss","Astrology & Fortune Telling","Travel","Health & Fitness","Spiritual & Healing","Other"],
		"Fun & Bizarre" => ["Your Message On...","Pranks","Extremely Bizarre","Dancers","Celebrity Impersonators","Just for Fun","Daredevils & Stunts","Other"]
}.each_pair do |sc_name, ic_list|
		sub_category = SubCategory.find_or_create_by_name(:name => sc_name, :description => "#{sc_name} sub category", :category_id => web_category.id)
		ic_list.each do |ic_name|
				InnerCategory.find_or_create_by_name(:name => ic_name, :description => "#{ic_name} inner category", :sub_category_id => sub_category.id)
		end
end

# Sub & Inner category for GIFTS
{
		"Age" => ["Babies","Kids(3-7 years)","Children(7-12 years)","Teens(13-18 years)","Youth","Young Married","Middle Aged","Seniors"],
		"Relationship" => ["Special","Husband","Wife","Girlfriend","Boyfriend","Friend","Him","Her","Him and Her","Sibling","Brother","Sister","Couple","Parents","Father","Mother","Father and Mother"],
		"Occasion" => ["Fathers Day","House Warming","Anniversary","Birthday","Farewell","Wedding","Baby-Shower","Honeymoon"],
		"Mood" => ["Romantic","Funky","Utility","Precious","Fashion","Personalized","Experience","Voucher","Luxury","Naughty","IPL"],
		"Personality" => ["Adventurous","Creative","Drinking-Smoking","Homely","Filmy","Fun Loving","Health Freak","Takes it easy","Out Going","Practical","Book Lover","Sporty","Stylish","Traditional","Frequent Traveller","Music Lover","Religious","Cooking","Geek","Dancing"],
		"Price" => []
}.each_pair do |sc_name, ic_list|
		sub_category = SubCategory.find_or_create_by_name(:name => sc_name, :description => "#{sc_name} sub category", :category_id => gift_category.id)
		ic_list.each do |ic_name|
				InnerCategory.find_or_create_by_name(:name => ic_name, :description => "#{ic_name} inner category", :sub_category_id => sub_category.id)
		end
end

