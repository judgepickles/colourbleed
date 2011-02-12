(function($) {
  $.fn.rollCredits = function() {
    // Globals
    var interval = 50;
    var wrapper = $(this);
    var credits = $("div#credits", wrapper);
    var credits_height = parseInt(credits.height());
    var pause = $("<div id=\"pause\"></div>");
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