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

  def humanized_last_woken_up_at
    return nil if last_woken_up_at.blank?
    object = Object.new
    object.extend(ActionView::Helpers::DateHelper)
    "#{object.time_ago_in_words(last_woken_up_at)} ago"
  end

  def serialized_attributes
    { id: id, url: url, active: active?,
      lastWokenUpAt: humanized_last_woken_up_at }
  end
end
