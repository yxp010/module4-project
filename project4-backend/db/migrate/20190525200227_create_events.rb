class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      # t.integer :character_id
      # t.integer :building_id
      # t.integer :event_type
      t.integer :time_cost

      t.timestamps
    end
  end
end
