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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_31_135328) do

  create_table "buildings", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "type"
    t.integer "gold"
    t.integer "coding_ability"
    t.integer "health"
    t.integer "energy"
    t.integer "happiness"
    t.integer "creativity"
    t.integer "social"
    t.integer "minute", default: 0
    t.integer "day", default: 0
    t.integer "timeSpent", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "event_characters", force: :cascade do |t|
    t.integer "event_id"
    t.integer "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.integer "time_cost"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
