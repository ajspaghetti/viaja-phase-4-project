class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.string :activity
      t.string :description
      t.integer :rating
      t.integer :destination_id
      t.integer :user_id
    end
  end
end
