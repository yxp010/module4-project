Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/characters', to: 'characters#index'
  get '/characters/:id', to: 'characters#show'
  post '/characters', to: 'characters#create'
  get '/buildings', to: 'buildings#index'
  patch '/characters/:id', to: 'characters#update'

  post '/event_characters', to: 'event_characters#create'
  get '/characters/:id/events', to: 'characters#all_events'



  #events
  get '/events', to: 'events#index'

end
