module PagesHelper
  def nav_nodes
    [
      {:label => "Home", :path => home_path, :class => "first"}, 
      {:label => "Trailer", :path => trailer_path},
      {:label => "News", :path => news_path},
      {:label => "Gallery", :path => gallery_path},
      {:label => "Talent", :path => talent_path},
      {:label => "Production Notes", :path => production_notes_path},
      {:label => "Press Kit", :path => press_kit_path},
      {:label => "Contact", :path => contact_path},
    ]
  end
  
  # def title value
  #   content_for :title, (value || "Colourbleed | \"The price you pay for a brighter day\"")
  # end
  
  def title
    base_title = "Colourbleed | \"The Price You Pay For A Brighter Day\""
    if @title.nil?
      base_title
    else
      " #{@title} | #{base_title}"
    end
  end
  
  
  
end
