ChrispraterNet::Application.routes.draw do
  root to: 'home#index'

  get 'dogeify', to: 'home#dogeify'
  get 'simon_says', to: 'simon_says#index'
  get 'life_counter', to: 'life_counter#index'
end
