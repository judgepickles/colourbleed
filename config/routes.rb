Colourbleed::Application.routes.draw do


  root :to => "pages#home"

  match '/trailer',             :to => 'pages#trailer'
  match '/story',               :to => 'pages#story'
  match '/gallery',             :to => 'pages#gallery'
  match '/cast_crew',           :to => 'pages#cast_crew'
  match '/behind_the_scenes',   :to => 'pages#behind_the_scenes'
  match '/press',               :to => 'pages#press'
  match '/contact',             :to => 'pages#contact'

end
