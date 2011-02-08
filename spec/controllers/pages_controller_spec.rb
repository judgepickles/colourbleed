require 'spec_helper'

describe PagesController do

  describe "GET 'home'" do
    it "should be successful" do
      get 'home'
      response.should be_success
    end
  end

  describe "GET 'trailer'" do
    it "should be successful" do
      get 'trailer'
      response.should be_success
    end
  end

  describe "GET 'story'" do
    it "should be successful" do
      get 'story'
      response.should be_success
    end
  end

  describe "GET 'gallery'" do
    it "should be successful" do
      get 'gallery'
      response.should be_success
    end
  end

  describe "GET 'cast_crew'" do
    it "should be successful" do
      get 'cast_crew'
      response.should be_success
    end
  end

  describe "GET 'behind_the_scenes'" do
    it "should be successful" do
      get 'behind_the_scenes'
      response.should be_success
    end
  end

  describe "GET 'press'" do
    it "should be successful" do
      get 'press'
      response.should be_success
    end
  end

  describe "GET 'contact'" do
    it "should be successful" do
      get 'contact'
      response.should be_success
    end
  end

end
