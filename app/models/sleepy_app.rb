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

  def serialized_attributes
    object = Object.new
    object.extend(ActionView::Helpers::DateHelper)

    { id: id, url: url,
      lastWokenUpAt: "#{object.time_ago_in_words(last_woken_up_at)} ago" }
  end
end
