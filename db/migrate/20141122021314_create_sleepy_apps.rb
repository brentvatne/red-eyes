class CreateSleepyApps < ActiveRecord::Migration
  def change
    create_table :sleepy_apps do |t|
      t.string :url
      t.datetime :last_woken_up_at
      t.boolean :active, default: true
      t.timestamps
    end
  end
end
