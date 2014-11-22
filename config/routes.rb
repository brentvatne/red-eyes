Rails.application.routes.draw do
  root to: 'home#index'

  resources :sleepy_apps do
    collection do
      post :clear_deactivated
    end

    member do
      post :activate
      post :deactivate
    end
  end
end
