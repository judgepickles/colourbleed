module ApplicationHelper

  def facebook_like
    content_tag :iframe, nil, :src => "http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fpages%2FColourBleed%2F177383978978025&amp;width=352&amp;colorscheme=dark&amp;show_faces=false&amp;stream=false&amp;header=false&amp;height=122",
                :scrolling => 'no',
                :overflow => 'hidden', 
                :frameborder => '0',
                :style => 'border:none',
                :allowtransparency => true,
                :id => :facebook_like
  end

  def festival_rushes
    image_tag("rushes_soho.png", :size => "225x110")
  end

  def festival_hollyshorts
    image_tag("hollyshorts.png", :size => "225x110")
  end

end
