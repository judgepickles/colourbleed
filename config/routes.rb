Colourbleed::Application.routes.draw do


  get "pages/home"

  get "pages/trailer"

  get "pages/story"

  get "pages/gallery"

  get "pages/cast_crew"

  get "pages/behind_the_scenes"

  get "pages/press"

  get "pages/contact"

  root :to => "pages#home"

  match '/trailer',             :to => 'pages#trailer'
  match '/story',               :to => 'pages#story'
  match '/gallery',             :to => 'pages#gallery'
  match '/cast-crew',           :to => 'pages#cast_crew'
  match '/behind-the-scenes',   :to => 'pages#behind_the_scenes'
  match '/press',               :to => 'pages#press'
  match '/contact',             :to => 'pages#contact'

end
