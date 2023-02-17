Rails.application.routes.draw do

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

  # Register route
  post '/register', to: 'users#create'

  # Login
  post '/login', to: 'sessions#create'

  # Logout
  delete '/logout', to: 'sessions#destroy'

  # Me (stay logged in)
  get '/me', to: "users#show"


  resources :experiences #, only: [:index, :show, :create, :update, :delete]
  resources :destinations, only: [:index, :show, :create]
  resources :users
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
