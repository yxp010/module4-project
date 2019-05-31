class CreateEventCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :event_characters do |t|
      t.integer :event_id
      t.integer :character_id

      t.timestamps
    end
  end
end
