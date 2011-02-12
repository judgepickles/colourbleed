(function($) {
  $.fn.rollCredits = function() {
    // Globals
    var interval = 50;
    var wrapper = $(this);
    var credits = $("div#credits", wrapper);
    var credits_height = parseInt(credits.height());
    var pause = $("<div id=\"pause\"></div>");
    pause.css({
      background:"transparent url(/images/pause.png) center center no-repeat",
      width:"64px",
      height:"64px",
      position:"fixed",
      top:"9px",
      right:"10px"
    });
    pause.hide();
    pause.appendTo("div#page_container");

    // var h1 = $("h1");

    wrapper.css("height", credits_height + "px");

    function updateMargin(div) {
      div.css("margin-top", function(index, value) {
        var current_margin = parseInt(value);
        var absolute_current_margin = Math.abs(current_margin);

        // h1.html(current_margin);

        if (absolute_current_margin > credits_height) {
          var scrollTop = $(window).scrollTop();
          var windowHeight = $(window).height();
          return (scrollTop + windowHeight - 200) + "px";
        } else {
          return (current_margin - 2) + "px";
        }
      });
    }

    var timer = setInterval(function() {
      updateMargin(credits);
    }, interval);

    $(window).blur(function() {
      clearInterval(timer);
    });
    $(window).focus(function() {
      clearInterval(timer);
      timer = setInterval(function() {
        updateMargin(credits);
      }, interval);
    });

    wrapper.hover(
      function() {
        pause.show();
        credits.addClass("hot-pink");
        clearInterval(timer);
      },
      function() {
        pause.hide();
        credits.removeClass("hot-pink");
        clearInterval(timer);
        timer = setInterval(function() {
          updateMargin(credits);
        }, interval);
      }
    );
  }
})(jQuery);

$(function() { $("div#talent").rollCredits(); });

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