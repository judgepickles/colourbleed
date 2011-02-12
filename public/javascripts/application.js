if (history && history.pushState) {
  $(function() {
    var clickHandler = function(link) {
      link.unbind("click.colourbleed");
      var href = link.attr("href");
      $.ajax({
        url: href,
        dataType: "html",
        success: function(data) {
          $("div#main_content").html(data);
          var title = $("h1").text() + " – Colourbleed";
          history.pushState(null, title, href);
        },
        complete: function() {
          link.bind("click.colourbleed", function(event) {
            clickHandler(link);
            return false;
          });
        }
      });
    };
    
    $("ul#navigation li a").bind("click.colourbleed", function(event) {
      clickHandler($(this));
      return false;
    });
    
    $(window).bind("popstate.colourbleed", function() {
      $.ajax({
        url: location.href,
        dataType: "html",
        success: function(data) {
          var main_content = $("div#main_content");
          main_content.html(data);
        }
      }); // ajax
    }); // window bind
  });
};

$("div#talent").livequery(function() {
  $(this).rollCredits();
});