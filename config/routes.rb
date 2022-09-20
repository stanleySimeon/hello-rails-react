Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1, defaults: { format: :json } do
      get 'messages', to: 'greetings#index'
    end
  end
end
