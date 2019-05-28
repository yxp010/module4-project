class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :type
      t.integer :experience
      t.integer :health
      t.integer :energy
      t.integer :happiness
      t.integer :creativity
      t.integer :social
      t.integer :laziness

      t.timestamps
    end
  end
end
