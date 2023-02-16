class CreateExperiences < ActiveRecord::Migration[7.0]
  def change
    create_table :experiences do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.integer :activity_id
      t.integer :destination_id
      t.integer :user_id
    end
  end
end
