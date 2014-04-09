ChrispraterNet::Application.routes.draw do
  root to: 'home#index'

  get 'dogeify', to: 'home#dogeify'
end
