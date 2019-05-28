class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :character_id
      t.integer :building_id

      t.timestamps
    end
  end
end
