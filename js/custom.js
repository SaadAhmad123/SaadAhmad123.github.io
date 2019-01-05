function runCustomJS(){
    (function($) {

        "use strict";
        
        $(document).ready(function() {
            $('.modal').modal();
            // PRELOADER
            $("body").toggleClass("loaded");
            setTimeout(function() {
                $("body").addClass("loaded");
            }, 3000);
            
            // PORTFOLIO DIRECTION AWARE HOVER EFFECT
            var item = $("#bl-work-items>div");
            var elementsLength = item.length;
            for (var i = 0; i < elementsLength; i++) {
                $(item[i]).hoverdir();
            }
            
            // TEXT ROTATOR
            $("#selector").animatedHeadline({
                animationType: "clip"
            });
            
            // BOX LAYOUT
            Boxlayout.init();
            
            // REMOVE # FROM URL
            $("a[href='#']").on("click", (function(e) {
                e.preventDefault();
            }));

            // AJAX CONTACT FORM
            $(".contactform").on("submit", function() {
                $(".output_message").text("Loading...");

                
                Email.send({
                    SecureToken : "9a0d50bf-7d22-4a30-9ff6-bc036b605938",
                    To : 'deburgers123@gmail.com',
                    From : form.email,
                    Subject : "Query via the portfolio website [saadahmed123.github.io] from [" + form.name + "]",
                    Body : form.message
                }).then(
                    message => {
                        console.log("Sent");
                        $(".contactform").find(".output_message").addClass("success");
                        $(".output_message").text("Message Sent!");
                    }
                );

                return false;
                var form = $(this);
                $.ajax({
                    url: form.attr("action"),
                    method: form.attr("method"),
                    data: form.serialize(),
                    success: function(result) {
                        if (result == "success") {
                            $(".contactform").find(".output_message").addClass("success");
                            $(".output_message").text("Message Sent!");
                        } else {
                            $(".contactform").find(".output_message").addClass("error");
                            //$(".output_message").text("Error Sending!");
                            $(".output_message").text("Error Sending! Please contact me via my email address.");
                        }
                    }
                });

                return false;
            });

            // MATERIAL CAROUSEL
            $(".carousel.carousel-slider").carousel({
                fullWidth: true,
                indicators: true,
            });
            
            // RESUME CARDS ANIMATION
            if ($(window).width() > 800) {
                $(".resume-list-item, .resume-card").on("click", function() {
                    $(".resume-list-item").removeClass("is-active");
                    var e = parseInt($(this).data("index"),10);
                    $("#resume-list-item-" + e).addClass("is-active");
                    var t = e + 1,
                        n = e - 1,
                        i = e - 2;
                    $(".resume-card").removeClass("front back up-front up-up-front back-back"), $(".resume-card-" + e).addClass("front"), $(".resume-card-" + t).addClass("back"), $(".resume-card-" + n).addClass("back-back"), $(".resume-card-" + i).addClass("back")
                });
            }
        });

    })(jQuery);
}


////////////////////////////////////////////////
/////   The function for smooth scrolling.
/////   BORROWED FROM INTERNET.
////////////////////////////////////////////////
function smoothScroolling(){
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

}