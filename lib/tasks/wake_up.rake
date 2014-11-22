task wake_up: :environment do
  SleepyApp.each do |app|
    HTTParty.get(app.url)
    app.update_attributes(last_woken_up_at: Time.now)
  end
end
