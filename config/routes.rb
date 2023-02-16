Rails.application.routes.draw do
  resources :users, only: [:index]
  resources :activities
  resources :destinations
  resources :experiences

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/registerform", to: "users#create"
  get "/me", to: "users#show"
  patch "/edit", to: "users#update"

  post "/experiencecreate", to: "experiences#create"
  delete "/experiencedestroy", to: "experiences#destroy"
  get "/experienceshow", to: "experiences#show"
  patch "/experienceupdate", to: "experience#update"
  


  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  
end

