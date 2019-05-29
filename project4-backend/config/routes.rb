Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/characters', to: 'characters#index'
  post '/characters', to: 'characters#create'
  get '/buildings', to: 'buildings#index'
  patch '/characters/:id', to: 'characters#update'
end
