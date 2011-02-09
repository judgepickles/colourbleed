Colourbleed::Application.routes.draw do

  root :to => "pages#home"

  match '/trailer',             :to => 'pages#trailer'
  match '/news',                :to => 'pages#news'
  match '/gallery',             :to => 'pages#gallery'
  match '/talent',              :to => 'pages#talent'
  match '/production_notes',    :to => 'pages#production_notes'
  match '/press_kit',           :to => 'pages#press_kit'
  match '/contact',             :to => 'pages#contact'
end
