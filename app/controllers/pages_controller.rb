class PagesController < ApplicationController
  layout proc { |controller| controller.request.xhr? ? false : "application" }

  def home
    respond_to(:html)
  end

  def trailer
    respond_to(:html)
  end

  def news
    respond_to(:html)
  end

  def gallery
    respond_to(:html)
  end

  def talent
    respond_to(:html)
  end

  def production_notes
    respond_to(:html)
  end

  def press_kit
    respond_to(:html)
  end

  def contact
    respond_to(:html)
  end

end
