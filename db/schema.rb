# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140729045906) do

  create_table "attachments", :force => true do |t|
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
    t.string   "media_file_name"
    t.string   "media_content_type"
    t.integer  "media_file_size"
    t.datetime "media_updated_at"
    t.integer  "attachable_id"
    t.string   "attachable_type"
  end

  create_table "authorizations", :force => true do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.string   "token"
    t.string   "secret"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.string   "username"
  end

  create_table "cart_item_extra_charges", :force => true do |t|
    t.integer  "cart_item_id"
    t.integer  "extra_charge_id"
    t.integer  "quantity"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "cart_items", :force => true do |t|
    t.integer  "cart_id"
    t.integer  "service_id"
    t.integer  "quantity"
    t.float    "service_cost"
    t.string   "status",       :default => "open"
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
  end

  create_table "carts", :force => true do |t|
    t.float    "total_cost"
    t.float    "total_service_cost"
    t.float    "charges"
    t.string   "status",             :default => "open"
    t.integer  "user_id"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  create_table "categories", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.boolean  "is_public",    :default => false
    t.datetime "created_at",                      :null => false
    t.datetime "updated_at",                      :null => false
    t.boolean  "is_published", :default => true
    t.string   "slug"
  end

  create_table "extra_charges", :force => true do |t|
    t.string   "description"
    t.float    "cost"
    t.integer  "service_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  create_table "inner_categories", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "sub_category_id"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
    t.string   "slug"
  end

  create_table "messages", :force => true do |t|
    t.text     "content"
    t.integer  "sender_id"
    t.integer  "receiver_id"
    t.integer  "order_item_id"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "order_item_extra_charges", :force => true do |t|
    t.integer  "order_item_id"
    t.integer  "extra_charge_id"
    t.integer  "quantity"
    t.datetime "created_at",      :null => false
    t.datetime "updated_at",      :null => false
  end

  create_table "order_items", :force => true do |t|
    t.integer  "order_id"
    t.integer  "service_id"
    t.float    "service_cost"
    t.string   "status",       :default => "open"
    t.datetime "created_at",                       :null => false
    t.datetime "updated_at",                       :null => false
    t.integer  "quantity"
  end

  create_table "orders", :force => true do |t|
    t.float    "total_cost"
    t.float    "total_service_cost"
    t.float    "charges"
    t.string   "status",             :default => "open"
    t.integer  "user_id"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
  end

  create_table "services", :force => true do |t|
    t.string   "title"
    t.string   "short_desc"
    t.text     "long_desc"
    t.integer  "response_time"
    t.float    "cost"
    t.integer  "deliverable_days"
    t.boolean  "is_published",      :default => false
    t.integer  "inner_category_id"
    t.integer  "user_id"
    t.datetime "created_at",                           :null => false
    t.datetime "updated_at",                           :null => false
    t.text     "tags"
    t.text     "buyer_instruction"
    t.boolean  "is_draft",          :default => true
  end

  create_table "sub_categories", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "category_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
    t.string   "slug"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "role"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "email",                  :default => ""
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.string   "authentication_token"
    t.string   "image"
    t.string   "location"
    t.string   "username"
  end

  add_index "users", ["authentication_token"], :name => "index_users_on_authentication_token", :unique => true
  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
