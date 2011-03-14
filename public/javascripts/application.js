if (history && history.pushState) {
  $(function() {
    var clickHandler = function(link) {
      link.unbind("click.colourbleed");
      var href = link.attr("href");
      $.ajax({
        url: href,
        dataType: "html",
        success: function(data) {
          // console.log(data);
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

    //enable back button links 
    $(window).bind("popstate.colourbleed", function() {
      $.ajax({
        url: location.href,
        dataType: "html",
        success: function(data) {
          var main_content = $("div#main_content");
          main_content.html(data);
        }
      }); 
    }); // window bind
  }); //dom ready
}; //history.pushState

$("div#talent").livequery(function() {
  $(this).rollCredits();
});



                                // gallery 
                                
//thumbnails
var animation_speed = 250;
var starting_opacity = 0.6;

$('ul#gallery li a').live('mouseover mouseout', function(event) {
  if (event.type == 'mouseover') {
    $(this).stop().animate({opacity:1.8}, animation_speed);
  } else {
    $(this).stop().animate({opacity:starting_opacity}, animation_speed);
  }
});

$('ul#gallery li a').livequery(function() {
  $(this).css("opacity", starting_opacity);
});

$('ul#gallery li a:first').livequery(function() {
  $(this).click();
});


//show linked image
$('ul#gallery li a').live('click', function(event) {
  $("img#full_image").attr("src", $(this).attr("href"));
  return false;
});

