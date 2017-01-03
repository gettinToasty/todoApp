Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :todos, except: [:edit, :new]
    resources :steps, except: [:edit, :new]
  end

  resources :users, only: [:new, :create]

  resource :session, only: [:new, :create, :destroy]

  root to: 'static_pages#root'
end
