class CreatePlanets < ActiveRecord::Migration[6.1]
  def change
    create_table :planets do |t|
      t.string :name 
      t.string :about
      t.string :image

      t.timestamps
    end
  end
end
