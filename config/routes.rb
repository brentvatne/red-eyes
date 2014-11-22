Rails.application.routes.draw do
  root to: 'home#index'

  resources :sleepy_apps do
    collection do
      post :clear_deactivated
      get :wake_all
    end

    member do
      post :activate
      post :deactivate
    end
  end
end
