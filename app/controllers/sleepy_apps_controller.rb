class SleepyAppsController < ApplicationController
  def index
    @sleepy_apps = SleepyApp.order(:id).all
    render json: @sleepy_apps.map(&:attributes)
  end

  def create
    @todo = SleepyApp.create(url: params[:url])
    index
  end

  def activate
    @todo = SleepyApp.find(params[:id])
    @todo.update_attributes(active: true)
    render json: {success: true}
  end

  def deactivate
    @todo = SleepyApp.find(params[:id])
    @todo.update_attributes(active: false)
    render json: {success: true}
  end

  def destroy
    @todo = SleepyApp.find(params[:id])
    @todo.destroy
    render json: {success: true}
  end

  def clear_deactivated
    SleepyApp.deactivated.map(&:destroy)
    index
  end

  def wake_all
    WakeUpService.run
    index
  end
end
