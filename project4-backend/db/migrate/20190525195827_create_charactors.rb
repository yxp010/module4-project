class CreateCharactors < ActiveRecord::Migration[5.2]
  def change
    create_table :charactors do |t|
      t.string :name
      t.string :type
      t.integer :action_limit
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
