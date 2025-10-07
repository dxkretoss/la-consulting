$(document).ready(function () {
  $(".block__homereview-video-container").each(function () {
    var $this = $(this);
    $this.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: !0,
      draggable: true,
      swipe: true,
      touchMove: true,
      prevArrow: $this
        .parents(".block__homereview-videobox")
        .find(".block__homereview-video-arrow-prev"),
      nextArrow: $this
        .parents(".block__homereview-videobox")
        .find(".block__homereview-video-arrow-next"),
      adaptiveHeight: !0,
      responsive: [
        {
          breakpoint: 1024, // Change to 768px for mobile
          settings: {
            slidesToShow: 3, // Show 1 slide on mobile
            slidesToScroll: 1, // Scroll 1 slide at a time
          },
        },
        {
          breakpoint: 768, // Change to 768px for mobile
          settings: {
            slidesToShow: 2, // Show 1 slide on mobile
            slidesToScroll: 1, // Scroll 1 slide at a time
          },
        },
        {
          breakpoint: 499, // Change to 768px for mobile
          settings: {
            slidesToShow: 1, // Show 1 slide on mobile
            slidesToScroll: 1, // Scroll 1 slide at a time
          },
        },
      ],
    });
  }),
    $(".block__homereview-video-container").on(
      "beforeChange",
      function (event, slick, currentSlide, nextSlide) {
        $(".block__homereview-video-item").each(function () {
          var itemvideo = $(this)
            .find(".block__homereview-video-boxwrap")
            .find("video")[0];
            //itemvideo.pause(),
            //itemvideo.removeAttribute("controls"),
            $(this)
              .find(".block__homereview-video-boxplay")
              .removeClass("hidden"),
            $(this)
              .find(".block__homereview-video-ratewrap")
              .find(".block__homereview-video-ratebox")
              .css("bottom", "29px"),
            $(this)
              .find(".block__homereview-projectlogo-info")
              .removeClass("hideprojectlogo");
        });
      }
    ),
    $(".block__homereview-video-container").on(
      "afterChange",
      function (event, slick, currentSlide) {
        $(".block__homereview-video-item").each(function () {
          var itemvideo = $(this)
            .find(".block__homereview-video-boxwrap")
            .find("video")[0];
            //itemvideo.pause(),
            //itemvideo.removeAttribute("controls"),
            $(this)
              .find(".block__homereview-video-boxplay")
              .removeClass("hidden"),
            $(this)
              .find(".block__homereview-video-ratewrap")
              .find(".block__homereview-video-ratebox")
              .css("bottom", "29px"),
            $(this)
              .find(".block__homereview-projectlogo-info")
              .removeClass("hideprojectlogo");
        });
      }
    ),
    $(document).on("click", ".block__homereview-video-boxplay", function () {
      $(this).addClass("hidden");
      var current_video = $(this)
        .parents(".block__homereview-video-boxwrap")
        .find("video")[0];
      $(current_video).attr("controls", "true"),
        $(this)
          .parents(".block__homereview-video-boxwrap")
          .find("video")[0]
          .play(),
        $(this)
          .parents(".block__homereview-video-ratewrap")
          .find(".block__homereview-video-ratebox")
          .css("bottom", "65px"),
        $(this)
          .parents(".block__homereview-video-ratewrap")
          .find(".block__homereview-projectlogo-info")
          .addClass("hideprojectlogo"),
        $(current_video).prop("muted", !1),
        $(this)
          .parents(".block__homereview-video-boxwrap")
          .find(".block__homereview-video-soundbtn")
          .addClass("sound-on");
    }),
    $(document).on("click", ".block__homereview-video-soundbtn", function () {
      var current_video_btn = $(this)
        .parents(".block__homereview-video-boxwrap")
        .find("video")[0];
      $(current_video_btn).prop("muted")
        ? ($(this).addClass("sound-on"), $(current_video_btn).prop("muted", !1))
        : ($(this).removeClass("sound-on"),
          $(current_video_btn).prop("muted", !0));
    });
  function refreshSlickIfNotFullscreen() {
    !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement &&
      (console.log("Exiting fullscreen, refreshing Slick carousel."),
      setTimeout(function () {
        $(".block__homereview-video-container").slick("refresh");
      }, 500));
  }
  document.addEventListener("fullscreenchange", function () {
    refreshSlickIfNotFullscreen();
  }),
    document.addEventListener("mozfullscreenchange", function () {
      refreshSlickIfNotFullscreen();
    }),
    document.addEventListener("webkitfullscreenchange", function () {
      refreshSlickIfNotFullscreen();
    }),
    document.addEventListener("msfullscreenchange", function () {
      refreshSlickIfNotFullscreen();
    });
});
