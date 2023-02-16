class CreateDestinations < ActiveRecord::Migration[7.0]
  def change
    create_table :destinations do |t|
      t.string :title
      t.string :image_url
      t.string :city
      t.string :region
      t.string :country
    end
  end
end
