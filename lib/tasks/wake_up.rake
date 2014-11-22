task wake_up: :environment do
  WakeUpService.run
end
