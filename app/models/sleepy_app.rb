class SleepyApp < ActiveRecord::Base
  scope :active, -> { where(active: true) }
  scope :deactivated, -> { where(active: [false, nil]) }

  def url
    base = read_attribute(:url)

    if base.match(/http/)
      base
    else
      "http://#{base}"
    end
  end
end
