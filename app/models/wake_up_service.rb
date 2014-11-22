class WakeUpService
  def self.run(async = false)
    SleepyApp.active.find_each do |app|
      if async
        Thread.new { HTTParty.get(app.url) }
      else
        HTTParty.get(app.url)
      end
      app.update_attributes(last_woken_up_at: Time.now)
    end
  end
end
