class PagesController < ApplicationController
  layout proc { |controller| controller.request.xhr? ? false : "application" }

  def home
    @title = "Home"
    respond_to(:html)
  end

  def trailer
    @title = "Trailer"
    respond_to(:html)
  end

  def news
    @title = "News"
    respond_to(:html)
  end

  def gallery
    @title = "Gallery"
    respond_to(:html)
  end

  def talent
    @title = "Talent"
    respond_to(:html)
  end

  def production_notes
    @title = "Production Notes"
    respond_to(:html)
  end

  def press_kit
    @title = "Press Kit"
    respond_to(:html)
  end

  def contact
    @title = "Contact"
    respond_to(:html)
  end

end
