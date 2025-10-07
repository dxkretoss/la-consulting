if (
  (window.addEventListener("load", function () {
    $(".block__bfcm-lock-in-rate-product-lock-in-input").length &&
      ($(".block__bfcm-lock-in-rate-product-lock-in-input").val(40),
      $(".block__bfcm-lock-in-rate-product-rangebar-lock-in").val(40));
    var referrer = getUrlParameter("utm_source"),
      UTMMedium = getUrlParameter("utm_medium"),
      UTMCampaign = getUrlParameter("utm_campaign");
    if (!referrer) {
      var referrer = getUrlParameter("referring_site");
      if (!referrer) var referrer = document.referrer;
    }
    referrer.indexOf("arcticgrey.com") !== -1 ||
      !referrer ||
      (document.cookie = "referrer_val=" + referrer),
      (referrer = getCookie("referrer_val")),
      referrer || (referrer = "Direct"),
      UTMMedium || (UTMMedium = "Direct"),
      UTMCampaign || (UTMCampaign = "Direct"),
      $(".referrer").val(referrer),
      $(".form_utm_medium").val(UTMMedium),
      $(".form_utm_campaign").val(UTMCampaign),
      navigator.userAgent.indexOf("Chrome") != -1
        ? $(".user_browser").val("Google Chrome")
        : navigator.userAgent.indexOf("Firefox") != -1
        ? $(".user_browser").val("Mozilla Firefox")
        : navigator.userAgent.indexOf("MSIE") != -1 ||
          navigator.userAgent.indexOf("Edge") != -1
        ? $(".user_browser").val("Internet Exploder")
        : navigator.userAgent.indexOf("Safari") != -1
        ? $(".user_browser").val("Safari")
        : navigator.userAgent.indexOf("Opera") != -1
        ? $(".user_browser").val("Opera")
        : $(".user_browser").val("Others");
  }),
  $(".assesement_submit_btn").length)
) {
  var url_email = getUrlParameter("email"),
    url_first_name = getUrlParameter("first_name"),
    url_last_name = getUrlParameter("last_name"),
    url_linkedin_url = getUrlParameter("linkedin_url");
  $(".assesement_submit_btn").attr(
    "href",
    "/pages/careers?email=" +
      url_email +
      "&first_name=" +
      url_first_name +
      "&last_name=" +
      url_last_name +
      "&linkedin_url=" +
      url_linkedin_url +
      "#solutions-engineer#Test-Started"
  );
}
function getCookie(name) {
  for (
    var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0;
    i < ca.length;
    i++
  ) {
    for (var c = ca[i]; c.charAt(0) == " "; ) c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1]);
}
if (
  ($(document).ready(function () {
    var Shopify2 = Shopify2 || {};
    if (
      ((Shopify2.money_format = "${{amount}}"),
      (Shopify2.formatMoney = function (cents, format) {
        typeof cents == "string" && (cents = cents.replace(".", ""));
        var value = "",
          placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
          formatString = format || this.money_format;
        function defaultOption(opt, def) {
          return typeof opt > "u" ? def : opt;
        }
        function formatWithDelimiters(number, precision, thousands, decimal) {
          if (
            ((precision = defaultOption(precision, 2)),
            (thousands = defaultOption(thousands, ",")),
            (decimal = defaultOption(decimal, ".")),
            isNaN(number) || number == null)
          )
            return 0;
          number = (number / 100).toFixed(precision);
          var parts = number.split("."),
            dollars = parts[0].replace(
              /(\d)(?=(\d\d\d)+(?!\d))/g,
              "$1" + thousands
            ),
            cents2 = parts[1] ? decimal + parts[1] : "";
          return dollars + cents2;
        }
        switch (formatString.match(placeholderRegex)[1]) {
          case "amount":
            value = formatWithDelimiters(cents, 2);
            break;
          case "amount_no_decimals":
            value = formatWithDelimiters(cents, 0);
            break;
          case "amount_with_comma_separator":
            value = formatWithDelimiters(cents, 2, ".", ",");
            break;
          case "amount_no_decimals_with_comma_separator":
            value = formatWithDelimiters(cents, 0, ".", ",");
            break;
        }
        return formatString.replace(placeholderRegex, value);
      }),
      $(".template_bulk-hours").length)
    ) {
      var page_load_qty = getUrlParameter("quantity"),
        active_subscribe = getUrlParameter("subscribe"),
        product_review = getUrlParameter("review");
      if (product_review == "true")
        var product_review_popup = setInterval(function () {
          $("#yotpo-main-widget-btn").length &&
            (setTimeout(function () {
              var offset_top = $(".yotpo-widget-instance").offset().top;
              $("html, body").animate({ scrollTop: offset_top }, "slow"),
                $("#yotpo-main-widget-btn").trigger("click");
            }, 1e3),
            clearInterval(product_review_popup));
        }, 500);
      var video_play = getUrlParameter("play");
      if (
        (video_play == "true" &&
          $(".product_bulk_hour_model").length &&
          ($(".product_bulk_hour_model").addClass("model_open"),
          $(".product_sticky_bar").addClass("sticky_active"),
          $(".product_single_mode .deferred-media__poster").trigger("click"),
          $(".product_single_mode video")[0].play(),
          $("body").addClass("overflow-hidden")),
        page_load_qty != "" && page_load_qty > 500 && (page_load_qty = 500),
        active_subscribe == "true"
          ? ($("#subscribe-save").trigger("click"),
            $("#subscribe-save-sticky").trigger("click"),
            $(
              '.smartrr-selling-plan-group-label input[data_id="subscribe-save"]'
            ).trigger("click"),
            $(".product_subcription").addClass("subscribe_view"),
            $(
              ".product_subcription .monthly_subscription_note, .price_discount_container, .price_regular"
            ).removeClass("hidden"))
          : page_load_qty != "" &&
            page_load_qty > 4 &&
            $(".price_regular,.price_discount_container").removeClass("hidden"),
        page_load_qty != "")
      ) {
        var pageloadQtyvalue = parseInt(page_load_qty),
          loadprevVal = 1;
        let loadnewMin, loadnewMax;
        pageloadQtyvalue >= 100 && pageloadQtyvalue < 250
          ? loadprevVal > pageloadQtyvalue && pageloadQtyvalue === 100
            ? ((loadnewMin = Math.max(1)), (loadnewMax = Math.min(100)))
            : ((loadnewMin = Math.max(100)), (loadnewMax = Math.min(250)))
          : pageloadQtyvalue >= 250 && pageloadQtyvalue <= 500
          ? loadprevVal > pageloadQtyvalue && pageloadQtyvalue === 250
            ? ((loadnewMin = Math.max(100)), (loadnewMax = Math.min(250)))
            : ((loadnewMin = Math.max(250)), (loadnewMax = Math.min(500)))
          : ((loadnewMin = Math.max(1)), (loadnewMax = Math.min(100)));
        let loadcurrentMinVal = parseInt($(".product_rangebar").attr("min"));
        loadnewMin !== loadcurrentMinVal &&
          (loadnewMin === 1 || loadnewMin === 0
            ? ($(".range_bar .min_value .current")
                .text(loadnewMin)
                .removeClass("arrow_active"),
              $(".range_bar .max_value .current")
                .text(loadnewMax)
                .addClass("arrow_active"))
            : loadnewMin === 250
            ? ($(".range_bar .min_value .current")
                .text(loadnewMin)
                .addClass("arrow_active"),
              $(".range_bar .max_value .current")
                .text(loadnewMax)
                .removeClass("arrow_active"))
            : ($(".range_bar .min_value .current")
                .text(loadnewMin)
                .addClass("arrow_active"),
              $(".range_bar .max_value .current")
                .text(loadnewMax)
                .addClass("arrow_active"))),
          $(".product_rangebar").attr("min", loadnewMin),
          $(".product_rangebar").attr("max", loadnewMax),
          $(".product-form__input .quantity__input").val(page_load_qty),
          $(".product-form__input .quantity__input").change(),
          $(".product_rangebar").val(page_load_qty),
          $(".total_hours").text(page_load_qty);
        var max = parseInt($(".product_rangebar").attr("max")),
          min = parseInt($(".product_rangebar").attr("min"));
        const newValue = ((page_load_qty - min) * 100) / (max - min),
          newPosition = 10 - newValue * 0.2,
          newpositionThumb = newValue * 0.2;
        if (
          ($(".range_bar_tooltip span").text(page_load_qty),
          $(".range_bar_tooltip,.range_bar_tooltip_drag_text").css(
            "left",
            `calc(${newValue}% + (${newPosition}px))`
          ),
          $(".range-thumb").css(
            "left",
            `calc(${newValue}% - (${newpositionThumb}px))`
          ),
          $(".product__info-wrapper").length)
        ) {
          var main_ballon_width = 45,
            main_ballon_height = 70,
            main_ballon_top = 55;
          $(window).width() <= 767 &&
            ((main_ballon_width = 35),
            (main_ballon_height = 53),
            (main_ballon_top = 40));
          var ballon_top = (page_load_qty * 75) / 500 / 4 + main_ballon_top,
            ballon_width = (page_load_qty * 70) / 500 / 4 + main_ballon_width,
            ballon_height = (page_load_qty * 70) / 500 / 4 + main_ballon_height;
          $(".product__info-wrapper .range_bar_tooltip").css({
            top: "-" + ballon_top + "px",
          }),
            $(".product__info-wrapper .range_bar_tooltip span").css({
              width: ballon_width + "px",
              height: ballon_height + "px",
            });
        }
        var loadlastValue,
          values = page_load_qty;
        updateSlider(values),
          $(".range_bar_tooltip_drag_text").addClass("hidden");
        var subscription_input = $(".subscription_input:checked").attr(
          "data_id"
        );
        values > 4
          ? ($(".price_regular").removeClass("hidden"),
            $(".price_discount_container").removeClass("hidden"))
          : subscription_input == "subscribe-save" ||
            subscription_input == "subscribe-save-sticky"
          ? ($(".price_discount_container").removeClass("hidden"),
            $(".price_regular").removeClass("hidden"))
          : ($(".price_discount_container").addClass("hidden"),
            $(".price_regular").addClass("hidden")),
          updateUnitTotal();
        var loadnewValue = values;
        loadnewValue >= currentValue
          ? (gsap.to(".product__info-wrapper .range_bar_tooltip", {
              rotation: -25,
              y: 5,
              x: -29,
              z: 0,
              duration: 0.4,
            }),
            $(window).width() <= 767
              ? gsap.to(".sticky_bar .range_bar_tooltip", {
                  rotation: -25,
                  y: 0,
                  x: -23,
                  z: 0,
                  duration: 0.4,
                })
              : gsap.to(".sticky_bar .range_bar_tooltip", {
                  rotation: -25,
                  y: 5,
                  x: -29,
                  z: 0,
                  duration: 0.4,
                }))
          : loadnewValue <= currentValue
          ? (gsap.to(".product__info-wrapper .range_bar_tooltip", {
              rotation: 25,
              y: 0,
              x: 32,
              duration: 0.4,
            }),
            $(window).width() <= 767
              ? gsap.to(".sticky_bar .range_bar_tooltip", {
                  rotation: 25,
                  y: 0,
                  x: 25,
                  duration: 0.4,
                })
              : gsap.to(".sticky_bar .range_bar_tooltip", {
                  rotation: 25,
                  y: 5,
                  x: 29,
                  duration: 0.4,
                }))
          : gsap.to(".range_bar_tooltip", {
              rotation: 0,
              y: 0,
              x: 0,
              duration: 0.4,
            }),
          (currentValue = loadnewValue),
          (loadlastValue = loadnewValue);
      }
    }
    if (
      ($.get(
        "http://ipinfo.io",
        function (response) {
          $(".ip_address").val(response.ip);
        },
        "json"
      ),
      $(document).on("click", ".js_page_redirect", function () {
        $(".page_careers").length &&
          setTimeout(function () {
            location.reload(!0);
          }, 400);
      }),
      $(".announcement_bar_section").length)
    ) {
      let setCookie2 = function (cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1e3);
          var expires = "expires=" + d.toGMTString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        getCookie3 = function (cname) {
          for (
            var name = cname + "=",
              decodedCookie = decodeURIComponent(document.cookie),
              ca = decodedCookie.split(";"),
              i2 = 0;
            i2 < ca.length;
            i2++
          ) {
            for (var c = ca[i2]; c.charAt(0) == " "; ) c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
          }
          return "";
        },
        checkCookie2 = function () {
          var user = getCookie3("announcement-bar");
          user == "" && $(".announcement_bar_section").removeClass("hidden");
        };
      var setCookie = setCookie2,
        getCookie2 = getCookie3,
        checkCookie = checkCookie2;
      $(document).on("click", ".announcement_close", function () {
        $("#kretoss-section-announcement-bar-two").fadeOut("slow"),
          setCookie2("announcement-bar", "yes");
      }),
        checkCookie2();
    }
    $(document).on("change", ".js_form_type", function () {
      var $this = $(this),
        data_id = $this.attr("data_id"),
        active_data_id = $this.attr("id");
      ($("#tab-" + active_data_id).length ||
        $("#form-" + active_data_id).length ||
        $this.parents(".home_banner").find("." + data_id).length) &&
        ($("#tab-" + active_data_id).trigger("click"),
        $("#form-" + active_data_id).trigger("click"),
        $this.parents(".home_banner").find(".content").addClass("hidden"),
        $this
          .parents(".home_banner")
          .find(".banner_images .image")
          .addClass("hidden"),
        $this.parents(".home_banner").find(".form_notes").addClass("hidden"),
        $this
          .parents(".home_banner")
          .find("." + data_id)
          .removeClass("hidden"));
    }),
      $(".image_slider_trigger").each(function (index) {
        var $this = $(this);
        $this.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          prevArrow: $this.parents(".image_text_blocks").find(".arrow_prev"),
          nextArrow: $this.parents(".image_text_blocks").find(".arrow_next"),
          adaptiveHeight: !0,
        });
      }),
      $(window).width() > 768 &&
        ($(".image_slider_trigger").on(
          "beforeChange",
          function (event, slick, currentSlide, nextSlide) {
            $(".image_slider_trigger .block_appsdetail li").removeClass(
              "aos-animate"
            ),
              $(
                ".image_slider_trigger .block_right_content .image"
              ).removeClass("aos-animate");
          }
        ),
        $(".image_slider_trigger").on(
          "afterChange",
          function (event, slick, currentSlide) {
            $(
              ".image_slider_trigger .single_block.slick-current .block_appsdetail li"
            ).addClass("aos-animate"),
              $(
                ".image_slider_trigger .single_block.slick-current .block_right_content .image"
              ).addClass("aos-animate");
          }
        )),
      $(".column_list_one").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 8e3,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
        verticalSwiping: !0,
        adaptiveHeight: !0,
      }),
      $(".column_list_two").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 6e3,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
        verticalSwiping: !0,
        adaptiveHeight: !0,
      }),
      $(".column_list_three").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 1e4,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
        verticalSwiping: !0,
        adaptiveHeight: !0,
      }),
      $(window)
        .scroll(function () {
          if ($(".custom_store_section").length) {
            var section_id = $(".custom_store_section").offset().top,
              window_height = $(window).height() / 2,
              window_scroll =
                $(this).scrollTop() +
                $("#kretoss-section-header").height() +
                window_height;
            if (
              window_scroll >= section_id &&
              $(".services_left_content").hasClass("active_count")
            ) {
              if (
                (($.fn.jQuerySimpleCounter = function (options) {
                  var settings = $.extend(
                      {
                        start: 0,
                        end: 100,
                        easing: "swing",
                        duration: 400,
                        complete: "",
                      },
                      options
                    ),
                    thisElement = $(this);
                  $({ count: settings.start }).animate(
                    { count: settings.end },
                    {
                      duration: settings.duration,
                      easing: settings.easing,
                      step: function () {
                        if (
                          thisElement[0].classList.contains("custom_index_2")
                        ) {
                          var mathCount = this.count;
                          thisElement.text("$" + mathCount.toFixed(1) + "B+");
                        } else {
                          var mathCount = Math.ceil(this.count);
                          thisElement.text(mathCount);
                        }
                      },
                      complete: settings.complete,
                    }
                  );
                }),
                $(".custom_index_1 .count_number").length)
              ) {
                var count_one = parseInt(
                  $(".custom_index_1 .count_number").attr("data_number")
                );
                $(".custom_index_1 .count_number").jQuerySimpleCounter({
                  end: count_one,
                  duration: 3e3,
                });
              }
              if ($(".custom_index_3 .count_number").length) {
                var count_two = parseInt(
                  $(".custom_index_3 .count_number").attr("data_number")
                );
                $(".custom_index_3 .count_number").jQuerySimpleCounter({
                  end: count_two,
                  duration: 3e3,
                });
              }
              if (
                ($(".custom_index_2").length &&
                  $(".custom_index_2").jQuerySimpleCounter({
                    end: 1.5,
                    duration: 3e3,
                  }),
                $(".custom_index_4 .count_number").length)
              ) {
                var count_four = parseInt(
                  $(".custom_index_4 .count_number").attr("data_number")
                );
                $(".custom_index_4 .count_number").jQuerySimpleCounter({
                  end: count_four,
                  duration: 3e3,
                });
              }
              $(".services_left_content").removeClass("active_count");
            }
          }
        })
        .scroll(),
      $(".review_slider_trigger").each(function () {
        var $this = $(this);
        $this.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          fade: !0,
          prevArrow: $this.parents(".left_content").find(".arrow_prev"),
          nextArrow: $this.parents(".left_content").find(".arrow_next"),
        });
      }),
      $(document).on("change", ".store_tab_input", function () {
        var $this = $(this),
          active_data_id = $this.attr("id").replace("tab-", "");
        $(".store_tab_input").removeClass("active"), $this.addClass("active");
        var check_tab = $this.attr("data_id");
        $("#" + active_data_id).trigger("click"),
          $("#form-" + active_data_id).trigger("click"),
          $this
            .parents(".store_tabs")
            .find(".details_list_content")
            .addClass("hidden"),
          $this
            .parents(".store_tabs")
            .find(".details_list_content#" + check_tab)
            .removeClass("hidden");
      }),
      $(document).on("click", ".video_play", function () {
        var $this = $(this);
        $this.addClass("hidden"),
          $this.parents(".video").find("video")[0].play();
      }),
      $(document).on("click", ".video_image .images", function () {
        var $this = $(this);
        $this.parents(".video_image").find("video").length &&
          ($this.parents(".video_image").find(".video_play").addClass("hidden"),
          $this.parents(".video_image").find("video")[0].play());
      }),
      $(document).on("click", ".video_popup video", function () {
        var $this = $(this);
        $this.parents(".video").find(".video_play").removeClass("hidden"),
          $(this)[0].pause();
      }),
      $(document).on("click", ".video_full_screen", function () {
        var $this = $(this);
        $this.parents(".video_popup").find("video")[0].webkitEnterFullscreen(),
          $this.parents(".video_popup").find("video")[0].requestFullscreen();
      }),
      $(".video_image.hover_element").mouseleave(function () {
        var $this = $(this);
        $this.find(".video_play").removeClass("hidden"),
          $this.find("video")[0].pause();
      }),
      $(document).on("click", ".icon_video_sound", function () {
        var $this = $(this);
        $this.parents(".video_popup").find("video").prop("muted")
          ? ($this.parents(".video_popup").find("video").prop("muted", !1),
            $this.parents(".video_popup").addClass("video_unmuted"))
          : ($this.parents(".video_popup").find("video").prop("muted", !0),
            $this.parents(".video_popup").removeClass("video_unmuted"));
      }),
      $(".video_image.hover_element").mouseenter(function () {
        var $this = $(this);
        $this.find("video")[0].play(),
          $this.find(".video_play").addClass("hidden");
        var right_offset =
            $(".support_info").width() -
            ($this.offset().left + $this.outerWidth()) -
            15,
          left_offset = $this.offset().left,
          popupWidth = $this.find(".video_popup").innerWidth();
        right_offset > popupWidth
          ? ($this.addClass("right_show"),
            $this.removeClass("left_show"),
            $this.removeClass("center_show"))
          : left_offset > popupWidth
          ? ($this.addClass("left_show"),
            $this.removeClass("right_show"),
            $this.removeClass("center_show"))
          : ($this.addClass("center_show"),
            $this.removeClass("right_show"),
            $this.removeClass("left_show"));
      }),
      $(document).on("click", ".js_main_heading", function () {
        $(this).parents(".sub_heading_dropbox").hasClass("active")
          ? $(this).parents(".sub_heading_dropbox").removeClass("active")
          : ($(".internal_feedback").length &&
              $(".sub_heading_dropbox").removeClass("active"),
            $(this).parents(".sub_heading_dropbox").addClass("active"));
      }),
      $(document).on("click", ".heading_dropbox", function () {
        var $this = $(this),
          value = $this.attr("value"),
          data_id = $this.attr("data_id");
        if (
          ($this
            .parents(".sub_heading_dropbox")
            .find(".heading_text")
            .text(value),
          $this.parents(".sub_heading_dropbox").removeClass("active"),
          $this
            .parents(".sub_heading_dropbox")
            .find(".heading_dropbox")
            .removeClass("active_value"),
          $this.addClass("active_value"),
          value == "Select Your Craft"
            ? ($this.parents(".hiring_detail").addClass("hidden_image_label"),
              $this
                .parents(".hiring_left_content")
                .find(".bottom_btn a")
                .removeClass("active"))
            : ($this
                .parents(".hiring_detail")
                .removeClass("hidden_image_label"),
              $this
                .parents(".hiring_left_content")
                .find(".bottom_btn a")
                .addClass("active")),
          $(".block_content.block_" + data_id).length &&
            ($this
              .parents(".hiring_detail")
              .find(".block_content")
              .addClass("hidden"),
            $this
              .parents(".hiring_detail")
              .find(".block_content.block_" + data_id)
              .removeClass("hidden")),
          value == "Other"
            ? $(".other_textbox").addClass("active_other")
            : $(".other_textbox").removeClass("active_other"),
          $(".page_careers_forms_section").length)
        ) {
          $(".sub_heading_dropbox").find(".heading_text").text(value),
            $(".heading_dropbox").removeClass("active_value"),
            $(".heading_dropbox[data_id='" + data_id + "']").addClass(
              "active_value"
            );
          var current_url = window.location.toString();
          current_url.indexOf("#FocusMode") > 0
            ? window.location.assign("#" + data_id + "#started#FocusMode")
            : window.location.assign("#" + data_id + "#started");
        }
        if (
          ($(".page_contact_us").length &&
            ($(".sub_heading_dropbox").find(".heading_text").text(value),
            $(".heading_dropbox").removeClass("active_value"),
            $(".heading_dropbox[value='" + value + "']").addClass(
              "active_value"
            )),
          $this.parents(".sub_heading_dropbox").hasClass("success_manager"))
        ) {
          var image = $(this).attr("data_image");
          $(".sub_heading_dropbox").find(".sub_heading img").attr("src", image),
            $(
              ".active_success_managar, .sub_heading_dropbox .heading_text"
            ).text(value),
            $(".feeback_person_image")
              .find(".success_manager_main_image img")
              .attr("src", image);
          var person_role = $(this).attr("person_role");
          $(".feeback_person_image")
            .find(".success_managar_role")
            .text(person_role),
            $(".sub_heading_dropbox .heading_dropbox").removeClass(
              "active_value"
            ),
            $(
              ".sub_heading_dropbox .heading_dropbox[value='" + value + "']"
            ).addClass("active_value"),
            $(".sub_heading_dropbox").removeClass("active");
          var offset_top = $(".feedback_form_container").offset().top;
          $("html, body").animate({ scrollTop: offset_top }, "slow"),
            $(".input_radio_field[type='radio']:checked").each(function () {
              $(this).prop("checked", !1);
            }),
            value == "Get Started"
              ? ($(".hidden_form_first").parent().addClass("form_first_hidden"),
                $(".hidden_form_first").addClass("hidden"),
                $(".heading_text").text("Select your Main Point of Contact"))
              : ($(".hidden_form_first")
                  .parent()
                  .removeClass("form_first_hidden"),
                $(".hidden_form_first").removeClass("hidden"));
        }
      }),
      $(document).on("change", ".form_type_input", function () {
        var $this = $(this),
          data_id = $this.attr("data_id"),
          active_data_id = $this.attr("id").replace("form-", "");
        $(".form_type_input").removeClass("active"),
          $this.addClass("active"),
          $("#" + active_data_id).trigger("click"),
          $("#tab-" + active_data_id).trigger("click"),
          $this
            .parents(".shopify_audit")
            .find(".audit_list")
            .addClass("hidden"),
          $this
            .parents(".shopify_audit")
            .find(".audit_list#" + data_id)
            .removeClass("hidden");
      }),
      $(window).width() <= 1920 &&
        $(".announcement_slider_trigger").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          responsive: [
            {
              breakpoint: 1024, // Change to 768px for mobile
              settings: {
                slidesToShow: 1, // Show 1 slide on mobile
                slidesToScroll: 1, // Scroll 1 slide at a time
              },
            },
          ],
        }),
      $(".trust_logo_slider_one").length &&
        $(".trust_logo_slider_one").marquee({
          direction: "left",
          duration: 8e4,
          delayBeforeStart: 0,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(".trust_logo_slider_two").length &&
        $(".trust_logo_slider_two").marquee({
          direction: "right",
          duration: 8e4,
          delayBeforeStart: 0,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(".trust_logo_slider_three").length &&
        $(".trust_logo_slider_three").marquee({
          direction: "left",
          duration: 12e4,
          delayBeforeStart: 3e3,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(window).width() <= 767 &&
        ($(window).on("scroll", function () {
          if ($(".shopify_store_tabs_section").length) {
            var elementTop = $(".shopify_store_tabs_section").offset().top,
              elementBottom =
                elementTop + $(".shopify_store_tabs_section").outerHeight(),
              viewportTop = $(window).scrollTop(),
              viewportBottom = viewportTop + $(window).height();
            elementBottom > viewportTop && elementTop < viewportBottom
              ? $(".store_tabs .tabs_button").css("display", "block")
              : $(".store_tabs .tabs_button").css("display", "none");
          }
          if ($(".shopify_audit_section").length) {
            var elementTop = $(".shopify_audit_section").offset().top,
              elementBottom =
                elementTop + $(".shopify_audit_section").outerHeight(),
              viewportTop = $(window).scrollTop(),
              viewportBottom = viewportTop + $(window).height();
            elementBottom > viewportTop && elementTop < viewportBottom
              ? $(".shopify_audit .audit_button_list").css("display", "block")
              : $(".shopify_audit .audit_button_list").css("display", "none");
          }
          if ($(".block__home-banner-buttons-mobile-sticky").length) {
            var elementTop =
                $(".banner_hero .banner_content").offset().top - 50,
              elementBottom =
                elementTop + $(".banner_hero .banner_content").outerHeight(),
              viewportTop = $(window).scrollTop(),
              viewportBottom = viewportTop + $(window).height();
            elementBottom > viewportTop && elementTop < viewportBottom
              ? $(".block__home-banner-buttons-mobile-sticky").css(
                  "display",
                  "none"
                )
              : ($(".block__home-banner-buttons-mobile-sticky").css(
                  "display",
                  "block"
                ),
                $(".footer_bottom_content").css(
                  "marginBottom",
                  $(".block__home-banner-buttons-mobile-sticky").height() + "px"
                ));
          }
        }),
        $(".logo_list_slider").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: !0,
          arrows: !1,
        }),
        $(".block__development-firm-list-slider").slick({
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: !0,
          arrows: !1,
        }),
        $(".member_list_slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          arrows: !1,
        }),
        $(".member_list_slider").slick("slickGoTo", 1),
        $(document).on("click", ".menu_footer_heading", function () {
          var $this = $(this);
          $this.parents(".menu_list").hasClass("active")
            ? ($this.parents(".menu_list").removeClass("active"),
              $this.parents(".menu_list").find("ul").slideUp())
            : ($this.parents(".menu_list").addClass("active"),
              $this.parents(".menu_list").find("ul").slideDown());
        })),
      $(".store_image_slider").each(function (index) {
        var $this = $(this);
        $this.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          fade: !0,
          autoplaySpeed: 4e3,
          autoplay: !0,
        });
      }),
      $(".logo_image_slider").each(function (index) {
        var $this = $(this);
        $this.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          fade: !0,
          draggable: !1,
          autoplay: !0,
        });
      }),
      $(window).on("scroll", function () {
        var announcementHeight =
          $(".announcement_bar_section").outerHeight() + 20;
        $(".announcement_bar_section").length
          ? $(this).scrollTop() >= announcementHeight
            ? $("#kretoss-section-header").addClass("sticky_header")
            : $("#kretoss-section-header").removeClass("sticky_header")
          : $(this).scrollTop() >= 50
          ? $("#kretoss-section-header").addClass("sticky_header")
          : $("#kretoss-section-header").removeClass("sticky_header");
      }),
      $(window).scroll(function () {
        if ($(".site_review_section").length) {
          var section_id = $(".site_review_section").offset().top,
            window_height = $(window).height() / 2,
            window_scroll =
              $(this).scrollTop() +
              $("#kretoss-section-header").height() +
              window_height;
          if (
            window_scroll >= section_id &&
            $(".site_review_section").hasClass("active_count")
          ) {
            if (
              (($.fn.jQuerySimpleCounter = function (options) {
                var settings = $.extend(
                    {
                      start: 0,
                      end: 100,
                      easing: "swing",
                      duration: 400,
                      complete: "",
                    },
                    options
                  ),
                  thisElement = $(this);
                $({ count: settings.start }).animate(
                  { count: settings.end },
                  {
                    duration: settings.duration,
                    easing: settings.easing,
                    step: function () {
                      var mathCount = Math.ceil(this.count);
                      thisElement.text(mathCount);
                    },
                    complete: settings.complete,
                  }
                );
              }),
              $(".total_review_counter").length)
            ) {
              var count_one = parseInt(
                $(".total_review_counter").attr("data_counter")
              );
              $(".total_review_counter span").jQuerySimpleCounter({
                end: count_one,
                duration: 3e3,
              });
            }
            if ($(".five_star_review").length) {
              var count_one = parseInt(
                $(".five_star_review").attr("data_five_star")
              );
              $(".five_star_review").jQuerySimpleCounter({
                end: count_one,
                duration: 3e3,
              });
            }
            if ($(".four_star_review").length) {
              var count_one = parseInt(
                $(".four_star_review").attr("data_four_star")
              );
              $(".four_star_review").jQuerySimpleCounter({
                end: count_one,
                duration: 3e3,
              });
            }
            $(".site_review_section").removeClass("active_count");
          }
        }
      }),
      $(document).on("click", ".banner_form_submit", function () {
        var $this = $(this),
          InputValue = {},
          check_val = $this
            .parents(".banner_subcription_form")
            .find(".input_field:checked")
            .val(),
          email2 = $this.parents(".form_container").find(".input_field").val(),
          gdpr_compliance2 = $this
            .parents(".form")
            .find(".block__gdpr-compliance-form-checkbox")
            .is(":checked");
        $this
          .parents(".newsletter_form")
          .find(".store_type_form")
          .addClass("hidden"),
          $this.parents(".form").find(".field_error").addClass("hidden"),
          $this
            .parents(".form")
            .find(".block__gdpr-compliance-checkbox-error")
            .addClass("hidden");
        var filter =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (check_val == null)
          return (
            $this
              .parents(".newsletter_form")
              .find(".store_type_form")
              .removeClass("hidden"),
            !1
          );
        if (email2 == "")
          return (
            $this.parents(".form").find(".field_error").removeClass("hidden"),
            $this.parents(".form_container").find(".input_field").focus(),
            !1
          );
        if (filter.test(String(email2).toLowerCase())) {
          if (gdpr_compliance2 == !1)
            return (
              $this
                .parents(".form")
                .find(".block__gdpr-compliance-checkbox-error")
                .removeClass("hidden"),
              !1
            );
        } else return $this.parents(".form").find(".field_error").removeClass("hidden").text("Please enter valid email."), $this.parents(".form_container").find(".input_field").focus(), !1;
        (InputValue.g = "SZ6geJ"),
          (InputValue.email = email2),
          (InputValue.Service = check_val),
          (InputValue.$fields = "Service,$consent"),
          (InputValue.$consent = !0);
        var settings = {
          async: !0,
          crossDomain: !0,
          url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
          },
          data: InputValue,
        };
        $.ajax(settings).done(function (response) {
          let nexturl = $this.data("nexturl");
          $this.parents(".form").find(".field_error").addClass("hidden"),
            $this.parents(".form").find(".form_success").removeClass("hidden"),
            (check_val == "Build a New Shopify Store" ||
              check_val == "Shopify Customizations") &&
              (window.location.href = nexturl);
        });
      }),
      $(document).on("click", ".bulk_form_submit", function () {
        var $this = $(this),
          InputValue = {},
          check_val = $this
            .parents(".banner_subcription_form")
            .find(".input_field:checked")
            .val(),
          email2 = $this.parents(".form_container").find(".input_field").val(),
          klaviyo_list_id = $this
            .parents(".form_container")
            .find(".klaviyo_list_id")
            .val(),
          redirect = $this.attr("data_link"),
          gdpr_compliance2 = $this
            .parents(".form")
            .find(".block__gdpr-compliance-form-checkbox")
            .is(":checked"),
          filter =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (
          ($this
            .parents(".form")
            .find(".block__gdpr-compliance-checkbox-error")
            .addClass("hidden"),
          $this
            .parents(".newsletter_form")
            .find(".store_type_form")
            .addClass("hidden"),
          $this.parents(".form").find(".field_error").addClass("hidden"),
          check_val == null)
        )
          return (
            $this
              .parents(".newsletter_form")
              .find(".store_type_form")
              .removeClass("hidden"),
            !1
          );
        if (email2 == "")
          return (
            $this.parents(".form").find(".field_error").removeClass("hidden"),
            $this
              .parents(".form")
              .find(".field_error")
              .text("Please fill this field."),
            (InputValue["Email Address :"] = email2),
            !1
          );
        if (filter.test(String(email2).toLowerCase())) {
          if (gdpr_compliance2 == !1)
            return (
              $this
                .parents(".form")
                .find(".block__gdpr-compliance-checkbox-error")
                .removeClass("hidden"),
              !1
            );
        } else return $this.parents(".form").find(".field_error").removeClass("hidden"), $this.parents(".form").find(".field_error").text("Please enter valid email"), !1;
        (InputValue.g = klaviyo_list_id),
          (InputValue.email = email2),
          (InputValue.Service = check_val),
          (InputValue.$fields = "Service,$consent"),
          (InputValue.$consent = !0);
        var settings = {
          async: !0,
          crossDomain: !0,
          url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
          },
          data: InputValue,
        };
        $.ajax(settings).done(function (response) {
          $this.parents(".form").find(".field_error").addClass("hidden"),
            $this.parents(".form").find(".form_success").removeClass("hidden"),
            redirect != "" &&
              (window.location.href =
                redirect + "?email=" + email2 + "#started");
        });
      }),
      $(document).on("click", ".bulk_hours_focus_close", function () {
        $(".bulk_hours_focus_mode").removeClass("active_popup").fadeOut("1000"),
          $("#confetti-canvas").remove(),
          $("body").removeClass("overflow-hidden"),
          $(".on-off-toggle__input").prop("checked", !1),
          $(this)
            .parents(".page_bulk_hours")
            .find(".form_submit_success")
            .removeClass("hidden");
        var offset_top = $(this)
          .parents(".bulk_hours")
          .find(".bulk_hours_details .bulk_left_content")
          .offset().top;
        $("html, body").animate({ scrollTop: offset_top }, "slow");
      }),
      $(document).on("click", ".js_popup_show", function () {
        var $this = $(this);
        $(".bulk_video_popup").addClass("active_popup"),
          $(".product_sticky_bar").addClass("sticky_active"),
          $(".bulk_video_popup video")[0].play(),
          $("body").addClass("overflow-hidden"),
          $("body").css("overflow", "hidden");
      }),
      $(document).on("click", ".close_popup", function () {
        $(".bulk_video_popup").removeClass("active_popup"),
          $(".product_sticky_bar").removeClass("sticky_active"),
          $("body").removeClass("overflow-hiden"),
          $("body").css("overflow", "auto"),
          $(this).parents(".bulk_video_popup").find("video")[0].pause();
      }),
      $(document).on("click", ".js_video_play", function () {
        var $this = $(this);
        $this.addClass("hidden"),
          $this.parents(".main_image").find("video")[0].play();
      }),
      $(".product_model_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
      }),
      $(document).on("click", ".product__modal-opener", function () {
        $(".product_model_popup").addClass("model_open");
      }),
      $(document).on("click", ".product_media_modal_toggle", function () {
        $(".product_model_popup").removeClass("model_open"),
          $("body").removeClass("overflow-hidden"),
          $(".product_sticky_bar").removeClass("sticky_active"),
          $("video")[0].pause();
      }),
      $(document).on(
        "change input keyup",
        ".product-form__input .product_bulk_hour",
        function (e) {
          var $this = $(this),
            current_val = $this.val();
          (current_val = Math.abs(current_val)),
            console.log(current_val, "current_val"),
            $(".product_rangebar").val(current_val),
            $(".total_hours").text(current_val),
            $(".product-form__input .quantity__input").val(current_val),
            $(".input_counter").text(current_val);
          var subscription_input2 = $(".subscription_input:checked").attr(
            "data_id"
          );
          current_val > 4
            ? ($(".price_regular").removeClass("hidden"),
              $(".price_discount_container").removeClass("hidden"))
            : (subscription_input2 == "subscribe-save" ||
              subscription_input2 == "subscribe-save-sticky"
                ? $(".price_discount_container").removeClass("hidden")
                : $(".price_discount_container").addClass("hidden"),
              $(".price_regular").addClass("hidden"));
          var prevVal2 = 1;
          let newMin, newMax;
          current_val >= 100 && current_val < 250
            ? prevVal2 > current_val && current_val === 100
              ? ((newMin = Math.max(1)), (newMax = Math.min(100)))
              : ((newMin = Math.max(100)), (newMax = Math.min(250)))
            : current_val >= 250 && current_val <= 500
            ? prevVal2 > current_val && current_val === 250
              ? ((newMin = Math.max(100)), (newMax = Math.min(250)))
              : ((newMin = Math.max(250)), (newMax = Math.min(500)))
            : ((newMin = Math.max(1)), (newMax = Math.min(100)));
          let currentMinVal = parseInt($(".product_rangebar").attr("min"));
          newMin !== currentMinVal &&
            (newMin === 1 || newMin === 0
              ? ($(".range_bar .min_value .current")
                  .text(newMin)
                  .removeClass("arrow_active"),
                $(".range_bar .max_value .current")
                  .text(newMax)
                  .addClass("arrow_active"))
              : newMin === 250
              ? ($(".range_bar .min_value .current")
                  .text(newMin)
                  .addClass("arrow_active"),
                $(".range_bar .max_value .current")
                  .text(newMax)
                  .removeClass("arrow_active"))
              : ($(".range_bar .min_value .current")
                  .text(newMin)
                  .addClass("arrow_active"),
                $(".range_bar .max_value .current")
                  .text(newMax)
                  .addClass("arrow_active"))),
            $(".product_rangebar").attr("min", newMin),
            $(".product_rangebar").attr("max", newMax),
            (prevVal2 = current_val);
          var max2 = parseInt($(".product_rangebar").attr("max")),
            min2 = parseInt($(".product_rangebar").attr("min"));
          const newValue = ((current_val - min2) * 100) / (max2 - min2),
            newPosition = 10 - newValue * 0.2,
            newpositionThumb = newValue * 0.2;
          $(".range_bar_tooltip span").text(current_val),
            $(".range_bar_tooltip,.range_bar_tooltip_drag_text").css(
              "left",
              `calc(${newValue}% + (${newPosition}px))`
            ),
            $(".range-thumb").css(
              "left",
              `calc(${newValue}% - (${newpositionThumb}px))`
            ),
            updateUnitTotal(e),
            (current_val == "" || current_val == 0) &&
              ($(".product-form__input .quantity__input").val(1),
              $(".product-form__input .quantity__input").change()),
            current_val > 500 &&
              ($(".product-form__input .quantity__input").val(500),
              $(".product-form__input .quantity__input").change()),
            updateBallonProp(current_val, max2, min2);
          const progress = convertToPercentage(current_val, min2, max2),
            sliderEls = document.querySelectorAll(".product_rangebar");
          sliderEls.length > 0 &&
            sliderEls.forEach((sliderEl) => {
              sliderEl.style.background = `linear-gradient(to right, #018062 ${progress}%, transparent ${progress}%)`;
            });
        }
      );
    function debounce(func, delay) {
      let timer;
      return function () {
        const context = this,
          args = arguments;
        clearTimeout(timer),
          (timer = setTimeout(() => {
            func.apply(context, args);
          }, delay));
      };
    }
    var prevVal = 1;
    function updateMinMaxVal(event, slider) {
      let value = parseInt(event.target.value, 10);
      var productMinValue = 20;
      $(".block__bfcm-lock-in-rate-product-rangebar-lock-in").length &&
        (productMinValue = 20);
      let newMin, newMax;
      value >= 100 && value < 250
        ? (prevVal > value && value === 100) ||
          (prevVal === 100 && value === 100)
          ? slider === "product_rangebar_lock_in"
            ? event.target.getAttribute("min") !== "productMinValue"
              ? ((newMin = Math.max(productMinValue)), (newMax = Math.min(100)))
              : ((newMin = Math.max(100)), (newMax = Math.min(250)))
            : event.target.getAttribute("min") !== "1"
            ? ((newMin = Math.max(1)), (newMax = Math.min(100)))
            : ((newMin = Math.max(100)), (newMax = Math.min(250)))
          : ((newMin = Math.max(100)), (newMax = Math.min(250)))
        : value >= 250 && value <= 500
        ? (prevVal > value && value === 250) ||
          (prevVal === 250 && value === 250)
          ? event.target.getAttribute("min") !== "250"
            ? ((newMin = Math.max(250)), (newMax = Math.min(500)))
            : ((newMin = Math.max(100)), (newMax = Math.min(250)))
          : ((newMin = Math.max(250)), (newMax = Math.min(500)))
        : (slider === "product_rangebar_lock_in"
            ? (newMin = Math.max(productMinValue))
            : (newMin = Math.max(1)),
          (newMax = Math.min(100)));
      let currentMinVal = event.target.getAttribute("min"),
        currentMaxVal = event.target.getAttribute("max");
      newMin !== parseInt(currentMinVal, 10) &&
        ((
          slider === "product_rangebar_lock_in"
            ? newMin === productMinValue || newMin === 0
            : newMin === 1 || newMin === 0
        )
          ? ($(".min_value .new").text(newMin).removeClass("arrow_active"),
            $(".max_value .new").text(newMax).addClass("arrow_active"),
            animateValues(
              ".range_bar .min_value .new",
              ".range_bar .max_value .new",
              ".range_bar .min_value .current",
              ".range_bar .max_value .current"
            ))
          : newMin === 250
          ? ($(".range_bar .min_value .new")
              .text(newMin)
              .addClass("arrow_active"),
            $(".range_bar .max_value .new")
              .text(newMax)
              .removeClass("arrow_active"),
            animateValues(
              ".range_bar .min_value .new",
              ".range_bar .max_value .new",
              ".range_bar .min_value .current",
              ".range_bar .max_value .current"
            ))
          : ($(".range_bar .min_value .new")
              .text(newMin)
              .addClass("arrow_active"),
            $(".range_bar .max_value .new")
              .text(newMax)
              .addClass("arrow_active"),
            animateValues(
              ".range_bar .min_value .new",
              ".range_bar .max_value .new",
              ".range_bar .min_value .current",
              ".range_bar .max_value .current"
            )),
        (
          slider === "product_rangebar_lock_in"
            ? currentMinVal === productMinValue
            : currentMinVal === 1
        )
          ? ($(".range_bar .min_value .current")
              .text(currentMinVal)
              .removeClass("arrow_active"),
            $(".range_bar .max_value .current")
              .text(currentMaxVal)
              .addClass("arrow_active"))
          : currentMinVal === 250
          ? ($(".range_bar .min_value .current")
              .text(currentMinVal)
              .addClass("arrow_active"),
            $(".range_bar .max_value .current")
              .text(currentMaxVal)
              .removeClass("arrow_active"))
          : ($(".range_bar .min_value .current")
              .text(currentMinVal)
              .addClass("arrow_active"),
            $(".range_bar .max_value .current")
              .text(currentMaxVal)
              .addClass("arrow_active")),
        updateTooltip(value, newMax, newMin, slider),
        updateBallonProp(value, newMax, newMin));
      let sliderRange = document.getElementsByClassName(slider);
      for (var i2 = 0; i2 < sliderRange.length; i2++)
        sliderRange[i2].setAttribute("min", newMin),
          sliderRange[i2].setAttribute("max", newMax);
      prevVal = value;
    }
    function animateValues(min2, max2, currentmin, currentmax) {
      const minelement = $(min2),
        currentMinelement = $(currentmin),
        maxelement = $(max2),
        currentMaxelement = $(currentmax),
        animationDuration = 0.4;
      minelement !== void 0 &&
        maxelement !== void 0 &&
        gsap.to(minelement, {
          left: 0,
          opacity: 1,
          duration: animationDuration,
          onComplete: () => {
            minelement.removeClass("new").addClass("current").css({ left: 0 });
          },
        }),
        maxelement !== void 0 &&
          gsap.to(maxelement, {
            right: 0,
            opacity: 1,
            duration: animationDuration,
            onComplete: () => {
              maxelement
                .removeClass("new")
                .addClass("current")
                .css({ right: 0 });
            },
          }),
        currentMinelement !== void 0 &&
          gsap.to(currentMinelement, {
            left: "-30px",
            opacity: 1,
            duration: animationDuration,
            onComplete: () => {
              currentMinelement
                .removeClass("current")
                .addClass("new")
                .css({ left: "30px", opacity: 0 });
            },
          }),
        currentMaxelement !== void 0 &&
          gsap.to(currentMaxelement, {
            right: "-30px",
            opacity: 1,
            duration: animationDuration,
            onComplete: () => {
              currentMaxelement
                .removeClass("current")
                .addClass("new")
                .css({ right: "30px", opacity: 0 });
            },
          });
    }
    function calculateFontSize(percentage, minFontSize, maxFontSize) {
      return (
        (percentage = Math.min(100, Math.max(0, percentage))),
        minFontSize + (percentage / 100) * (maxFontSize - minFontSize)
      );
    }
    function convertToPercentage(currentValue2, minValue, maxValue) {
      return ((currentValue2 - minValue) / (maxValue - minValue)) * 100;
    }
    function updateTooltip(value, maxVal, minVal, slider) {
      let currentVal = value || 0,
        minValOld = parseInt(
          document.getElementById("product_range").getAttribute("min"),
          10
        );
      $(".product_rangebar").val(currentVal);
      const newValue = ((currentVal - minVal) * 100) / (maxVal - minVal),
        newPosition = 10 - newValue * 0.2,
        newpositionThumb = newValue * 0.2;
      let newValOld = `calc(${newValue}% + (${newPosition}px))`;
      minValOld !== minVal
        ? (gsap.to(".range_bar_tooltip,.range_bar_tooltip_drag_text", {
            left: newValOld,
            duration: 0.2,
            ease: "power2.inOut",
          }),
          gsap.to(".range-thumb", {
            left: `calc(${newValue}% - (${newpositionThumb}px))`,
            duration: 0.2,
            ease: "power2.inOut",
          }))
        : ($(".range_bar_tooltip,.range_bar_tooltip_drag_text").css(
            "left",
            `calc(${newValue}% + (${newPosition}px))`
          ),
          $(".range-thumb").css(
            "left",
            `calc(${newValue}% - (${newpositionThumb}px))`
          ));
      const progress = convertToPercentage(currentVal, minVal, maxVal),
        sliderEls = document.querySelectorAll(`.${slider}`);
      sliderEls.length > 0 &&
        sliderEls.forEach((sliderEl) => {
          minValOld !== minVal
            ? gsap.to(sliderEl, {
                background: `linear-gradient(to right, #018062 ${progress}%, transparent ${progress}%)`,
                duration: 0.2,
                ease: "power2.inOut",
              })
            : (sliderEl.style.background = `linear-gradient(to right, #018062 ${progress}%, transparent ${progress}%)`);
        });
    }
    function updateBallonProp(value, maxVal, minVal) {
      if ($(".product__info-wrapper").length) {
        var main_ballon_width2 = 45,
          main_ballon_height2 = 70,
          main_ballon_top2 = 55,
          percentageVal = convertToPercentage(value, minVal, maxVal);
        if ($(window).width() <= 767) {
          (main_ballon_width2 = 45),
            (main_ballon_height2 = 73),
            (main_ballon_top2 = 57);
          var fontsize = calculateFontSize(percentageVal, 18, 22);
        } else var fontsize = calculateFontSize(percentageVal, 16, 22);
        var ballon_top2 =
            (percentageVal * main_ballon_height2) / 100 / 3 + main_ballon_top2,
          ballon_width2 =
            (percentageVal * main_ballon_height2) / 100 / 3 +
            main_ballon_width2,
          ballon_height2 =
            (percentageVal * main_ballon_height2) / 100 / 3 +
            main_ballon_height2;
        $(".product__info-wrapper .range_bar_tooltip").css({
          top: "-" + ballon_top2 + "px",
        }),
          $(".product__info-wrapper .range_bar_tooltip span").css({
            width: ballon_width2 + "px",
            height: ballon_height2 + "px",
            fontSize: fontsize + "px",
          });
      }
      if ($(".sticky_bar").length) {
        var main_ballon_width2 = 40,
          main_ballon_height2 = 55,
          main_ballon_top2 = 50,
          percentageVal = convertToPercentage(value, minVal, maxVal);
        if ($(window).width() <= 767) {
          (main_ballon_width2 = 35),
            (main_ballon_height2 = 45),
            (main_ballon_top2 = 45);
          var fontsize = calculateFontSize(percentageVal, 10, 14);
        } else var fontsize = calculateFontSize(percentageVal, 13, 16);
        var ballon_top22 =
            (percentageVal * main_ballon_height2) / 100 / 6 + main_ballon_top2,
          ballon_width22 =
            (percentageVal * main_ballon_height2) / 100 / 6 +
            main_ballon_width2,
          ballon_height22 =
            (percentageVal * main_ballon_height2) / 100 / 6 +
            main_ballon_height2;
        $(".sticky_bar .range_bar_tooltip").css({
          top: "-" + ballon_top22 + "px",
        }),
          $(".sticky_bar .range_bar_tooltip span").css({
            width: ballon_width22 + "px",
            height: ballon_height22 + "px",
            fontSize: fontsize + "px",
          });
      }
    }
    function updateSlider(values2, event) {
      const value = values2;
      let maxVal = parseInt(
          document.getElementById("product_range").getAttribute("max"),
          10
        ),
        minVal = parseInt(
          document.getElementById("product_range").getAttribute("min"),
          10
        );
      updateTooltip(value, maxVal, minVal, "product_rangebar"),
        updateBallonProp(value, maxVal, minVal),
        value <= 100
          ? updateOutput(value)
          : value <= 250
          ? updateOutputWithIncrement(value, 100, 1)
          : value <= 500 && updateOutputWithIncrement(value, 250, 1);
    }
    function updateOutput(newValue) {
      $(".range_bar_tooltip span").text(newValue),
        $(".quantity__input").val(newValue),
        $(".total_hours").text(newValue);
    }
    function updateOutputWithIncrement(value, base, increment) {
      const adjustedValue =
        base + Math.floor((value - base) / increment) * increment;
      $(".range_bar_tooltip span").text(adjustedValue),
        $(".quantity__input").val(adjustedValue),
        $(".total_hours").text(adjustedValue);
    }
    var currentValue = parseInt($(".range_bar_tooltip span").text());
    let lastValue;
    function rangeSliderOnInput(event) {
      var values2 = event.target.value;
      updateSlider(values2, event),
        $(".range_bar_tooltip_drag_text").addClass("hidden");
      var subscription_input2 = $(".subscription_input:checked").attr(
        "data_id"
      );
      values2 > 4
        ? ($(".price_regular").removeClass("hidden"),
          $(".price_discount_container").removeClass("hidden"))
        : subscription_input2 == "subscribe-save" ||
          subscription_input2 == "subscribe-save-sticky"
        ? ($(".price_discount_container").removeClass("hidden"),
          $(".price_regular").removeClass("hidden"))
        : ($(".price_discount_container").addClass("hidden"),
          $(".price_regular").addClass("hidden")),
        updateUnitTotal();
      var newValue = values2;
      newValue >= currentValue
        ? (gsap.to(".product__info-wrapper .range_bar_tooltip", {
            rotation: -25,
            y: 5,
            x: -29,
            z: 0,
            duration: 0.4,
          }),
          $(window).width() <= 767
            ? gsap.to(".sticky_bar .range_bar_tooltip", {
                rotation: -25,
                y: 0,
                x: -23,
                z: 0,
                duration: 0.4,
              })
            : gsap.to(".sticky_bar .range_bar_tooltip", {
                rotation: -25,
                y: 5,
                x: -29,
                z: 0,
                duration: 0.4,
              }))
        : newValue <= currentValue
        ? (gsap.to(".product__info-wrapper .range_bar_tooltip", {
            rotation: 25,
            y: 0,
            x: 32,
            duration: 0.4,
          }),
          $(window).width() <= 767
            ? gsap.to(".sticky_bar .range_bar_tooltip", {
                rotation: 25,
                y: 0,
                x: 25,
                duration: 0.4,
              })
            : gsap.to(".sticky_bar .range_bar_tooltip", {
                rotation: 25,
                y: 5,
                x: 29,
                duration: 0.4,
              }))
        : gsap.to(".range_bar_tooltip", {
            rotation: 0,
            y: 0,
            x: 0,
            duration: 0.4,
          }),
        (currentValue = newValue),
        (lastValue = newValue);
    }
    function RangeSliderMouseUp(event) {
      $(".range_bar_tooltip_drag_text").removeClass("hidden"),
        updateMinMaxVal(event, "product_rangebar"),
        setTimeout(function () {
          gsap.to(".range_bar_tooltip", {
            rotation: 0,
            y: 0,
            x: 0,
            z: 0,
            duration: 0.4,
          });
        }, 250);
    }
    const debouncedRangeSliderOnInput = debounce(rangeSliderOnInput, 1);
    for (
      var productRangeSlider =
          document.getElementsByClassName("product_rangebar"),
        i = 0;
      i < productRangeSlider.length;
      i++
    )
      "ontouchstart" in window || navigator.maxTouchPoints
        ? (productRangeSlider[i].addEventListener("input", rangeSliderOnInput),
          productRangeSlider[i].addEventListener(
            "touchend",
            RangeSliderMouseUp
          ))
        : (productRangeSlider[i].addEventListener(
            "input",
            debouncedRangeSliderOnInput
          ),
          productRangeSlider[i].addEventListener(
            "mouseup",
            RangeSliderMouseUp
          ));
    $(document).on("change", ".subscription_input", function (e) {
      var data_id = $(this).attr("data_id"),
        subscription_input2 = $(this).attr("id");
      $("#" + data_id).length && $("#" + data_id).trigger("click");
      var current_val = $(".product-form__input .quantity__input").val();
      data_id == "subscribe-save" || data_id == "subscribe-save-sticky"
        ? ($(".product_subcription").addClass("subscribe_view"),
          $(".monthly_subscription_note").removeClass("hidden"),
          $(".price_regular").removeClass("hidden"),
          current_val <= 4 &&
            $(".price_discount_container").removeClass("hidden"))
        : ($(".product_subcription").removeClass("subscribe_view"),
          $(".monthly_subscription_note").addClass("hidden"),
          current_val <= 4 &&
            ($(".price_discount_container").addClass("hidden"),
            $(".price_regular").addClass("hidden"))),
        $(
          ".smartrr-selling-plan-group-header input[data_id='" +
            subscription_input2 +
            "']"
        ).trigger("click"),
        $(this)
          .parents(".subcription_heading")
          .find("li")
          .removeClass("active"),
        $(this).parent("li").addClass("active"),
        updateUnitTotal(e);
    }),
      $(document).on(
        "click",
        ".product-form div [data-smartrr-ns-list] li",
        function (e) {
          updateUnitTotal(e);
        }
      );
    function updateUnitTotal() {
      const hrs = parseInt($(".product-form__input .quantity__input").val());
      let price = 0,
        sub_price = 0,
        onetimeprice = 0,
        selected_subscription = $(
          ".product-form div [data-smartrr-ns-list] ul li.active"
        ).attr("data_value"),
        subscription = "Every 30 Days for 3 Months";
      var proPerHour = 200,
        addtocartText = "Buy";
      hrs > 1
        ? $(".total_hours_text").text("Hours")
        : $(".total_hours_text").text("Hour");
      const tiers = {
        4: 0,
        9: parseInt($(".pro_discount .qty_discount_2").attr("data_discount")),
        14: parseInt($(".pro_discount .qty_discount_3").attr("data_discount")),
        24: parseInt($(".pro_discount .qty_discount_4").attr("data_discount")),
        49: parseInt($(".pro_discount .qty_discount_5").attr("data_discount")),
        74: parseInt($(".pro_discount .qty_discount_8").attr("data_discount")),
        99: parseInt($(".pro_discount .qty_discount_9").attr("data_discount")),
        149: parseInt(
          $(".pro_discount .qty_discount_10").attr("data_discount")
        ),
        199: parseInt(
          $(".pro_discount .qty_discount_11").attr("data_discount")
        ),
        299: parseInt(
          $(".pro_discount .qty_discount_12").attr("data_discount")
        ),
        399: parseInt(
          $(".pro_discount .qty_discount_13").attr("data_discount")
        ),
        499: parseInt(
          $(".pro_discount .qty_discount_14").attr("data_discount")
        ),
        500: parseInt(
          $(".pro_discount .qty_discount_15").attr("data_discount")
        ),
      };
      for (v of Object.keys(tiers))
        if (((price = tiers[v]), (onetimeprice = tiers[v]), v >= hrs)) break;
      const sub_tiers = {
        4: 0,
        9: parseInt(
          $(".three_pro_discount .qty_discount_2").attr("data_discount")
        ),
        14: parseInt(
          $(".three_pro_discount .qty_discount_3").attr("data_discount")
        ),
        24: parseInt(
          $(".three_pro_discount .qty_discount_4").attr("data_discount")
        ),
        49: parseInt(
          $(".three_pro_discount .qty_discount_5").attr("data_discount")
        ),
        74: parseInt(
          $(".three_pro_discount .qty_discount_8").attr("data_discount")
        ),
        99: parseInt(
          $(".three_pro_discount .qty_discount_9").attr("data_discount")
        ),
        149: parseInt(
          $(".three_pro_discount .qty_discount_10").attr("data_discount")
        ),
        199: parseInt(
          $(".three_pro_discount .qty_discount_11").attr("data_discount")
        ),
        299: parseInt(
          $(".three_pro_discount .qty_discount_12").attr("data_discount")
        ),
        399: parseInt(
          $(".three_pro_discount .qty_discount_13").attr("data_discount")
        ),
        499: parseInt(
          $(".three_pro_discount .qty_discount_14").attr("data_discount")
        ),
        500: parseInt(
          $(".three_pro_discount .qty_discount_15").attr("data_discount")
        ),
      };
      for (v of Object.keys(sub_tiers))
        if (((sub_price = sub_tiers[v]), v >= hrs)) break;
      if ($(".subscription_input:checked").val() == "Subscribe & Save") {
        for (v of Object.keys(sub_tiers))
          if (((price = sub_tiers[v]), v >= hrs)) break;
      }
      var minus_discount,
        total_discount,
        total_after_discount,
        total_compared_price;
      hrs > 4
        ? ((minus_discount = proPerHour - (proPerHour * price) / 100),
          (total_after_discount = (
            (proPerHour - (proPerHour * price) / 100) *
            hrs
          ).toFixed(2)),
          (total_discount = (((proPerHour * price) / 100) * hrs).toFixed(2)),
          (total_compared_price = proPerHour * hrs))
        : ((minus_discount = proPerHour),
          (total_after_discount = (proPerHour * hrs).toFixed(2)),
          (total_discount = "0.00"),
          (total_compared_price = (proPerHour * hrs).toFixed(2)));
      var one_time_minus_discount,
        one_time_total_discount,
        one_time_total_after_discount,
        one_time_total_compared_price;
      hrs > 4
        ? ((one_time_minus_discount =
            proPerHour - (proPerHour * onetimeprice) / 100),
          (one_time_total_after_discount = (
            (proPerHour - (proPerHour * onetimeprice) / 100) *
            hrs
          ).toFixed(2)),
          (one_time_total_discount = (
            ((proPerHour * onetimeprice) / 100) *
            hrs
          ).toFixed(2)),
          (one_time_total_compared_price = proPerHour * hrs))
        : ((one_time_minus_discount = proPerHour),
          (one_time_total_after_discount = (proPerHour * hrs).toFixed(2)),
          (one_time_total_discount = "0.00"),
          (one_time_total_compared_price = (proPerHour * hrs).toFixed(2))),
        $(".price_per_single span").html(
          Shopify2.formatMoney(one_time_total_after_discount * 100, "")
        ),
        $(".price_label_pricing span").html(
          Shopify2.formatMoney(one_time_minus_discount * 100, "")
        );
      var subcription_minus_discount,
        subcription_total_discount,
        subcription_total_after_discount,
        subcription_total_compared_price;
      hrs > 4
        ? ((subcription_minus_discount =
            proPerHour - (proPerHour * sub_price) / 100),
          (subcription_total_after_discount = (
            (proPerHour - (proPerHour * sub_price) / 100) *
            hrs
          ).toFixed(2)),
          (subcription_total_discount = (
            ((proPerHour * sub_price) / 100) *
            hrs
          ).toFixed(2)),
          (subcription_total_compared_price = proPerHour * hrs))
        : ((subcription_minus_discount = proPerHour),
          (subcription_total_after_discount = (proPerHour * hrs).toFixed(2)),
          (subcription_total_discount = "0.00"),
          (subcription_total_compared_price = (proPerHour * hrs).toFixed(2)));
      var label_sub_minus_discount = (subcription_minus_discount * 10) / 100,
        label_minus_discount = (
          subcription_minus_discount - label_sub_minus_discount
        ).toFixed(2),
        label_subsription_dis = (subcription_total_after_discount * 10) / 100,
        label_total_after_discount = (
          subcription_total_after_discount - label_subsription_dis
        ).toFixed(2),
        subscription_label_total_discount =
          (subcription_total_compared_price - label_total_after_discount) * 100,
        subscription_label_total_price = (
          subscription_label_total_discount / subcription_total_compared_price
        ).toFixed(2);
      if (
        ($(".block__subscription-off-text").text(
          "-" + subscription_label_total_price + "%"
        ),
        $(".price_per_subscription span").html(
          Shopify2.formatMoney(label_total_after_discount * 100, "")
        ),
        $(".subcription_price_label span").html(
          Shopify2.formatMoney(label_minus_discount * 100, "")
        ),
        $(".subscription_input:checked").val() == "Subscribe & Save")
      ) {
        var subsription_dis = (total_after_discount * 10) / 100;
        (total_after_discount = (
          total_after_discount - subsription_dis
        ).toFixed(2)),
          (total_discount =
            (total_compared_price - total_after_discount) * 100);
        var sub_minus_discount = (minus_discount * 10) / 100;
        (minus_discount = (minus_discount - sub_minus_discount).toFixed(2)),
          (price = (total_discount / total_compared_price).toFixed(2)),
          (addtocartText = "Subscribe");
      }
      $(".block__product-form-submit-text").text(addtocartText),
        $(".price_per_product_sale span").html(
          Shopify2.formatMoney(minus_discount * 100, "")
        ),
        $(".price_per_qty_sale").html(
          Shopify2.formatMoney(total_after_discount, "")
        ),
        $(".discount_price").html(Shopify2.formatMoney(total_discount, "")),
        $(".discount_percentage").html(price),
        $(".price_per_qty_regular span").html(
          Shopify2.formatMoney(total_compared_price * 100, "")
        ),
        $(".button_price").html(Shopify2.formatMoney(total_after_discount, "")),
        $(".monthly_subscription_note_percentage").html(price);
    }
    if (
      ($(".product_rangebar").length && updateUnitTotal(),
      $(document).on("click", ".js_mobile_purchase", function () {
        $(this).toggleClass("active"),
          $("body").toggleClass("bg-active"),
          $(".product_sticky_bar .price").slideToggle(),
          $(".product_sticky_bar .heading_bars").slideToggle();
      }),
      $(window).on("scroll", function () {
        if ($(".product_bulk_hours").length) {
          var topHeight = $(
            ".product__info-container .product-form__buttons"
          ).offset().top;
          $(this).scrollTop() >= topHeight
            ? $(".product_sticky_bar").addClass("sticky_active")
            : $(".product_sticky_bar").removeClass("sticky_active");
        }
      }),
      $(document).on("click", ".js_form_popup_close", function () {
        $(this).parents(".audit_form_popup").removeClass("active_popup"),
          $("body").removeClass("overflow-hidden"),
          $("#confetti-canvas").remove(),
          $(".on-off-toggle__input").prop("checked", !1),
          $(this)
            .parents(".audit_list")
            .find(".form_submit_success")
            .removeClass("hidden");
        var offset_top = $(this)
          .parents(".audit_list")
          .find(".audit_list_content .left_content")
          .offset().top;
        $("html, body").animate({ scrollTop: offset_top }, "slow");
      }),
      $(document).on("click", ".top_prev_btn", function () {
        var $this = $(this),
          data_id = $this.attr("data_id");
        $this
          .parents(".audit_list")
          .find(".detail_list:not(.form_step_one)")
          .css("display", "none"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id)
            .fadeIn("1000"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id + " .top_next_prev_btn")
            .removeClass("hidden"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id + " .top_next_btn")
            .removeClass("hidden");
      }),
      $(document).on("click", ".top_next_btn", function () {
        var $this = $(this),
          data_id = $this.attr("data_id");
        $this
          .parents(".audit_list")
          .find(".detail_list:not(.form_step_one)")
          .css("display", "none"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id)
            .fadeIn("1000");
      }),
      $(".build_new_store_form_audit").length)
    )
      if (window.location.href.indexOf("#") > 0) {
        var url_email2 = getUrlParameter("email"),
          url = window.location.toString();
        if (url.indexOf("#") > 0 && !url_email2)
          if (url.indexOf("#FocusMode") > 0) {
            var clean_uri = url.substring(0, url.indexOf("#FocusMode"));
            window.history.replaceState({}, document.title, clean_uri);
          } else
            url.indexOf("#started") <= 0 && window.location.assign("#started");
        if (url_email2) {
          var hashes = window.location.href
              .slice(window.location.href.indexOf("#") + 1)
              .split("#"),
            selected_data = hashes[0].split("?email="),
            selected_form = selected_data[0],
            first_name = getUrlParameter("first_name");
          first_name &&
            ($(".first_name").val(first_name),
            $(".user_first_name").text(first_name));
          var last_name = getUrlParameter("last_name");
          last_name && $(".last_name").val(last_name),
            $(".email_field").val(url_email2),
            (selected_form == "In-Progress" ||
              selected_form == "Final-Step" ||
              selected_form == "Completed") &&
              ($(".audit_form_popup")
                .find(".detail_list")
                .css("display", "none"),
              $(".audit_form_popup").addClass("active_popup").scrollTop(0),
              $(".audit_form_popup")
                .find("#" + selected_form)
                .css("display", "block"),
              $("body").addClass("overflow-hidden"),
              $(".on-off-toggle__input").prop("checked", !0),
              selected_form == "Completed" &&
                (startConfetti(),
                setTimeout(function () {
                  stopConfetti();
                }, 5e3)));
        }
      } else window.location.assign("#started");
    $(document).on("click", ".audit_form_step_one", function () {
      var $this = $(this),
        data_id = $this.attr("data_btn_next"),
        FormType = $this
          .parents(".shopify_audit")
          .find(".form_type_input.active")
          .val(),
        type = $this.parents(".audit_list").find(".form_type_value").val(),
        FormInputValue = {},
        fields;
      $(".field_error").addClass("hidden");
      var first_name2 = $this.parents("form").find(".first_name").val(),
        last_name2 = $this.parents("form").find(".last_name").val(),
        email2 = $this.parents("form").find(".email_field").val(),
        phone_number = $this.parents("form").find(".phone_number").val(),
        company_name = $this.parents("form").find(".company_name").val(),
        url_field = $this.parents("form").find(".url_field").val(),
        referrer = $this.parents("form").find(".referrer").val(),
        form_utm_medium = $this.parents("form").find(".form_utm_medium").val(),
        form_utm_campaign = $this
          .parents("form")
          .find(".form_utm_campaign")
          .val(),
        user_browser = $this.parents("form").find(".user_browser").val(),
        ip_address = $this.parents("form").find(".ip_address").val(),
        gdpr_compliance2 = $this
          .parents("form")
          .find(".block__gdpr-compliance-form-checkbox")
          .is(":checked");
      $this
        .parents("form")
        .find(".block__gdpr-compliance-checkbox-error")
        .addClass("hidden");
      var email_validate =
          /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        first_last_validate = new RegExp("^[a-zA-Z ]+$");
      if (first_name2 == "")
        return (
          $this.parents("form").find(".first_name_error").removeClass("hidden"),
          !1
        );
      if (first_last_validate.test(first_name2)) {
        if (last_name2 == "")
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden"),
            !1
          );
        if (first_last_validate.test(last_name2)) {
          if (email2 == "")
            return (
              $this
                .parents("form")
                .find(".email_error")
                .removeClass("hidden")
                .text("Please fill this field."),
              !1
            );
          if (email_validate.test(email2)) {
            if (company_name == "")
              return (
                $this
                  .parents("form")
                  .find(".organization_error")
                  .removeClass("hidden"),
                !1
              );
            if (url_field == "")
              return (
                $this.parents("form").find(".url_error").removeClass("hidden"),
                !1
              );
            if (gdpr_compliance2 == !1)
              return (
                $this
                  .parents("form")
                  .find(".block__gdpr-compliance-checkbox-error")
                  .removeClass("hidden"),
                !1
              );
          } else
            return (
              $this
                .parents("form")
                .find(".email_error")
                .removeClass("hidden")
                .text("Please enter valid Email"),
              !1
            );
        } else
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden")
              .text("Please enter valid First name"),
            !1
          );
      } else return $this.parents("form").find(".first_name_error").removeClass("hidden").text("Please enter valid First name"), !1;
      var calendly_data = $this
          .parents(".audit_list")
          .find(".form_call_btn")
          .attr("onclick")
          .split("Calendly.initPopupWidget({url: '"),
        data_url = calendly_data[1].split("'});return false;"),
        new_calendly_url =
          "Calendly.initPopupWidget({url: '" +
          data_url[0] +
          "&email=" +
          email2 +
          "&name=" +
          first_name2 +
          " " +
          last_name2 +
          "&a1=" +
          company_name +
          "'});return false;";
      $this
        .parents(".audit_list")
        .find(".form_call_btn")
        .attr("onclick", new_calendly_url),
        (FormInputValue.$first_name = first_name2),
        (FormInputValue.$last_name = last_name2),
        (FormInputValue.email = email2),
        (FormInputValue["Phone Number"] = phone_number),
        (FormInputValue["Company Name"] = company_name),
        (FormInputValue["Website Address (URL)"] = url_field),
        (FormInputValue.Referrer = referrer),
        (FormInputValue.UTM_medium = form_utm_medium),
        (FormInputValue.UTM_campaign = form_utm_campaign),
        (FormInputValue.Browser = user_browser),
        (FormInputValue["Ip address"] = ip_address);
      var klaviyoListId;
      FormType == "Build a New Shopify Store"
        ? ((klaviyoListId = "XsggfH"),
          (FormInputValue.Free_Concept_Design_1 = !0),
          (fields =
            "Free_Concept_Design_1,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Browser,Ip address,Referrer,UTM_medium,UTM_campaign"))
        : ((klaviyoListId = "SsPprz"),
          (FormInputValue.Free_UX_Audit_1 = !0),
          (fields =
            "Free_UX_Audit_1,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Browser,Ip address,Referrer,UTM_medium,UTM_campaign")),
        klaviyoApi(FormInputValue, FormType, type, fields, klaviyoListId),
        $(".audit_form_popup").removeClass("active_popup"),
        $("body").addClass("overflow-hidden"),
        $(".user_first_name").html(first_name2),
        $(".on-off-toggle__input").prop("checked", !0);
      let nexturl = $this.data("nexturl");
      window.location.href = nexturl;
    }),
      $(document).on("click", ".audit_form_step_two", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormType = $this
            .parents(".shopify_audit")
            .find(".form_type_input.active")
            .val(),
          type = $this.parents(".audit_list").find(".form_type_value").val(),
          FormInputValue = {},
          fields;
        if (
          ($(".field_error").addClass("hidden"),
          $this.parents(".audit_form_1").length)
        ) {
          var first_name2 = $this
              .parents(".audit_list")
              .find(".first_name")
              .val(),
            last_name2 = $this.parents(".audit_list").find(".last_name").val(),
            email2 = $this.parents(".audit_list").find(".email_field").val(),
            phone_number = $this
              .parents(".audit_list")
              .find(".phone_number")
              .val(),
            company_name = $this
              .parents(".audit_list")
              .find(".company_name")
              .val(),
            url_field = $this.parents(".audit_list").find(".url_field").val(),
            website_goals = $this
              .parents(".audit_list")
              .find(".website_goals_field")
              .val(),
            competitors_field = $this
              .parents(".audit_list")
              .find(".competitors_field")
              .val(),
            team_msg_field = $this
              .parents(".audit_list")
              .find(".team_msg_field")
              .val();
          (FormInputValue.$first_name = first_name2),
            (FormInputValue.$last_name = last_name2),
            (FormInputValue.email = email2),
            (FormInputValue["Phone Number"] = phone_number),
            (FormInputValue["Company Name"] = company_name),
            (FormInputValue["Website Address (URL)"] = url_field),
            (FormInputValue["Website Goals"] = website_goals),
            (FormInputValue.Competitors = competitors_field),
            (FormInputValue["A Message for our UX + UI Design Team"] =
              team_msg_field),
            (FormInputValue.Free_Concept_Design_2 = !0),
            (fields =
              "Free_Concept_Design_2,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Website Goals,Competitors,A Message for our UX + UI Design Team");
        } else {
          var first_name2 = $this
              .parents(".audit_list")
              .find(".first_name")
              .val(),
            last_name2 = $this.parents(".audit_list").find(".last_name").val(),
            email2 = $this.parents(".audit_list").find(".email_field").val(),
            organization = $this
              .parents(".audit_list")
              .find(".organization")
              .val(),
            url2 = $this.parents(".audit_list").find(".url").val(),
            audit_goals_field = $this
              .parents(".audit_list")
              .find(".audit_goals_field")
              .val(),
            competitors_field = $this
              .parents(".audit_list")
              .find(".competitors_field")
              .val(),
            guidance_field = $this
              .parents(".audit_list")
              .find(".guidance_field")
              .val(),
            additional_files = [];
          $this
            .parents(".audit_list")
            .find("input.additional-files")
            .each(function () {
              additional_files.push($(this).val());
            }),
            (FormInputValue.$first_name = first_name2),
            (FormInputValue.$last_name = last_name2),
            (FormInputValue.email = email2),
            (FormInputValue.Organization = organization),
            (FormInputValue["Which page would you like us to audit for free?"] =
              url2),
            (FormInputValue["Audit Goals"] = audit_goals_field),
            (FormInputValue.Competitors = competitors_field),
            (FormInputValue["File Upload"] = additional_files.join(" , ")),
            (FormInputValue["A Message for our UX + UI Design Team"] =
              guidance_field),
            (FormInputValue.Free_UX_Audit_2 = !0),
            (fields =
              "Free_UX_Audit_2,$first_name,$last_name,Organization,Which page would you like us to audit for free?,Audit Goals,Competitors,File Upload,A Message for our UX + UI Design Team");
        }
        var klaviyoListId;
        if (
          (FormType == "Build a New Shopify Store"
            ? (klaviyoListId = "XsggfH")
            : (klaviyoListId = "SsPprz"),
          klaviyoApi(FormInputValue, FormType, type, fields, klaviyoListId),
          $this
            .parents(".audit_list")
            .find(".detail_list:not(.form_step_one)")
            .css("display", "none"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id)
            .fadeIn("1000"),
          $(".audit_form_popup").scrollTop(0),
          $this
            .parents(".audit_list")
            .find(".form_step_three .top_next_prev_btn")
            .removeClass("hidden"),
          $this
            .parents(".audit_list")
            .find(".form_step_three .top_prev_btn")
            .removeClass("hidden"),
          $(".build_new_store_form_audit").length)
        ) {
          var current_url = window.location.toString();
          if ($(".page_ux-audit-form").length) {
            var clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#In-Progress")
            );
            window.history.replaceState(
              {},
              document.title,
              clean_uri2 + "#Final-Step"
            );
          } else {
            var clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#In-Progress")
            );
            window.history.replaceState(
              {},
              document.title,
              clean_uri2 + "#In-Progress"
            );
          }
        }
      }),
      $(document).on("click", ".audit_form_step_three", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormType = $this
            .parents(".shopify_audit")
            .find(".form_type_input.active")
            .val(),
          type = $this.parents(".audit_list").find(".form_type_value").val(),
          FormInputValue = {},
          fields;
        if (
          ($(".field_error").addClass("hidden"),
          $this.parents(".audit_form_1").length)
        ) {
          var first_name2 = $this
              .parents(".audit_list")
              .find(".first_name")
              .val(),
            last_name2 = $this.parents(".audit_list").find(".last_name").val(),
            email2 = $this.parents(".audit_list").find(".email_field").val(),
            phone_number = $this
              .parents(".audit_list")
              .find(".phone_number")
              .val(),
            company_name = $this
              .parents(".audit_list")
              .find(".company_name")
              .val(),
            url_field = $this.parents(".audit_list").find(".url_field").val(),
            website_goals = $this
              .parents(".audit_list")
              .find(".website_goals_field")
              .val(),
            competitors_field = $this
              .parents(".audit_list")
              .find(".competitors_field")
              .val(),
            team_msg_field = $this
              .parents(".audit_list")
              .find(".team_msg_field")
              .val(),
            file_upload_one = [];
          $this
            .parents(".audit_list")
            .find("input.Home-Page-Concept-Design")
            .each(function () {
              file_upload_one.push($(this).val());
            });
          var file_upload_two = [];
          $this
            .parents(".audit_list")
            .find("input.Product-CSV")
            .each(function () {
              file_upload_two.push($(this).val());
            });
          var file_upload_three = [];
          $this
            .parents(".audit_list")
            .find("input.Upload-Logo")
            .each(function () {
              file_upload_three.push($(this).val());
            });
          var file_upload_four = [];
          $this
            .parents(".audit_list")
            .find("input.File-Upload")
            .each(function () {
              file_upload_four.push($(this).val());
            }),
            (FormInputValue.$first_name = first_name2),
            (FormInputValue.$last_name = last_name2),
            (FormInputValue.email = email2),
            (FormInputValue["Phone Number"] = phone_number),
            (FormInputValue["Company Name"] = company_name),
            (FormInputValue["Website Address (URL)"] = url_field),
            (FormInputValue["Website Goals"] = website_goals),
            (FormInputValue.Competitors = competitors_field),
            (FormInputValue["A Message for our UX + UI Design Team"] =
              team_msg_field),
            (FormInputValue["Images to Use on the Home Page Concept Design"] =
              file_upload_one.join(" , ")),
            (FormInputValue["Product CSV"] = file_upload_two.join(" , ")),
            (FormInputValue["Upload Logo Files and Brand Guidelines"] =
              file_upload_three.join(" , ")),
            (FormInputValue["File Upload"] = file_upload_four.join(" , ")),
            (FormInputValue.Free_Concept_Design_3 = !0),
            (fields =
              "Free_Concept_Design_3,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Website Goals,Competitors,A Message for our UX + UI Design Team,Images to Use on the Home Page Concept Design,Product CSV,Upload Logo Files and Brand Guidelines,File Upload");
        } else {
          var first_name2 = $this
              .parents(".audit_list")
              .find(".first_name")
              .val(),
            last_name2 = $this.parents(".audit_list").find(".last_name").val(),
            email2 = $this.parents(".audit_list").find(".email_field").val(),
            organization = $this
              .parents(".audit_list")
              .find(".organization")
              .val(),
            url2 = $this.parents(".audit_list").find(".url").val(),
            referrer = $this.parents(".audit_list").find(".referrer").val(),
            form_utm_medium = $this
              .parents(".audit_list")
              .find(".form_utm_medium")
              .val(),
            form_utm_campaign = $this
              .parents(".audit_list")
              .find(".form_utm_campaign")
              .val(),
            audit_goals_field = $this
              .parents(".audit_list")
              .find(".audit_goals_field")
              .val(),
            competitors_field = $this
              .parents(".audit_list")
              .find(".competitors_field")
              .val(),
            guidance_field = $this
              .parents(".audit_list")
              .find(".guidance_field")
              .val(),
            annual_revenue = $this
              .parents(".audit_list")
              .find(".annual_revenue .active_value")
              .attr("value"),
            shopify_support = $this
              .parents(".audit_list")
              .find(".shopify_support .active_value")
              .attr("value"),
            about_arctic_grey = $this
              .parents(".audit_list")
              .find(".about_arctic_grey .active_value")
              .attr("value"),
            additional_files = [];
          $this
            .parents(".audit_list")
            .find("input.additional-files")
            .each(function () {
              additional_files.push($(this).val());
            }),
            (FormInputValue.$first_name = first_name2),
            (FormInputValue.$last_name = last_name2),
            (FormInputValue.email = email2),
            (FormInputValue.Organization = organization),
            (FormInputValue["Which page would you like us to audit for free?"] =
              url2),
            (FormInputValue["Audit Goals"] = audit_goals_field),
            (FormInputValue.Competitors = competitors_field),
            (FormInputValue["File Upload"] = additional_files.join(" , ")),
            (FormInputValue["A Message for our UX + UI Design Team"] =
              guidance_field),
            (FormInputValue["Annual revenue volume"] = annual_revenue),
            (FormInputValue["Estimated Hours of Shopify Support per month?"] =
              shopify_support),
            (FormInputValue["How did you hear about Arctic Grey?"] =
              about_arctic_grey),
            (FormInputValue.Completed = !0),
            (FormInputValue.Free_UX_Audit_3 = !0),
            (fields =
              "Free_UX_Audit_3,$first_name,$last_name,Organization,Which page would you like us to audit for free?,Audit Goals,Competitors,File Upload,A Message for our UX + UI Design Team,Annual revenue volume,Estimated Hours of Shopify Support per month?,How did you hear about Arctic Grey?,Completed");
        }
        var klaviyoListId;
        if (
          (FormType == "Build a New Shopify Store"
            ? (klaviyoListId = "XsggfH")
            : (klaviyoListId = "SsPprz"),
          klaviyoApi(FormInputValue, FormType, type, fields, klaviyoListId),
          $this
            .parents(".audit_list")
            .find(".detail_list:not(.form_step_one)")
            .css("display", "none"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id)
            .fadeIn("1000"),
          $(".audit_form_popup").scrollTop(0),
          data_id == "final_step_content")
        ) {
          startConfetti(),
            setTimeout(function () {
              stopConfetti();
            }, 5e3);
          let files = "";
          additional_files.length > 0
            ? additional_files.forEach((url3, index) => {
                (files += `[${url3}](${url3})`),
                  index != additional_files.length - 1 && (files += ",");
              })
            : (files = "None");
          const company_url = $this
            .parents(".audit_list")
            .find(".url_field")
            .val();
          var company_name = $this
            .parents(".audit_list")
            .find(".company_name")
            .val();
          const formData = {
            firstName: first_name2,
            lastName: last_name2,
            email: email2,
            phoneNumber: phone_number,
            companyName: company_name,
            companyUrl: company_url,
            commentBody: `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}

Phone Number:
 ${phone_number}

Company Name:
 ${company_name}

Referrer:
 ${referrer}

UTM_medium:
 ${form_utm_medium}

UTM_campaign:
 ${form_utm_campaign}

Website Address (URL):
 ${company_url}
Audit Goals:
${audit_goals_field}

Competitors:
${competitors_field}

A Message for our UX + UI Design Team:
${guidance_field}
File Upload
${files}

Annual revenue volume
 ${annual_revenue}

Estimated Hours of Shopify Support per month
 ${shopify_support}

How did you hear about Arctic Grey
 ${about_arctic_grey}`,
            subject: `Free UX Audit: ${first_name2} ${last_name2} with ${company_name}`,
          };
          fetch("https://zendesk-api.onrender.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          })
            .then((res) => {})
            .catch((err) => {
              console.error(err);
            });
        }
        if ($(".build_new_store_form_audit").length) {
          var current_url = window.location.toString();
          if ($(".page_ux-audit-form").length) {
            var clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#Final-Step")
            );
            window.history.replaceState(
              {},
              document.title,
              clean_uri2 + "#Completed"
            );
          } else {
            var clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#In-Progress")
            );
            window.history.replaceState(
              {},
              document.title,
              clean_uri2 + "#Final-Step"
            );
          }
        }
      }),
      $(document).on("click", ".audit_form_step_four", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormType = $this
            .parents(".shopify_audit")
            .find(".form_type_input.active")
            .val(),
          type = $this.parents(".audit_list").find(".form_type_value").val(),
          FormInputValue = {},
          fields;
        if (
          ($(".field_error").addClass("hidden"),
          $this.parents(".audit_form_1").length)
        ) {
          var first_name2 = $this
              .parents(".audit_list")
              .find(".first_name")
              .val(),
            last_name2 = $this.parents(".audit_list").find(".last_name").val(),
            email2 = $this.parents(".audit_list").find(".email_field").val(),
            phone_number = $this
              .parents(".audit_list")
              .find(".phone_number")
              .val(),
            company_name = $this
              .parents(".audit_list")
              .find(".company_name")
              .val(),
            url_field = $this.parents(".audit_list").find(".url_field").val(),
            referrer = $this.parents(".audit_list").find(".referrer").val(),
            form_utm_medium = $this
              .parents(".audit_list")
              .find(".form_utm_medium")
              .val(),
            form_utm_campaign = $this
              .parents(".audit_list")
              .find(".form_utm_campaign")
              .val(),
            website_goals = $this
              .parents(".audit_list")
              .find(".website_goals_field")
              .val(),
            competitors_field = $this
              .parents(".audit_list")
              .find(".competitors_field")
              .val(),
            team_msg_field = $this
              .parents(".audit_list")
              .find(".team_msg_field")
              .val(),
            annual_revenue = $this
              .parents(".audit_list")
              .find(".annual_revenue_filed .active_value")
              .attr("value"),
            budget_field = $this
              .parents(".audit_list")
              .find(".budget_field .active_value")
              .attr("value"),
            about_arctic_field = $this
              .parents(".audit_list")
              .find(".about_arctic_field .active_value")
              .attr("value"),
            file_upload_one = [];
          $this
            .parents(".audit_list")
            .find("input.Home-Page-Concept-Design")
            .each(function () {
              file_upload_one.push($(this).val());
            });
          var file_upload_two = [];
          $this
            .parents(".audit_list")
            .find("input.Product-CSV")
            .each(function () {
              file_upload_two.push($(this).val());
            });
          var file_upload_three = [];
          $this
            .parents(".audit_list")
            .find("input.Upload-Logo")
            .each(function () {
              file_upload_three.push($(this).val());
            });
          var file_upload_four = [];
          $this
            .parents(".audit_list")
            .find("input.File-Upload")
            .each(function () {
              file_upload_four.push($(this).val());
            }),
            (FormInputValue.$first_name = first_name2),
            (FormInputValue.$last_name = last_name2),
            (FormInputValue.email = email2),
            (FormInputValue["Phone Number"] = phone_number),
            (FormInputValue["Company Name"] = company_name),
            (FormInputValue["Website Address (URL)"] = url_field),
            (FormInputValue["Website Goals"] = website_goals),
            (FormInputValue.Competitors = competitors_field),
            (FormInputValue["A Message for our UX + UI Design Team"] =
              team_msg_field),
            (FormInputValue["Images to Use on the Home Page Concept Design"] =
              file_upload_one.join(" , ")),
            (FormInputValue["Product CSV"] = file_upload_two.join(" , ")),
            (FormInputValue["Upload Logo Files and Brand Guidelines"] =
              file_upload_three.join(" , ")),
            (FormInputValue["File Upload"] = file_upload_four.join(" , ")),
            (FormInputValue["Annual revenue volume"] = annual_revenue),
            (FormInputValue["What is your budget for this project?"] =
              budget_field),
            (FormInputValue["How did you hear about Arctic Grey?"] =
              about_arctic_field),
            (FormInputValue.Completed = !0),
            (FormInputValue.Free_Concept_Design_4 = !0),
            (fields =
              "Free_Concept_Design_4,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Website Goals,Competitors,A Message for our UX + UI Design Team,Images to Use on the Home Page Concept Design,Product CSV,Upload Logo Files and Brand Guidelines,File Upload,Annual revenue volume,What is your budget for this project?,How did you hear about Arctic Grey?,Completed");
        }
        let homepageImages = "";
        file_upload_one.length > 0
          ? file_upload_one.forEach((url2, index) => {
              (homepageImages += `[${url2}](${url2})`),
                index != file_upload_one.length - 1 && (homepageImages += ",");
            })
          : (homepageImages = "None");
        let csvFiles = "";
        file_upload_two.length > 0
          ? file_upload_two.forEach((url2, index) => {
              (csvFiles += `[${url2}](${url2})`),
                index != file_upload_two.length - 1 && (csvFiles += ",");
            })
          : (csvFiles = "None");
        let brandFiles = "";
        file_upload_three.length > 0
          ? file_upload_three.forEach((url2, index) => {
              (brandFiles += `[${url2}](${url2})`),
                index != file_upload_three.length - 1 && (brandFiles += ",");
            })
          : (brandFiles = "None");
        let otherFiles = "";
        file_upload_four.length > 0
          ? file_upload_four.forEach((url2, index) => {
              (otherFiles += `[${url2}](${url2})`),
                index != file_upload_four.length - 1 && (otherFiles += ",");
            })
          : (otherFiles = "None");
        const formData = {
          firstName: first_name2,
          lastName: last_name2,
          email: email2,
          phoneNumber: phone_number,
          companyName: company_name,
          companyUrl: url_field,
          commentBody: `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}

Phone Number:
 ${phone_number}

Company Name:
 ${company_name}

Referrer:
 ${referrer}

UTM_medium:
 ${form_utm_medium}

UTM_campaign:
 ${form_utm_campaign}

Website Address (URL):
 ${url_field}

Website Goals:
${website_goals}

Competitors:
${competitors_field}

A Message for our UX + UI Design Team:
${team_msg_field}

Images to Use on the Home Page Concept Design
${homepageImages}

Product CSV:
 ${csvFiles}

Upload Logo Files and Brand Guidelines
 ${brandFiles}

File Upload
 ${otherFiles}

Annual revenue volume
 ${annual_revenue}

What is your budget for this project
 ${budget_field}

How did you hear about Arctic Grey
 ${about_arctic_field}`,
          subject: `Build a New Shopify Store: ${first_name2} ${last_name2} with ${company_name}`,
        };
        fetch("https://zendesk-api.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => {})
          .catch((err) => {
            console.error(err);
          });
        var klaviyoListId;
        if (
          (FormType == "Build a New Shopify Store"
            ? (klaviyoListId = "XsggfH")
            : (klaviyoListId = "SsPprz"),
          klaviyoApi(FormInputValue, FormType, type, fields, klaviyoListId),
          $this
            .parents(".audit_list")
            .find(".detail_list:not(.form_step_one)")
            .css("display", "none"),
          $this
            .parents(".audit_list")
            .find(".detail_list." + data_id)
            .fadeIn("1000"),
          $(".audit_form_popup").scrollTop(0),
          data_id == "final_step_content" &&
            (startConfetti(),
            setTimeout(function () {
              stopConfetti();
            }, 5e3)),
          $(".build_new_store_form_audit").length)
        ) {
          var current_url = window.location.toString(),
            clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#Final-Step")
            );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#Completed"
          );
        }
      });
    function klaviyoApi(data, formType, type, fields, klaviyoListId) {
      var klaviyoData = data;
      (klaviyoData.g = klaviyoListId),
        (klaviyoData.$fields = "$consent,Service,Type," + fields),
        (klaviyoData.Type = type),
        (klaviyoData.Service = formType),
        (klaviyoData.$consent = !0);
      var settings = {
        async: !0,
        crossDomain: !0,
        url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
        data: klaviyoData,
      };
      $.ajax(settings).done(function (response) {});
    }
    if ($(".page_forms-bulk-hours-quote-form").length)
      if (window.location.href.indexOf("#") > 0) {
        var email = getUrlParameter("email"),
          url = window.location.toString();
        if (url.indexOf("#") > 0 && !email)
          if (url.indexOf("#FocusMode") > 0) {
            var clean_uri = url.substring(0, url.indexOf("#FocusMode"));
            window.history.replaceState({}, document.title, clean_uri);
          } else
            url.indexOf("#started") <= 0 && window.location.assign("#started");
        if (email) {
          var hashes = window.location.href
              .slice(window.location.href.indexOf("#") + 1)
              .split("#"),
            selected_data = hashes[0].split("?email="),
            selected_form = selected_data[0],
            first_name = getUrlParameter("first_name");
          first_name &&
            ($(".first_name").val(first_name),
            $(".user_first_name").text(first_name));
          var last_name = getUrlParameter("last_name");
          last_name && $(".last_name").val(last_name);
          var user_email = email;
          $(".email_field").val(user_email),
            (selected_form == "In-Progress" ||
              selected_form == "Final-Step" ||
              selected_form == "Completed") &&
              ($(".bulk_hours_focus_mode")
                .addClass("active_popup")
                .css("display", "block"),
              $(".bulk_hours_focus_mode")
                .find(".bulk_hours_step_form")
                .css("display", "none"),
              $(".bulk_hours_focus_mode")
                .find("#" + selected_form)
                .css("display", "block"),
              $("body").addClass("overflow-hidden"),
              $(".on-off-toggle__input").prop("checked", !0),
              selected_form == "Completed" &&
                (startConfetti(),
                setTimeout(function () {
                  stopConfetti();
                }, 5e3)));
        }
      } else window.location.assign("#started");
    $(document).on("click", ".bulk_form_step_one", function () {
      var $this = $(this),
        data_id = $this.attr("data_btn_next"),
        FormType = "Bulk Hours Quote Request",
        type = "Bulk Hours Quote Request",
        FormInputValue = {};
      $(".field_error").addClass("hidden");
      var first_name2 = $this.parents(".form").find(".first_name").val(),
        last_name2 = $this.parents(".form").find(".last_name").val(),
        email2 = $this.parents(".form").find(".email_field").val(),
        phone_number = $this.parents(".form").find(".phone_number").val(),
        company_name = $this.parents(".form").find(".company_name").val(),
        url_field = $this.parents(".form").find(".url_field").val(),
        referrer = $this.parents(".form").find(".referrer").val(),
        user_browser = $this.parents("form").find(".user_browser").val(),
        ip_address = $this.parents("form").find(".ip_address").val(),
        gdpr_compliance2 = $this
          .parents("form")
          .find(".block__gdpr-compliance-form-checkbox")
          .is(":checked"),
        form_utm_medium = $this.parents("form").find(".form_utm_medium").val(),
        form_utm_campaign = $this
          .parents("form")
          .find(".form_utm_campaign")
          .val();
      $this
        .parents("form")
        .find(".block__gdpr-compliance-checkbox-error")
        .addClass("hidden");
      var email_validate =
          /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        first_last_validate = new RegExp("^[a-zA-Z ]+$");
      if (first_name2 == "")
        return (
          $this.parents("form").find(".first_name_error").removeClass("hidden"),
          !1
        );
      if (first_last_validate.test(first_name2)) {
        if (last_name2 == "")
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden"),
            !1
          );
        if (first_last_validate.test(last_name2)) {
          if (email2 == "")
            return (
              $this.parents("form").find(".email_error").removeClass("hidden"),
              !1
            );
          if (email_validate.test(email2)) {
            if (phone_number == "")
              return (
                $this
                  .parents("form")
                  .find(".phone_error")
                  .removeClass("hidden"),
                !1
              );
            if (company_name == "")
              return (
                $this
                  .parents("form")
                  .find(".organization_error")
                  .removeClass("hidden"),
                !1
              );
            if (url_field == "")
              return (
                $this.parents("form").find(".url_error").removeClass("hidden"),
                !1
              );
            if (gdpr_compliance2 == !1)
              return (
                $this
                  .parents("form")
                  .find(".block__gdpr-compliance-checkbox-error")
                  .removeClass("hidden"),
                !1
              );
          } else
            return (
              $this
                .parents("form")
                .find(".email_error")
                .removeClass("hidden")
                .text("Please enter valid Email"),
              !1
            );
        } else
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden")
              .text("Please enter valid First name"),
            !1
          );
      } else return $this.parents("form").find(".first_name_error").removeClass("hidden").text("Please enter valid First name"), !1;
      var calendly_data = $this
          .parents(".bulk_hours")
          .find(".form_call_btn")
          .attr("onclick")
          .split("Calendly.initPopupWidget({url: '"),
        data_url = calendly_data[1].split("'});return false;"),
        new_calendly_url =
          "Calendly.initPopupWidget({url: '" +
          data_url[0] +
          "&email=" +
          email2 +
          "&name=" +
          first_name2 +
          " " +
          last_name2 +
          "&a1=" +
          company_name +
          "'});return false;";
      $this
        .parents(".bulk_hours")
        .find(".form_call_btn")
        .attr("onclick", new_calendly_url),
        (FormInputValue.Bulk_Hours_Quote_Request_Step1 = !0),
        (FormInputValue.$first_name = first_name2),
        (FormInputValue.$last_name = last_name2),
        (FormInputValue.email = email2),
        (FormInputValue["Phone Number"] = phone_number),
        (FormInputValue["Company Name"] = company_name),
        (FormInputValue["Website Address (URL)"] = url_field),
        (FormInputValue.Referrer = referrer),
        (FormInputValue.UTM_medium = form_utm_medium),
        (FormInputValue.UTM_campaign = form_utm_campaign),
        (FormInputValue.Browser = user_browser),
        (FormInputValue["Ip address"] = ip_address),
        (FormInputValue.Is_from_web = !0);
      var fields =
        "Bulk_Hours_Quote_Request_Step1,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Browser,Ip address,Is_from_web,Referrer,UTM_medium,UTM_campaign";
      if (
        (bulkQuoteklaviyoApi(FormInputValue, FormType, type, fields),
        $this
          .parents(".page_bulk_hours")
          .find(".user_first_name")
          .text(first_name2),
        $this
          .parents(".page_bulk_hours")
          .find(".bulk_hours_step_form")
          .css("display", "none"),
        $this
          .parents(".page_bulk_hours")
          .find(".bulk_hours_step_form." + data_id)
          .fadeIn("1000"),
        $(".bulk_hours_focus_mode").addClass("active_popup").fadeIn("1000"),
        $("body").addClass("overflow-hidden"),
        $(".on-off-toggle__input").prop("checked", !0),
        $(".bulk_hours_focus_mode").scrollTop(0),
        $(".page_forms-bulk-hours-quote-form").length)
      ) {
        var url_email3 = getUrlParameter("email"),
          current_url = window.location.toString();
        if (url_email3) {
          var clean_uri2 = current_url.substring(
            0,
            current_url.indexOf("#started")
          );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#In-Progress"
          );
        } else if (current_url.indexOf("#FocusMode") > 0) {
          var clean_uri2 = current_url.substring(
            0,
            current_url.indexOf("#started#FocusMode")
          );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#In-Progress"
          );
        } else {
          var clean_uri2 = current_url.substring(
            0,
            current_url.indexOf("#started")
          );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#In-Progress"
          );
        }
      }
    }),
      $(document).on("click", ".bulk_form_step_two", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormType = "Bulk Hours Quote Request",
          type = "Bulk Hours Quote Request",
          FormInputValue = {};
        $(".field_error").addClass("hidden");
        var first_name2 = $this
            .parents(".page_bulk_hours")
            .find(".first_name")
            .val(),
          last_name2 = $this
            .parents(".page_bulk_hours")
            .find(".last_name")
            .val(),
          email2 = $this.parents(".page_bulk_hours").find(".email_field").val(),
          phone_number = $this
            .parents(".page_bulk_hours")
            .find(".phone_number")
            .val(),
          company_name = $this
            .parents(".page_bulk_hours")
            .find(".company_name")
            .val(),
          url_field = $this
            .parents(".page_bulk_hours")
            .find(".url_field")
            .val(),
          shopify_needs_field = $this
            .parents(".page_bulk_hours")
            .find(".shopify_needs_field")
            .val(),
          competitors_field = $this
            .parents(".page_bulk_hours")
            .find(".competitors_field")
            .val(),
          team_msg_field = $this
            .parents(".page_bulk_hours")
            .find(".team_msg_field")
            .val(),
          task_list_field = $this
            .parents(".page_bulk_hours")
            .find(".task_list_hours .active_value")
            .attr("value"),
          filetouploadtwo = [];
        $this
          .parents(".page_bulk_hours")
          .find("input.bulk-Product-CSV")
          .each(function () {
            filetouploadtwo.push($(this).val());
          }),
          (FormInputValue.Bulk_Hours_Quote_Request_Step2 = !0),
          (FormInputValue.$first_name = first_name2),
          (FormInputValue.$last_name = last_name2),
          (FormInputValue.email = email2),
          (FormInputValue["Phone Number"] = phone_number),
          (FormInputValue["Company Name"] = company_name),
          (FormInputValue["Website Address (URL)"] = url_field),
          (FormInputValue["Describe your Shopify needs"] = shopify_needs_field),
          (FormInputValue["File Upload"] = filetouploadtwo.join(" , ")),
          (FormInputValue.Competitors = competitors_field),
          (FormInputValue["A Message for our UX + UI Design Team"] =
            team_msg_field),
          (FormInputValue[
            "How many Bulk Hours do you think you're going to need?"
          ] = task_list_field);
        var fields =
          "Bulk_Hours_Quote_Request_Step2,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Describe your Shopify needs,File Upload,Competitors,A Message for our UX + UI Design Team,How many Bulk Hours do you think you're going to need?";
        if (
          (bulkQuoteklaviyoApi(FormInputValue, FormType, type, fields),
          $this
            .parents(".page_bulk_hours")
            .find(".bulk_hours_step_form")
            .css("display", "none"),
          $this
            .parents(".page_bulk_hours")
            .find(".bulk_hours_step_form." + data_id)
            .fadeIn("1000"),
          $(".bulk_hours_focus_mode").scrollTop(0),
          $(".page_forms-bulk-hours-quote-form").length)
        ) {
          var current_url = window.location.toString(),
            clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#In-Progress")
            );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#Final-Step"
          );
        }
      }),
      $(document).on("click", ".bulk_form_step_three", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormType = "Bulk Hours Quote Request",
          type = "Bulk Hours Quote Request",
          FormInputValue = {};
        $(".field_error").addClass("hidden");
        var first_name2 = $this
            .parents(".page_bulk_hours")
            .find(".first_name")
            .val(),
          last_name2 = $this
            .parents(".page_bulk_hours")
            .find(".last_name")
            .val(),
          email2 = $this.parents(".page_bulk_hours").find(".email_field").val(),
          phone_number = $this
            .parents(".page_bulk_hours")
            .find(".phone_number")
            .val(),
          company_name = $this
            .parents(".page_bulk_hours")
            .find(".company_name")
            .val(),
          url_field = $this
            .parents(".page_bulk_hours")
            .find(".url_field")
            .val(),
          referrer = $this.parents(".page_bulk_hours").find(".referrer").val(),
          form_utm_medium = $this
            .parents(".page_bulk_hours")
            .find(".form_utm_medium")
            .val(),
          form_utm_campaign = $this
            .parents(".page_bulk_hours")
            .find(".form_utm_campaign")
            .val(),
          shopify_needs_field = $this
            .parents(".page_bulk_hours")
            .find(".shopify_needs_field")
            .val(),
          competitors_field = $this
            .parents(".page_bulk_hours")
            .find(".competitors_field")
            .val(),
          team_msg_field = $this
            .parents(".page_bulk_hours")
            .find(".team_msg_field")
            .val(),
          task_list_field = $this
            .parents(".page_bulk_hours")
            .find(".task_list_hours .active_value")
            .attr("value"),
          annual_revenue = $this
            .parents(".page_bulk_hours")
            .find(".annual_revenue_filed .active_value")
            .attr("value"),
          budget_field = $this
            .parents(".page_bulk_hours")
            .find(".budget_field .active_value")
            .attr("value"),
          about_arctic_field = $this
            .parents(".page_bulk_hours")
            .find(".about_arctic_field .active_value")
            .attr("value"),
          other_arctic_field = $this
            .parents(".page_bulk_hours")
            .find(".other_textbox textarea")
            .val(),
          filetouploadtwo = [];
        $this
          .parents(".page_bulk_hours")
          .find("input.bulk-Product-CSV")
          .each(function () {
            filetouploadtwo.push($(this).val());
          }),
          (FormInputValue.Bulk_Hours_Quote_Request_Step3 = !0),
          (FormInputValue.$first_name = first_name2),
          (FormInputValue.$last_name = last_name2),
          (FormInputValue.email = email2),
          (FormInputValue["Phone Number"] = phone_number),
          (FormInputValue["Company Name"] = company_name),
          (FormInputValue["Website Address (URL)"] = url_field),
          (FormInputValue["Describe your Shopify needs"] = shopify_needs_field),
          (FormInputValue["File Upload"] = filetouploadtwo.join(" , ")),
          (FormInputValue.Competitors = competitors_field),
          (FormInputValue["A Message for our UX + UI Design Team"] =
            team_msg_field),
          (FormInputValue[
            "How many Bulk Hours do you think you're going to need?"
          ] = task_list_field),
          (FormInputValue["Annual revenue volume"] = annual_revenue),
          (FormInputValue["Estimated Hours of Shopify Support per month?"] =
            budget_field),
          (FormInputValue["How did you hear about Arctic Grey?"] =
            about_arctic_field),
          (FormInputValue.Completed = !0),
          other_arctic_field != "" &&
            (FormInputValue.Other = about_arctic_field);
        let fileUrls = "";
        filetouploadtwo.length > 0
          ? filetouploadtwo.forEach((url2, index) => {
              (fileUrls += `[${url2}](${url2})`),
                index != filetouploadtwo.length - 1 && (fileUrls += ",");
            })
          : (fileUrls = "None");
        const formData = {
          firstName: first_name2,
          lastName: last_name2,
          email: email2,
          phoneNumber: phone_number,
          companyName: company_name,
          companyUrl: url_field,
          commentBody: `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}

Phone Number:
 ${phone_number}

Company Name:
 ${company_name}

Website:
 ${url_field}

Referrer:
 ${referrer}

UTM_medium:
 ${form_utm_medium}

UTM_campaign:
 ${form_utm_campaign}

Describe your Shopify needs:
${shopify_needs_field}

File Upload:
${fileUrls}

Competitors:
${competitors_field}

A Message for our UX + UI Design Team:
${team_msg_field}

How many Bulk Hours do you think you're going to need?
${task_list_field}

Annual revenue volume:
 ${annual_revenue}

Estimated Hours of Shopify Support per month?
 ${budget_field}

How did you hear about Arctic Grey?
 ${about_arctic_field}`,
          subject: `Bulk Hours Quote Request: ${first_name2} ${last_name2} with ${company_name}`,
        };
        fetch("https://zendesk-api.onrender.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => {})
          .catch((err) => {
            console.error(err);
          });
        var fields =
          "Bulk_Hours_Quote_Request_Step3,$first_name,$last_name,Phone Number,Company Name,Website Address (URL),Describe your Shopify needs,File Upload,Competitors,A Message for our UX + UI Design Team,How many Bulk Hours do you think you're going to need?,Annual revenue volume,Estimated Hours of Shopify Support per month?,How did you hear about Arctic Grey?,Other,Completed";
        if (
          (bulkQuoteklaviyoApi(FormInputValue, FormType, type, fields),
          $this
            .parents(".page_bulk_hours")
            .find(".bulk_hours_step_form")
            .css("display", "none"),
          $this
            .parents(".page_bulk_hours")
            .find(".bulk_hours_step_form." + data_id)
            .fadeIn("1000"),
          $(".page_forms-bulk-hours-quote-form").length)
        ) {
          var current_url = window.location.toString(),
            clean_uri2 = current_url.substring(
              0,
              current_url.indexOf("#Final-Step")
            );
          window.history.replaceState(
            {},
            document.title,
            clean_uri2 + "#Completed"
          );
        }
        startConfetti(),
          setTimeout(function () {
            stopConfetti();
          }, 5e3),
          $(".bulk_hours_focus_mode").scrollTop(0);
      });
    function bulkQuoteklaviyoApi(data, formType, type, fields) {
      var klaviyoData = data;
      (klaviyoData.g = "XYKNGu"),
        (klaviyoData.$fields = "$consent,Service,Type," + fields),
        (klaviyoData.Type = type),
        (klaviyoData.Service = formType),
        (klaviyoData.$consent = !0);
      var settings = {
        async: !0,
        crossDomain: !0,
        url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
        data: klaviyoData,
      };
      $.ajax(settings).done(function (response) {});
    }
    function resizeRight() {
      let left = $(".ui-ux-slide-left ").height(),
        het = $(".ui-ux-slide-right").css("max-height", left);
    }
    $(window).resize(function () {
      resizeRight();
    }),
      $(".ui-ux-slide-left").length > 0 && resizeRight(),
      $(document).on("click", ".tabs_title", function () {
        if (
          ($(this).hasClass("change_icon") ||
            ($(".tabs_title").removeClass("change_icon"),
            $(".tabs_title").parent().find(".panel").slideUp(),
            $(this).addClass("change_icon"),
            $(this).parent().find(".panel").slideDown()),
          $(".ui-ux-slide-left").length > 0)
        ) {
          let inteval = setInterval(() => {
            resizeRight();
          }, 100);
          setTimeout(() => {
            clearInterval(inteval);
          }, 2e3);
        }
      }),
      $(document).on("click", ".on-off-toggle__input", function () {
        if ($(this).is(":checked"))
          $(".on-off-toggle__input").prop("checked", !0),
            $(".career_form_popup_mode").length &&
              ($(".career_form_popup_mode")
                .addClass("active_popup")
                .fadeIn("1000"),
              window.location.href.indexOf("#Selected") <= 0 &&
                window.location.href.indexOf("#Test-Started") <= 0 &&
                window.location.href.indexOf("#Test-Completed") <= 0 &&
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.href + "#FocusMode"
                )),
            $(".bulk_hours_focus_mode").length &&
              $(".bulk_hours_focus_mode")
                .addClass("active_popup")
                .fadeIn("1000"),
            ($(".build_new_store_form_audit").length ||
              $(".page_forms-bulk-hours-quote-form").length) &&
              window.location.href.indexOf("#In-Progress") <= 0 &&
              window.location.href.indexOf("#Final-Step") <= 0 &&
              window.location.href.indexOf("#Completed") <= 0 &&
              window.history.replaceState(
                {},
                document.title,
                window.location.href + "#FocusMode"
              ),
            $(".audit_form_popup").length &&
              $(".audit_form_popup").addClass("active_popup"),
            $(".contact_us_focus_mode").length &&
              $(".contact_us_focus_mode")
                .addClass("active_popup")
                .fadeIn("1000"),
            $("body").addClass("overflow-hidden");
        else {
          if ($(".career_form_popup_mode").length) {
            $(".career_form_popup_mode")
              .removeClass("active_popup")
              .fadeOut("1000");
            var current_url = window.location.toString();
            if (current_url.indexOf("#FocusMode") > 0) {
              var clean_uri2 = current_url.substring(
                0,
                current_url.indexOf("#FocusMode")
              );
              window.history.replaceState({}, document.title, clean_uri2);
            }
          }
          if (
            $(".build_new_store_form_audit").length ||
            $(".page_forms-bulk-hours-quote-form").length
          ) {
            var current_url = window.location.toString();
            if (current_url.indexOf("#FocusMode") > 0) {
              var clean_uri2 = current_url.substring(
                0,
                current_url.indexOf("#FocusMode")
              );
              window.history.replaceState({}, document.title, clean_uri2);
            }
          }
          $(".bulk_hours_focus_mode").length &&
            $(".bulk_hours_focus_mode")
              .removeClass("active_popup")
              .fadeOut("1000"),
            $(".audit_form_popup").length &&
              $(".audit_form_popup").removeClass("active_popup"),
            $(".contact_us_focus_mode").length &&
              $(".contact_us_focus_mode")
                .removeClass("active_popup")
                .fadeOut("1000"),
            $("body").removeClass("overflow-hidden"),
            $(".on-off-toggle__input").prop("checked", !1),
            $("#confetti-canvas").remove();
        }
      }),
      $(document).on("change", ".input_auto_fill", function () {
        var name_field = $(this).attr("name");
        $(".input_auto_fill[name='" + name_field + "']").length &&
          $(".input_auto_fill[name='" + name_field + "']").val($(this).val());
      }),
      $(document).on("change", ".form_upload_files", function (e) {
        var $this = $(this),
          parents_Ele = $this.parents(".fields"),
          fileElemName = $this.attr("name").replace(" ", "-"),
          file_length = parents_Ele.find(".user_file_name_value").length,
          thisLen = this.files.length,
          fileThis = this;
        if ($this.hasClass("PDF_file_upload")) {
          var remainLen = 3 - file_length;
          thisLen <= remainLen && thisLen <= 3
            ? Fileupload(parents_Ele, fileThis, fileElemName, $this)
            : (parents_Ele
                .find(".field_error")
                .removeClass("hidden")
                .text("You can't add more than 3 files."),
              $this.val(""));
        } else {
          var remainLen = 10 - file_length;
          thisLen <= remainLen && thisLen <= 10
            ? Fileupload(parents_Ele, fileThis, fileElemName, $this)
            : (parents_Ele
                .find(".field_error")
                .removeClass("hidden")
                .text("You can't add more than 10 files."),
              $this.val(""));
        }
        $(document).on("click", ".remove_select_value", function (e2) {
          var $this2 = $(this),
            current_file = $this2.parents(".user_file_name_value"),
            remove_file = current_file.attr("data_file_name");
          parents_Ele
            .find('input[data-filename="' + remove_file + '"]')
            .remove(),
            current_file.remove();
        });
      });
    function Fileupload(parents_Ele, fileThis, fileElemName, $this) {
      parents_Ele.find(".all_uploaded_file").removeClass("hidden"),
        parents_Ele.find(".field_error").addClass("hidden");
      for (var i2 = 0; i2 < fileThis.files.length; i2++)
        if ($this.hasClass("PDF_file_upload"))
          if ($this[0].files[i2].type == "application/pdf") {
            let fileBlock =
              '<span class="user_file_name_value" data_file_name="' +
              fileThis.files.item(i2).name +
              '"><span>' +
              fileThis.files.item(i2).name +
              '</span><span class="loader_select_value"></span><span class="remove_select_value">X</span></span>';
            parents_Ele.find(".all_uploaded_file").append(fileBlock);
            var formData = new FormData();
            formData.append("file", $this[0].files[i2]),
              $.ajax({
                url: "https://ag.secureddatasystem.com/upload",
                type: "POST",
                data: formData,
                processData: !1,
                contentType: !1,
                success: function (data) {
                  var fileName = data.data_link.file_name,
                    fileLink = data.data_link.file_url;
                  parents_Ele
                    .find(
                      '.user_file_name_value[data_file_name="' + fileName + '"]'
                    )
                    .addClass("file_upload_done file_upload_checkmark"),
                    setTimeout(() => {
                      parents_Ele
                        .find(
                          '.user_file_name_value[data_file_name="' +
                            fileName +
                            '"]'
                        )
                        .removeClass("file_upload_checkmark");
                    }, "2000");
                  var hiddenInputElem =
                    '<input type="hidden" class="' +
                    fileElemName +
                    '" data-filename="' +
                    fileName +
                    '" value="' +
                    fileLink +
                    '">';
                  parents_Ele.append(hiddenInputElem);
                },
              });
          } else
            parents_Ele
              .find(".field_error")
              .removeClass("hidden")
              .text("Only PDF files supportable.");
        else {
          let fileBlock =
            '<span class="user_file_name_value" data_file_name="' +
            fileThis.files.item(i2).name +
            '"><span>' +
            fileThis.files.item(i2).name +
            '</span><span class="loader_select_value"></span><span class="remove_select_value">X</span></span>';
          parents_Ele.find(".all_uploaded_file").append(fileBlock);
          var formData = new FormData();
          formData.append("file", $this[0].files[i2]),
            $.ajax({
              url: "https://ag.secureddatasystem.com/upload",
              type: "POST",
              data: formData,
              processData: !1,
              contentType: !1,
              success: function (data) {
                var fileName = data.data_link.file_name,
                  fileLink = data.data_link.file_url;
                parents_Ele
                  .find(
                    '.user_file_name_value[data_file_name="' + fileName + '"]'
                  )
                  .addClass("file_upload_done file_upload_checkmark"),
                  setTimeout(() => {
                    parents_Ele
                      .find(
                        '.user_file_name_value[data_file_name="' +
                          fileName +
                          '"]'
                      )
                      .removeClass("file_upload_checkmark");
                  }, "2000");
                var hiddenInputElem =
                  '<input type="hidden" class="' +
                  fileElemName +
                  '" data-filename="' +
                  fileName +
                  '" value="' +
                  fileLink +
                  '">';
                parents_Ele.append(hiddenInputElem);
              },
            });
        }
    }
    if (
      ($(window).width() > 749 &&
        $(".product_sticky_bar").length &&
        $(".product_sticky_bar .smartrr-purchase-options li span").each(
          function () {
            var value = $(this).text().replace("Every 30 Days for ", "");
            $(this).text(value);
          }
        ),
      $(document).on(
        "click",
        ".product_bulk_hours .product__modal-opener",
        function () {
          $(".product_sticky_bar").addClass("sticky_active"),
            $(".product_single_mode .deferred-media__poster").trigger("click"),
            $(".product_single_mode video")[0].play(),
            $("body").addClass("overflow-hidden");
        }
      ),
      $(document).on("click", ".product__title .review", function () {
        if ($("#yotpo-reviews-main-widget").length) {
          var target_offset =
            $("#yotpo-reviews-main-widget").offset().top - 150;
          $("html, body").stop().animate({ scrollTop: target_offset }, 1e3);
        }
      }),
      $(".page_careers_forms_section").length)
    )
      if (window.location.href.indexOf("#") > 0) {
        var user_email = getUrlParameter("email").replace(" ", "+"),
          url = window.location.toString();
        if (url.indexOf("#") > 0 && !user_email) {
          var hashes = window.location.href
            .slice(window.location.href.indexOf("?") + 1)
            .split("#");
          if (
            ($(
              ".sub_heading_dropbox .heading_dropbox[data_id='" +
                hashes[1] +
                "']"
            ).trigger("click"),
            url.indexOf("#FocusMode") > 0)
          ) {
            var clean_uri = url.substring(0, url.indexOf("#FocusMode"));
            window.history.replaceState({}, document.title, clean_uri);
          } else if (url.indexOf("#started") <= 0) {
            var clean_uri = url.substring(0, url.indexOf("#started"));
            window.history.replaceState({}, document.title, clean_uri);
          }
        }
        if (user_email) {
          var hashes = window.location.href
              .slice(window.location.href.indexOf("#") + 1)
              .split("#"),
            current_job_handle = hashes[0],
            selected_form_email = hashes[1].split("?email="),
            selected_form = selected_form_email[0],
            first_name = getUrlParameter("first_name");
          first_name != "" &&
            ($(".first_name").val(first_name),
            $(".user_first_name").text(first_name));
          var last_name = getUrlParameter("last_name");
          if (
            (last_name != "" && $(".last_name").val(last_name),
            $(".solution_assement_test").length)
          ) {
            var linkedin_url = getUrlParameter("linkedin_url");
            linkedin_url != ""
              ? ($(".linkedin_url").val(linkedin_url),
                $(".solution_assement_test").attr(
                  "href",
                  "/pages/solutions-engineer-test?email=" +
                    user_email +
                    "&first_name=" +
                    first_name +
                    "&last_name=" +
                    last_name +
                    "&linkedin_url=" +
                    linkedin_url +
                    "#solutions-engineer#Test-Started"
                ))
              : $(".solution_assement_test").attr(
                  "href",
                  "/pages/solutions-engineer-test?email=" +
                    user_email +
                    "&first_name=" +
                    first_name +
                    "&last_name=" +
                    last_name +
                    "#solutions-engineer#Test-Started"
                );
          }
          var job_select = $(".sub_heading_dropbox").find(
              ".heading_dropbox[data_id='" + current_job_handle + "']"
            ),
            job_type = $(".sub_heading_dropbox")
              .find(".heading_dropbox[data_id='" + current_job_handle + "']")
              .attr("data_form"),
            job_title = $(".sub_heading_dropbox")
              .find(".heading_dropbox[data_id='" + current_job_handle + "']")
              .attr("value");
          $(".sub_heading_dropbox")
            .find(".heading_dropbox")
            .removeClass("active_value"),
            job_select.addClass("active_value"),
            $(".sub_heading_dropbox")
              .find(".sub_heading .heading_text")
              .text(job_select.attr("value")),
            $(".email_field").val(user_email),
            job_title == "Interaction Designer (IxD)" ||
            job_title == "Ad Designer" ||
            job_title == "SEO Specialist"
              ? $(".jobtitle_article").text("an")
              : $(".jobtitle_article").text("a"),
            $(".user_job_title").text(job_title),
            $(".career_form_popup_mode")
              .addClass("active_popup")
              .fadeIn("1000"),
            $("body").addClass("overflow-hidden"),
            $(".career_form_popup_mode .popup_mode").css("display", "none"),
            $(".career_form_popup_mode").scrollTop(0),
            $(".on-off-toggle__input").prop("checked", !0),
            selected_form == "Selected"
              ? $(".career_form_popup_mode .popup_mode#" + job_type).fadeIn(
                  "1000"
                )
              : selected_form == "Test-Started"
              ? $(
                  ".career_form_popup_mode .popup_mode#" + job_type + "_test"
                ).fadeIn("1000")
              : selected_form == "Test-Completed" &&
                ($(
                  ".career_form_popup_mode .popup_mode#" +
                    job_type +
                    "_final_step"
                ).fadeIn("1000"),
                startConfetti(),
                setTimeout(function () {
                  stopConfetti();
                }, 5e3));
        }
      } else {
        var job_select = $(".sub_heading_dropbox")
          .find(".heading_dropbox.active_value")
          .attr("data_id");
        window.history.replaceState(
          {},
          document.title,
          window.location.origin + "/pages/careers#" + job_select + "#started"
        );
      }
    $(document).on("click", ".careers_form_step_one", function () {
      var $this = $(this),
        data_id = $this.attr("data_btn_next"),
        data_id_form = $this
          .parents("form")
          .find(".sub_heading_dropbox .active_value")
          .attr("data_id"),
        current_form = $this
          .parents("form")
          .find(".sub_heading_dropbox .active_value")
          .attr("data_form"),
        current_form_val = $this
          .parents("form")
          .find(".sub_heading_dropbox .active_value")
          .attr("value"),
        form_type = $this
          .parents("form")
          .find(".sub_heading_dropbox .active_value")
          .attr("data_category"),
        gdpr_compliance2 = $this
          .parents("form")
          .find(".block__gdpr-compliance-form-checkbox")
          .is(":checked");
      $this
        .parents("form")
        .find(".block__gdpr-compliance-checkbox-error")
        .addClass("hidden"),
        $(".field_error").addClass("hidden");
      var FormInputValue = {},
        email_validate =
          /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
        first_last_validate = new RegExp("^[a-zA-Z ]+$");
      FormInputValue.Careers_Step_1 = !0;
      var first_name2 = $this.parents("form").find(".first_name").val(),
        last_name2 = $this.parents("form").find(".last_name").val(),
        email2 = $this.parents("form").find(".email_field").val(),
        linkedin_url2 = $this.parents("form").find(".linkedin_url").val(),
        referrer = $this.parents("form").find(".referrer").val(),
        user_browser = $this.parents("form").find(".user_browser").val(),
        ip_address = $this.parents("form").find(".ip_address").val();
      if (first_name2 == "")
        return (
          $this.parents("form").find(".first_name_error").removeClass("hidden"),
          !1
        );
      if (first_last_validate.test(first_name2)) {
        if (last_name2 == "")
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden"),
            !1
          );
        if (first_last_validate.test(last_name2)) {
          if (email2 == "")
            return (
              $this
                .parents("form")
                .find(".email_error")
                .removeClass("hidden")
                .text("Please fill this field."),
              !1
            );
          if (email_validate.test(email2)) {
            if (linkedin_url2 == "")
              return (
                $this
                  .parents("form")
                  .find(".linkedin_error")
                  .removeClass("hidden")
                  .text("Please fill this field."),
                !1
              );
            if (gdpr_compliance2 == !1)
              return (
                $this
                  .parents(".form")
                  .find(".block__gdpr-compliance-checkbox-error")
                  .removeClass("hidden"),
                !1
              );
          } else
            return (
              $this
                .parents("form")
                .find(".email_error")
                .removeClass("hidden")
                .text("Please enter valid email."),
              !1
            );
        } else
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden")
              .text("Please enter valid Last name"),
            !1
          );
      } else return $this.parents("form").find(".first_name_error").removeClass("hidden").text("Please enter valid First name"), !1;
      const formData = {
        commentBody: `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}
LinkedIn URL:
 ${linkedin_url2}

Which career path sets you up for A+ performance?
 ${current_form_val}

`,
        subject: `Arctic Grey Careers: ${current_form_val} Application from ${first_name2} ${last_name2}`,
        firstName: first_name2,
        lastName: last_name2,
        email: email2,
      };
      fetch("https://zendesk-api.onrender.com/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => {})
        .catch((err) => {
          console.error(err);
        }),
        (FormInputValue.$first_name = first_name2),
        (FormInputValue.$last_name = last_name2),
        (FormInputValue.email = email2),
        (FormInputValue["LinkedIn URL"] = linkedin_url2),
        (FormInputValue["Which career path sets you up for A+ performance?"] =
          current_form_val),
        (FormInputValue.Referrer = referrer),
        (FormInputValue.Browser = user_browser),
        (FormInputValue["Ip address"] = ip_address),
        (FormInputValue.Career_Category = form_type),
        (FormInputValue.Career_Url = data_id_form);
      var fields =
        "Careers_Step_1,$first_name,$last_name,LinkedIn URL,Which career path sets you up for A+ performance?,Browser,Ip address,Career_Category,Career_Url,Referrer";
      careersklaviyoApi(FormInputValue, current_form_val, fields),
        current_form_val == "Interaction Designer (IxD)" ||
        current_form_val == "Ad Designer" ||
        current_form_val == "SEO Specialist"
          ? $(".jobtitle_article").text("an")
          : $(".jobtitle_article").text("a"),
        $(".user_job_title").text(current_form_val),
        $(".user_first_name").text(first_name2),
        $(".career_form_popup_mode").addClass("active_popup").fadeIn("1000"),
        $("body").addClass("overflow-hidden"),
        $(".career_form_popup_mode .popup_mode").css("display", "none"),
        $(
          ".career_form_popup_mode .popup_mode." + data_id + "#" + current_form
        ).fadeIn("1000"),
        $(".career_form_popup_mode").scrollTop(0),
        $(".on-off-toggle__input").prop("checked", !0);
      var current_url = window.location.toString();
      if (current_url.indexOf("#FocusMode") > 0) {
        var clean_uri2 = current_url.substring(
          0,
          current_url.indexOf("#started#FocusMode")
        );
        window.history.replaceState(
          {},
          document.title,
          clean_uri2 + "#Selected"
        );
      } else {
        var clean_uri2 = current_url.substring(
          0,
          current_url.indexOf("#started")
        );
        window.history.replaceState(
          {},
          document.title,
          clean_uri2 + "#Selected"
        );
      }
      $(".solution_assement_test").length &&
        $(".solution_assement_test").attr(
          "href",
          "/pages/solutions-engineer-test?email=" +
            email2 +
            "&first_name=" +
            first_name2 +
            "&last_name=" +
            last_name2 +
            "&linkedin_url=" +
            linkedin_url2 +
            "#solutions-engineer#Test-Started"
        );
    }),
      $(document).on("click", ".careers_form_step_two", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          FormInputValue = {};
        $(".field_error").addClass("hidden"),
          (FormInputValue.Careers_Step_2 = !0);
        var data_id_form = $this
            .parents("form")
            .find(".sub_heading_dropbox .active_value")
            .attr("data_id"),
          current_form = $this
            .parents(".page_careers_forms")
            .find(".sub_heading_dropbox .active_value")
            .attr("data_form"),
          current_form_val = $this
            .parents(".career_form_popup_mode")
            .find(".sub_heading_dropbox .active_value")
            .attr("value"),
          first_name2 = $this
            .parents(".career_form_popup_mode")
            .find(".first_name")
            .val(),
          last_name2 = $this
            .parents(".career_form_popup_mode")
            .find(".last_name")
            .val(),
          email2 = $this
            .parents(".career_form_popup_mode")
            .find(".email_field")
            .val(),
          linkedin_url2 = $this
            .parents(".career_form_popup_mode")
            .find(".linkedin_url")
            .val(),
          shopify_experiance = $this
            .parents("form")
            .find(".shopify_experience_field:checked")
            .val(),
          shopify_plus_experiance = $this
            .parents("form")
            .find(".shopify_plus_experience_field:checked")
            .val(),
          remove_work = $this
            .parents("form")
            .find(".remote_settings_field:checked")
            .val(),
          slack_work = $this
            .parents("form")
            .find(".slack_work_field:checked")
            .val(),
          monday_work = $this
            .parents("form")
            .find(".monday_work_field:checked")
            .val(),
          timedoctor_work = $this
            .parents("form")
            .find(".timedoctor_work_field:checked")
            .val(),
          week_work = $this
            .parents("form")
            .find(".week_work_field:checked")
            .val(),
          multiple_work = $this
            .parents("form")
            .find(".multiple_work_field:checked")
            .val(),
          comfortable_work = $this
            .parents("form")
            .find(".comfortable_work_field:checked")
            .val(),
          describe_work = $this
            .parents("form")
            .find(".describe_work_field")
            .val(),
          portfolio = $this.parents("form").find(".portfolio_field").val(),
          annaul_salary = $this
            .parents("form")
            .find(".annaul_salary_field")
            .val(),
          part_of_agency = $this
            .parents("form")
            .find(".part_of_agency_field:checked")
            .val(),
          hourly_rate = $this.parents("form").find(".hourly_rate_field").val(),
          form_upload = [];
        $this
          .parents("form")
          .find("input.CV")
          .each(function () {
            form_upload.push($(this).val());
          }),
          (FormInputValue.$first_name = first_name2),
          (FormInputValue.$last_name = last_name2),
          (FormInputValue.email = email2),
          (FormInputValue["LinkedIn URL"] = linkedin_url2),
          (FormInputValue["Which career path sets you up for A+ performance?"] =
            current_form_val),
          (FormInputValue["How many years of Shopify Experience do you have?"] =
            shopify_experiance),
          (FormInputValue[
            "How many years of Shopify Plus Experience do you have?"
          ] = shopify_plus_experiance),
          (FormInputValue["Are you comfortable working in a remote setting?"] =
            remove_work),
          (FormInputValue["Have you worked with slack.com?"] = slack_work),
          (FormInputValue["Have you worked with monday.com?"] = monday_work),
          (FormInputValue["Have you worked with timedoctor.com?"] =
            timedoctor_work),
          (FormInputValue["Are you able to work 40 Hours Per Week?"] =
            week_work),
          (FormInputValue["Please describe your skills and experience."] =
            describe_work),
          (FormInputValue["Upload your CV"] = form_upload.join(" , ")),
          (FormInputValue["Have a public link or portfolio URL to share?"] =
            portfolio),
          $this.parents("form").find(".hourly_rate_field").length &&
            (FormInputValue["What is your preferred hourly rate in USD?"] =
              Shopify2.formatMoney(hourly_rate * 100, "") + " USD"),
          $this.parents("form").find(".multiple_work_field").length &&
            (FormInputValue[
              "Do you feel comfortable working on multiple Shopify Plus stores that generate over $20M per year?"
            ] = multiple_work),
          $this.parents("form").find(".comfortable_work_field").length &&
            (FormInputValue[
              "Do you feel comfortable on Video Conferences with clients and team members?"
            ] = comfortable_work),
          $this.parents("form").find(".annaul_salary_field").length &&
            (FormInputValue["What is your preferred annual salary?"] =
              Shopify2.formatMoney(annaul_salary * 100, "") + " USD"),
          $this.parents("form").find(".part_of_agency_field").length &&
            (FormInputValue["Are you an individual or part of an agency?"] =
              part_of_agency);
        var fields =
          "Careers_Step_2,$first_name,$last_name,LinkedIn URL,Which career path sets you up for A+ performance?,How many years of Shopify Experience do you have?,How many years of Shopify Plus Experience do you have?,Are you comfortable working in a remote setting?,Have you worked with slack.com?,Have you worked with monday.com?,Have you worked with timedoctor.com?,Are you able to work 40 Hours Per Week?,Do you feel comfortable working on multiple Shopify Plus stores that generate over $20M per year?,Do you feel comfortable on Video Conferences with clients and team members?,Please describe your skills and experience.,Upload your CV,Have a public link or portfolio URL to share?,What is your preferred annual salary?,Are you an individual or part of an agency?,What is your preferred hourly rate in USD?";
        careersklaviyoApi(FormInputValue, current_form_val, fields),
          $(".career_form_popup_mode .popup_mode").css("display", "none"),
          $(
            ".career_form_popup_mode .popup_mode." +
              data_id +
              "#" +
              current_form +
              "_test"
          ).fadeIn("1000"),
          $(".career_form_popup_mode").scrollTop(0);
        var current_url = window.location.toString(),
          clean_uri2 = current_url.substring(
            0,
            current_url.indexOf("#Selected")
          );
        window.history.replaceState(
          {},
          document.title,
          clean_uri2 + "#Test-Started"
        );
      }),
      $(document).on("click", ".careers_form_step_three", function () {
        var $this = $(this),
          data_id = $this.attr("data_btn_next"),
          current_form = $this
            .parents(".page_careers_forms")
            .find(".sub_heading_dropbox .active_value")
            .attr("data_form"),
          current_form_val = $this
            .parents(".career_form_popup_mode")
            .find(".sub_heading_dropbox .active_value")
            .attr("value");
        $(".field_error").addClass("hidden");
        var FormInputValue = {},
          email_validate =
            /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
          first_last_validate = new RegExp("^[a-zA-Z ]+$");
        FormInputValue.Careers_Step_3 = !0;
        var first_name2 = $this
            .parents(".career_form_popup_mode")
            .find(".first_name")
            .val(),
          last_name2 = $this
            .parents(".career_form_popup_mode")
            .find(".last_name")
            .val(),
          email2 = $this
            .parents(".career_form_popup_mode")
            .find(".email_field")
            .val(),
          linkedin_url2 = $this
            .parents(".career_form_popup_mode")
            .find(".linkedin_url")
            .val(),
          referrer = $this
            .parents(".career_form_popup_mode")
            .find(".referrer")
            .val(),
          form_utm_medium = $this
            .parents(".career_form_popup_mode")
            .find(".form_utm_medium")
            .val(),
          form_utm_campaign = $this
            .parents(".career_form_popup_mode")
            .find(".form_utm_campaign")
            .val(),
          shopify_experiance = $this
            .parents(".career_form_popup_mode")
            .find(".shopify_experience_field:checked")
            .val(),
          shopify_plus_experiance = $this
            .parents(".career_form_popup_mode")
            .find(".shopify_plus_experience_field:checked")
            .val(),
          remove_work = $this
            .parents(".career_form_popup_mode")
            .find(".remote_settings_field:checked")
            .val(),
          slack_work = $this
            .parents(".career_form_popup_mode")
            .find(".slack_work_field:checked")
            .val(),
          monday_work = $this
            .parents(".career_form_popup_mode")
            .find(".monday_work_field:checked")
            .val(),
          timedoctor_work = $this
            .parents(".career_form_popup_mode")
            .find(".timedoctor_work_field:checked")
            .val(),
          week_work = $this
            .parents(".career_form_popup_mode")
            .find(".week_work_field:checked")
            .val(),
          multiple_work = $this
            .parents(".career_form_popup_mode")
            .find(".multiple_work_field:checked")
            .val(),
          comfortable_work = $this
            .parents(".career_form_popup_mode")
            .find(".comfortable_work_field:checked")
            .val(),
          describe_work = $this
            .parents(".career_form_popup_mode")
            .find(".describe_work_field")
            .val(),
          portfolio = $this
            .parents(".career_form_popup_mode")
            .find(".portfolio_field")
            .val(),
          annaul_salary = $this
            .parents(".career_form_popup_mode")
            .find(".annaul_salary_field")
            .val(),
          video_field = $this.parents("form").find(".video_field").val(),
          leadership = $this.parents("form").find(".leadership_field").val(),
          hourly_rate = $this.parents("form").find(".hourly_rate_field").val(),
          part_of_agency = $this
            .parents("form")
            .find(".part_of_agency_field:checked")
            .val(),
          shopify_test = $this
            .parents("form")
            .find(".shopify_test_field")
            .val(),
          store_password = $this
            .parents("form")
            .find(".store_password_field")
            .val(),
          design_test = $this.parents("form").find(".design_test_field").val(),
          quality_test = $this
            .parents("form")
            .find(".quality_test_field")
            .val(),
          progress_report = $this
            .parents("form")
            .find(".progress_report_field")
            .val(),
          work_flow = $this.parents("form").find(".work_flow_test_field").val(),
          form_upload = [];
        if (
          ($this
            .parents("form")
            .find("input.CV")
            .each(function () {
              form_upload.push($(this).val());
            }),
          first_name2 == "")
        )
          return (
            $this
              .parents("form")
              .find(".first_name_error")
              .removeClass("hidden")
              .text("Please fill this field."),
            !1
          );
        if (first_last_validate.test(first_name2)) {
          if (last_name2 == "")
            return (
              $this
                .parents("form")
                .find(".last_name_error")
                .removeClass("hidden")
                .text("Please fill this field."),
              !1
            );
          if (first_last_validate.test(last_name2)) {
            if (email2 == "")
              return (
                $this
                  .parents("form")
                  .find(".email_error")
                  .removeClass("hidden")
                  .text("Please fill this field."),
                !1
              );
            if (email_validate.test(email2)) {
              if (linkedin_url2 == "")
                return (
                  $this
                    .parents("form")
                    .find(".linkedin_url_error")
                    .removeClass("hidden")
                    .text("Please fill this field."),
                  !1
                );
            } else
              return (
                $this
                  .parents("form")
                  .find(".email_error")
                  .removeClass("hidden")
                  .text("Please enter valid email."),
                !1
              );
          } else
            return (
              $this
                .parents("form")
                .find(".last_name_error")
                .removeClass("hidden")
                .text("Please enter valid Last name"),
              !1
            );
        } else return $this.parents("form").find(".first_name_error").removeClass("hidden").text("Please enter valid First name"), !1;
        if (
          $this.parents("form").find(".shopify_test_field").length &&
          shopify_test == ""
        )
          return (
            $this
              .parents("form")
              .find(".shopify_test_error")
              .removeClass("hidden"),
            !1
          );
        if (
          ($this.parents("form").find(".design_test_field").length &&
            design_test == "") ||
          ($this.parents("form").find(".quality_test_field").length &&
            quality_test == "")
        )
          return (
            $this
              .parents("form")
              .find(".design_test_error")
              .removeClass("hidden"),
            !1
          );
        if (
          $this.parents("form").find(".work_flow_test_field").length &&
          work_flow == ""
        )
          return (
            $this
              .parents("form")
              .find(".work_flow_test_error")
              .removeClass("hidden"),
            !1
          );
        if (
          $this.parents("form").find(".progress_report_field").length &&
          progress_report == ""
        )
          return (
            $this
              .parents("form")
              .find(".store_password_error")
              .removeClass("hidden"),
            !1
          );
        if (
          $this.parents("form").find(".hourly_rate_field").length &&
          hourly_rate == ""
        )
          return (
            $this
              .parents("form")
              .find(".hourly_rate_error")
              .removeClass("hidden"),
            !1
          );
        if (
          $this.parents("form").find(".video_field").length &&
          video_field == ""
        )
          return (
            $this.parents("form").find(".video_error").removeClass("hidden"), !1
          );
        let commentBody = `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}
LinkedIn URL:
 ${linkedin_url2}

Referrer:
 ${referrer}

UTM_medium:
 ${form_utm_medium}

UTM_campaign:
 ${form_utm_campaign}

Which career path sets you up for A+ performance?
 ${current_form_val}

How many years of Shopify Experience do you have?
${shopify_experiance}

How many years of Shopify Plus Experience do you have?
${shopify_plus_experiance}

Are you comfortable working in a remote setting?
${remove_work}

Have you worked with slack.com?
${slack_work}

Have you worked with monday.com?
${monday_work}

Have you worked with timedoctor.com?
${timedoctor_work}

Please describe your skills and experience:
${describe_work}

Upload your CV
${form_upload.join(" , ")}

Have a public link or portfolio URL to share?
${portfolio}

Message to Arctic Grey leadership:
${leadership}

`;
        (FormInputValue.$first_name = first_name2),
          (FormInputValue.$last_name = last_name2),
          (FormInputValue.email = email2),
          (FormInputValue["LinkedIn URL"] = linkedin_url2),
          (FormInputValue.Referrer = referrer),
          (FormInputValue.UTM_medium = form_utm_medium),
          (FormInputValue.UTM_campaign = form_utm_campaign),
          (FormInputValue["Which career path sets you up for A+ performance?"] =
            current_form_val),
          (FormInputValue["How many years of Shopify Experience do you have?"] =
            shopify_experiance),
          (FormInputValue[
            "How many years of Shopify Plus Experience do you have?"
          ] = shopify_plus_experiance),
          (FormInputValue["Are you comfortable working in a remote setting?"] =
            remove_work),
          (FormInputValue["Have you worked with slack.com?"] = slack_work),
          (FormInputValue["Have you worked with monday.com?"] = monday_work),
          (FormInputValue["Have you worked with timedoctor.com?"] =
            timedoctor_work),
          (FormInputValue["Are you able to work 40 Hours Per Week?"] =
            week_work),
          (FormInputValue["Please describe your skills and experience."] =
            describe_work),
          (FormInputValue["Upload your CV"] = form_upload.join(" , ")),
          (FormInputValue["Have a public link or portfolio URL to share?"] =
            portfolio),
          (FormInputValue["Message to Arctic Grey leadership"] = leadership),
          (FormInputValue.Completed = !0),
          $this.parents("form").find(".video_field").length &&
            ((FormInputValue["Introduction Video URL"] = video_field),
            (commentBody += `Introduction Video URL:
${video_field}

`)),
          $this.parents("form").find(".work_flow_test_field").length &&
            ((FormInputValue["Workflow URL"] = work_flow),
            (commentBody += `Workflow URL:
${work_flow}

`)),
          $this.parents("form").find(".progress_report_field").length &&
            ((FormInputValue["Progress Report URL"] = progress_report),
            (commentBody += `Progress Report URL:
${progress_report}

`)),
          $this.parents("form").find(".design_test_field").length &&
            ((FormInputValue["Design Test Figma URL"] = design_test),
            (commentBody += `Design Test Figma URL:
${design_test}

`)),
          $this.parents("form").find(".quality_test_field").length &&
            ((FormInputValue["Quality Assurance Evaluation Report URL"] =
              quality_test),
            (commentBody += `Quality Assurance Evaluation Report URL:
${quality_test}

`)),
          $this.parents("form").find(".hourly_rate_field").length &&
            ((FormInputValue["What is your preferred hourly rate in USD?"] =
              Shopify2.formatMoney(hourly_rate * 100, "") + " USD"),
            (commentBody += `What is your preferred hourly rate in USD?
${Shopify2.formatMoney(hourly_rate * 100, "") + " USD"}

`)),
          $this.parents("form").find(".annaul_salary_field").length &&
            ((FormInputValue["What is your preferred annual salary?"] =
              annaul_salary),
            (commentBody += `What is your preferred annual salary?:
${annaul_salary}

`)),
          $this.parents("form").find(".comfortable_work_field").length &&
            ((FormInputValue[
              "Do you feel comfortable on Video Conferences with clients and team members?"
            ] = comfortable_work),
            (commentBody += `Do you feel comfortable on Video Conferences with clients and team members?
${comfortable_work}

`)),
          $this.parents("form").find(".part_of_agency_field").length &&
            ((FormInputValue["Are you an individual or part of an agency?"] =
              part_of_agency),
            (commentBody += `Are you an individual or part of an agency?
${part_of_agency}

`)),
          $this.parents("form").find(".multiple_work_field").length &&
            ((FormInputValue[
              "Do you feel comfortable working on multiple Shopify Plus stores that generate over $20M per year?"
            ] = multiple_work),
            (commentBody += `Do you feel comfortable working on multiple Shopify Plus stores that generate over $20M per year?
${multiple_work}

`)),
          $this.parents("form").find(".shopify_test_field").length &&
            ((FormInputValue["Shopify Test URL"] = shopify_test),
            (commentBody += `Shopify Test URL
${shopify_test}

`)),
          $this.parents("form").find(".store_password_field").length &&
            ((FormInputValue["Password if the URL is password protected"] =
              store_password),
            (commentBody += `Password if the URL is password protected:
${store_password}

`));
        var fields =
          "Careers_Step_3,$first_name,$last_name,LinkedIn URL,Referrer,UTM_medium,UTM_campaign,Which career path sets you up for A+ performance?,How many years of Shopify Experience do you have?,How many years of Shopify Plus Experience do you have?,Are you comfortable working in a remote setting?,Have you worked with slack.com?,Have you worked with monday.com?,Have you worked with timedoctor.com?,Are you able to work 40 Hours Per Week?,Do you feel comfortable working on multiple Shopify Plus stores that generate over $20M per year?,Do you feel comfortable on Video Conferences with clients and team members?,Please describe your skills and experience.,Upload your CV,Have a public link or portfolio URL to share?,What is your preferred annual salary?,Are you an individual or part of an agency?,What is your preferred hourly rate in USD?,Shopify Test URL,Password if the URL is password protected,Design Test Figma URL,Quality Assurance Evaluation Report URL,Workflow URL,Progress Report URL,Introduction Video URL,Message to Arctic Grey leadership,Completed";
        careersklaviyoApi(FormInputValue, current_form_val, fields),
          $(".career_form_popup_mode .popup_mode").css("display", "none"),
          $(
            ".career_form_popup_mode .popup_mode." +
              data_id +
              "#" +
              current_form +
              "_final_step"
          ).fadeIn("1000"),
          $(".career_form_popup_mode").scrollTop(0);
        var current_url = window.location.toString(),
          clean_uri2 = current_url.substring(
            0,
            current_url.indexOf("#Test-Started")
          );
        window.history.replaceState(
          {},
          document.title,
          clean_uri2 + "#Test-Completed"
        ),
          startConfetti(),
          setTimeout(function () {
            stopConfetti();
          }, 5e3);
        const formData = {
          commentBody,
          subject: `Arctic Grey Careers: ${current_form_val} Application from ${first_name2} ${last_name2}`,
          firstName: first_name2,
          lastName: last_name2,
          email: email2,
        };
        fetch("https://zendesk-api.onrender.com/careers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => {})
          .catch((err) => {
            console.error(err);
          });
      });
    function careersklaviyoApi(data, formType, fields) {
      var klaviyoData = data;
      (klaviyoData.g = "RvBuDW"),
        (klaviyoData.$fields = "$consent,Service," + fields),
        (klaviyoData.Service = formType),
        (klaviyoData.$consent = !0);
      var settings = {
        async: !0,
        crossDomain: !0,
        url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
        data: klaviyoData,
      };
      $.ajax(settings).done(function (response) {});
    }
    $(document).on("click", ".js_form_contact_close", function () {
      $(".contact_us_focus_mode").removeClass("active_popup").fadeOut("1000"),
        $("body").removeClass("overflow-hidden"),
        $("#confetti-canvas").remove();
    }),
      $(document).on("click", ".contact_form_step_one", function () {
        var $this = $(this),
          next_form_id = $this.attr("data_btn_next");
        $(".field_error").addClass("hidden"),
          $this
            .parents("form")
            .find(".block__gdpr-compliance-checkbox-error")
            .addClass("hidden");
        var FormInputValue = {},
          first_name2 = $this.parents("form").find(".first_name").val(),
          last_name2 = $this.parents("form").find(".last_name").val(),
          email2 = $this.parents("form").find(".email_field").val(),
          phone_number = $this.parents("form").find(".phone_number").val(),
          company_name = $this.parents("form").find(".company_name").val(),
          web_address = $this.parents("form").find(".url_field").val(),
          msg_field = $this.parents("form").find(".msg_field").val(),
          about_company = $this
            .parents("form")
            .find(".heading_dropbox.active_value")
            .attr("value"),
          other_arctic_field = $this
            .parents("form")
            .find(".other_textbox textarea")
            .val(),
          referrer = $this.parents(".form").find(".referrer").val(),
          form_utm_medium = $this
            .parents(".form")
            .find(".form_utm_medium")
            .val(),
          form_utm_campaign = $this
            .parents(".form")
            .find(".form_utm_campaign")
            .val();
        if (first_name2 == "")
          return (
            $this
              .parents("form")
              .find(".first_name_error")
              .removeClass("hidden"),
            !1
          );
        if (last_name2 == "")
          return (
            $this
              .parents("form")
              .find(".last_name_error")
              .removeClass("hidden"),
            !1
          );
        if (email2 == "")
          return (
            $this.parents("form").find(".email_error").removeClass("hidden"), !1
          );
        if (phone_number == "")
          return (
            $this.parents("form").find(".phone_error").removeClass("hidden"), !1
          );
        if (company_name == "")
          return (
            $this
              .parents("form")
              .find(".organization_error")
              .removeClass("hidden"),
            !1
          );
        if (web_address == "")
          return (
            $this.parents("form").find(".url_error").removeClass("hidden"), !1
          );
        if (msg_field == "")
          return (
            $this.parents("form").find(".msg_error").removeClass("hidden"), !1
          );
        if (gdpr_compliance == !1)
          return (
            $this
              .parents("form")
              .find(".block__gdpr-compliance-checkbox-error")
              .removeClass("hidden"),
            !1
          );
        const formData = {
          firstName: first_name2,
          lastName: last_name2,
          email: email2,
          phoneNumber: phone_number,
          companyName: company_name,
          companyUrl: web_address,
          commentBody: `Name:
 ${first_name2} ${last_name2}

Email:
 ${email2}

Phone Number:
 ${phone_number}

Company Name:
 ${company_name}

Website Address (URL):
 ${web_address}

message:
${msg_field}

Referrer:
 ${referrer}

UTM_medium:
 ${form_utm_medium}

UTM_campaign:
 ${form_utm_campaign}

How did you hear about Arctic Grey?
 ${about_company}
`,
          subject: `Contact Form from ${first_name2} ${last_name2} with ${company_name}`,
        };
        fetch("https://zendesk-api.onrender.com/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
          .then((res) => {})
          .catch((err) => {
            console.error(err);
          });
        var calendly_data = $this
            .parents(".contact_us_forms")
            .find(".form_call_btn")
            .attr("onclick")
            .split("Calendly.initPopupWidget({url: '"),
          data_url = calendly_data[1].split("'});return false;"),
          new_calendly_url =
            "Calendly.initPopupWidget({url: '" +
            data_url[0] +
            "&email=" +
            email2 +
            "&name=" +
            first_name2 +
            " " +
            last_name2 +
            "&a1=" +
            company_name +
            "'});return false;";
        $this
          .parents(".contact_us_forms")
          .find(".form_call_btn")
          .attr("onclick", new_calendly_url),
          (FormInputValue.$first_name = first_name2),
          (FormInputValue.$last_name = last_name2),
          (FormInputValue.email = email2),
          (FormInputValue["Phone Number"] = phone_number),
          (FormInputValue["Company Name"] = company_name),
          (FormInputValue["Website Address (URL)"] = web_address),
          (FormInputValue.Message = msg_field),
          (FormInputValue["How did you hear about Arctic Grey?"] =
            about_company),
          (FormInputValue.Referrer = referrer),
          (FormInputValue.UTM_medium = form_utm_medium),
          (FormInputValue.UTM_campaign = form_utm_campaign),
          (FormInputValue.Contact_us_completed = !0),
          other_arctic_field != "" &&
            (FormInputValue.Other = other_arctic_field),
          (FormInputValue.g = "V8qQLA"),
          (FormInputValue.$fields =
            "$consent,$first_name,$last_name,email,Phone Number,Company Name,Website Address (URL),Message,How did you hear about Arctic Grey?,Other,Referrer,Contact_us_completed"),
          (FormInputValue.$consent = !0);
        var settings = {
          async: !0,
          crossDomain: !0,
          url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
          method: "POST",
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
          },
          data: FormInputValue,
        };
        $.ajax(settings).done(function (response) {}),
          window.location.assign("#completed"),
          $(".user_first_name").text(first_name2),
          $(".contact_us_focus_mode").addClass("active_popup").fadeIn("1000"),
          $(".contact_us_focus_mode .popup_mode").css("display", "none"),
          $(".contact_us_focus_mode .popup_mode." + next_form_id).fadeIn(
            "1000"
          ),
          $("body").addClass("overflow-hidden"),
          $(".contact_us_focus_mode").scrollTop(0),
          startConfetti(),
          setTimeout(function () {
            stopConfetti();
          }, 5e3);
      }),
      $(".about_logo_slider").each(function () {
        var $this = $(this);
        $this.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: !0,
          adaptiveHeight: !0,
          autoplay: !0,
          autoplaySpeed: 3e3,
          arrows: !1,
          draggable: !1,
          fade: !0,
        });
      }),
      $(".form_upload_files").bind("dragover", function () {
        $(this).parents(".form_files").addClass("drag-over"),
          $(this)
            .parents(".form_files")
            .find(".image_picker")
            .text("Drop Files");
      }),
      $(".form_upload_files").bind("dragleave", function () {
        $(this).parents(".form_files").removeClass("drag-over"),
          $(this)
            .parents(".form_files")
            .find(".image_picker")
            .text("Choose files or drag here");
      }),
      $(".marquee_solution").length &&
        $(".marquee_solution").marquee({
          direction: "left",
          duration: 3e4,
          delayBeforeStart: 0,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(".global_team_one").length &&
        $(".global_team_one").marquee({
          direction: "left",
          duration: 7e4,
          delayBeforeStart: 0,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(".global_team_two").length &&
        $(".global_team_two").marquee({
          direction: "right",
          duration: 7e4,
          delayBeforeStart: 0,
          gap: 0,
          duplicated: !0,
          startVisible: !0,
        }),
      $(".global_team_three").length &&
        $(".global_team_three").marquee({
          direction: "left",
          duration: 11e4,
          delayBeforeStart: 3e3,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        }),
      $(".guidance_grid_block").length &&
        $(".guidance_grid_block").marquee({
          direction: "left",
          duration: 8e4,
          delayBeforeStart: 0,
          duplicated: !0,
          gap: 0,
          startVisible: !0,
        });
    for (
      var cartproductRangeSlider = document.getElementsByClassName(
          "cart_product_rangebar"
        ),
        i = 0;
      i < cartproductRangeSlider.length;
      i++
    )
      "ontouchstart" in window || navigator.maxTouchPoints
        ? (cartproductRangeSlider[i].addEventListener(
            "input",
            cartrangeSliderOnInput
          ),
          cartproductRangeSlider[i].addEventListener(
            "touchend",
            cartrangeSliderOnChange
          ))
        : (cartproductRangeSlider[i].addEventListener(
            "input",
            cartrangeSliderOnInput
          ),
          cartproductRangeSlider[i].addEventListener(
            "mouseup",
            cartrangeSliderOnChange
          ));
    $(document).on("change", ".cart_subscription_input", function (e) {
      var $this = $(this),
        input_data = $this.attr("data_id"),
        current_val = parseInt($(".cart_product_rangebar").val());
      $(".cart_subscription_input").parents("li").removeClass("active"),
        $this.parents("li").addClass("active"),
        current_val > 4
          ? ($(".cart-item__details .price_regular").removeClass("hidden"),
            $(".cart-item__details .price_discount_container").removeClass(
              "hidden"
            ))
          : (input_data == "cart-subscribe-save"
              ? $(".cart-item__details .price_discount_container").removeClass(
                  "hidden"
                )
              : $(".cart-item__details .price_discount_container").addClass(
                  "hidden"
                ),
            $(".cart-item__details .price_regular").addClass("hidden")),
        $(".cart_subscription_input[data_id='" + input_data + "']").trigger(
          "click"
        ),
        input_data == "cart-subscribe-save"
          ? (setTimeout(function () {
              startConfetti(),
                setTimeout(function () {
                  stopConfetti();
                }, 5e3);
            }, 3e3),
            $(".cart_subcription_content_tool").removeClass("hidden"),
            $(".cart_product_subcription .one_time_purchse").addClass("hidden"),
            $(
              ".cart_product_subcription .monthly_subscription_note"
            ).removeClass("hidden"),
            $(".subscription_toggle_box").addClass("active"),
            $(".on_off_toggle__input").attr("checked", !0))
          : ($(".cart_subcription_content_tool").addClass("hidden"),
            $(".cart_product_subcription .one_time_purchse").removeClass(
              "hidden"
            ),
            $(".cart_product_subcription .monthly_subscription_note").addClass(
              "hidden"
            ),
            $(".subscription_toggle_box").removeClass("active"),
            $(".on_off_toggle__input").attr("checked", !1)),
        $(".cart_product_subcription").find("li").removeClass("active"),
        $this.parent("li").addClass("active");
    }),
      $(document).on("change", ".on_off_toggle__input", function () {
        $(this).is(":checked")
          ? ($("#cart-subscribe-save").trigger("click"),
            $(this).parents(".subscription_toggle_box").addClass("active"),
            setTimeout(function () {
              startConfetti(),
                setTimeout(function () {
                  stopConfetti();
                }, 5e3);
            }, 3e3))
          : ($("#cart-one-time-purchase").trigger("click"),
            $(this).parents(".subscription_toggle_box").removeClass("active"));
      }),
      $(window).width() >= 1085 &&
        $(document).on("click", ".scroll_element_down", function () {
          var section_id = $(this)
            .find(".menu_link")
            .attr("href")
            .split("#")[1];
          if ($(".page_about_us").length) {
            if ($("#" + section_id).length) {
              var target_offset = $("#" + section_id).offset().top - 120;
              $("html, body").stop().animate({ scrollTop: target_offset }, 1e3);
            }
          } else window.location.href = $(this).find(".menu_link").attr("href");
        }),
      $(document).on("click", ".pro_proposal_submit", async function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.addClass("loading"),
          $this.find(".loading-overlay__spinner").removeClass("hidden");
        var serialize = $this.parents("form").serialize();
        let cartItems = [],
          hasProposal = !1,
          cartData = await $.getJSON("/cart.js", function (cart) {
            cart.item_count > 0 &&
              (hasProposal = cart.items.some(
                (product) => product.product_type === "Proposal"
              ));
          });
        hasProposal
          ? (window.location.href = "/checkout")
          : $.ajax({
              url: "/cart/add.js",
              type: "POST",
              dataType: "json",
              data: serialize,
              success: function (data) {
                (window.location.href = "/checkout"),
                  $this.removeClass("loading"),
                  $this.find(".loading-overlay__spinner").addClass("hidden");
              },
            });
      }),
      $(document).on("keyup", ".field_money_format", function () {
        var current_val = $(this).val() * 100,
          name_field = $(this).attr("name");
        $(".field_money_format[name='" + name_field + "']").length &&
          $(".field_money_format[name='" + name_field + "']")
            .parents(".fields")
            .find(".money_format")
            .html(Shopify2.formatMoney(current_val, "") + " USD");
      }),
      $(document).on(
        "click",
        '.hiring_detail .bottom_btn a[href="#select-your-craft"]',
        function () {
          $(this)
            .parents(".hiring_left_content")
            .find(".js_main_heading")
            .trigger("click");
        }
      ),
      $(".slider_right").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        fade: !0,
        draggable: !1,
        autoplay: !0,
      }),
      $(".description_textarea").keyup(function () {
        var characterCount = $(this).val().length;
        $(this).parents(".fields").find(".current").text(characterCount);
      }),
      $(document).on("change", ".subscription_input_lock_in", function () {
        var $this = $(this),
          data_class = $this.attr("data_id");
        $this.parents(".subcription_details").toggleClass("bg-line-images"),
          $this
            .parents(".subcription_details")
            .find(".content_detail")
            .addClass("hidden"),
          $this
            .parents(".subcription_details")
            .find(".content_detail." + data_class)
            .removeClass("hidden");
      }),
      $(document).on(
        "change input keyup",
        ".product_lock_in_input",
        function () {
          var $this = $(this),
            current_val = $this.val(),
            valuemin = parseInt($this.attr("min"));
          if (current_val >= valuemin) {
            $(".pro_proposal_submit").attr("disabled", !1),
              $(".qty_form_error").addClass("hidden");
            var price_per_product_sale =
              parseFloat($(".price_per_qty_sale").attr("data-price")) *
              current_val;
            $(".price_per_product_sale span, .button_price").html(
              Shopify2.formatMoney(price_per_product_sale * 100, "")
            );
            var price_per_product_regular =
              parseFloat($(".price_per_qty_sale").attr("data-compare-price")) *
              current_val;
            $(".price_per_product_regular span").html(
              Shopify2.formatMoney(price_per_product_regular * 100, "")
            );
            var total_discount =
              price_per_product_regular - price_per_product_sale;
            $(".discount_price").html(
              Shopify2.formatMoney(total_discount * 100, "")
            ),
              $(".product_rangebar_lock_in").val(current_val),
              $(".product_lock_in_input").val(current_val),
              $(".total_hours").text(current_val);
          }
          current_val < valuemin &&
            ($(".pro_proposal_submit").attr("disabled", !0),
            $(".qty_form_error").removeClass("hidden")),
            current_val > 500 &&
              ($(".product_lock_in_input").val(500),
              $(".product_lock_in_input").change());
          var prevVal2 = valuemin;
          let newMin, newMax;
          current_val >= 100 && current_val < 250
            ? prevVal2 > current_val && current_val === 100
              ? ((newMin = Math.max(valuemin)), (newMax = Math.min(100)))
              : ((newMin = Math.max(100)), (newMax = Math.min(250)))
            : current_val >= 250 && current_val <= 500
            ? prevVal2 > current_val && current_val === 250
              ? ((newMin = Math.max(100)), (newMax = Math.min(250)))
              : ((newMin = Math.max(250)), (newMax = Math.min(500)))
            : ((newMin = Math.max(valuemin)), (newMax = Math.min(100)));
          let currentMinVal = parseInt(
            $(".product_rangebar_lock_in").attr("min")
          );
          if (
            (newMin !== currentMinVal &&
              (newMin === valuemin
                ? ($(".range_bar .min_value .current")
                    .text(newMin)
                    .removeClass("arrow_active"),
                  $(".range_bar .max_value .current")
                    .text(newMax)
                    .addClass("arrow_active"))
                : newMin === 250
                ? ($(".range_bar .min_value .current")
                    .text(newMin)
                    .addClass("arrow_active"),
                  $(".range_bar .max_value .current")
                    .text(newMax)
                    .removeClass("arrow_active"))
                : ($(".range_bar .min_value .current")
                    .text(newMin)
                    .addClass("arrow_active"),
                  $(".range_bar .max_value .current")
                    .text(newMax)
                    .addClass("arrow_active"))),
            $(".product_rangebar_lock_in").attr("min", newMin),
            $(".product_rangebar_lock_in").attr("max", newMax),
            (prevVal2 = current_val),
            current_val >= valuemin && current_val < 501)
          ) {
            var max2 = parseInt($(".product_rangebar_lock_in").attr("max")),
              min2 = parseInt($(".product_rangebar_lock_in").attr("min"));
            const newValue = ((current_val - min2) * 100) / (max2 - min2),
              newPosition = 10 - newValue * 0.2,
              newpositionThumb = newValue * 0.2;
            $(".range_bar_tooltip span").text(current_val),
              $(".range_bar_tooltip,.range_bar_tooltip_drag_text").css(
                "left",
                `calc(${newValue}% + (${newPosition}px))`
              ),
              $(".range-thumb").css(
                "left",
                `calc(${newValue}% - (${newpositionThumb}px))`
              ),
              updateBallonProp(current_val, max2, min2);
            const progress = convertToPercentage(current_val, min2, max2),
              sliderEls = document.querySelectorAll(
                ".product_rangebar_lock_in"
              );
            sliderEls.length > 0 &&
              sliderEls.forEach((sliderEl) => {
                sliderEl.style.background = `linear-gradient(to right, #018062 ${progress}%, transparent ${progress}%)`;
              });
          }
        }
      );
    function PDPlockPrice(current_val) {
      var price_per_product_sale =
        parseFloat($(".price_per_qty_sale").attr("data-price")) * current_val;
      $(".price_per_product_sale span, .button_price").html(
        Shopify2.formatMoney(price_per_product_sale * 100, "")
      );
      var price_per_product_regular =
        parseFloat($(".price_per_qty_sale").attr("data-compare-price")) *
        current_val;
      $(".price_per_product_regular span").html(
        Shopify2.formatMoney(price_per_product_regular * 100, "")
      );
      var total_discount = price_per_product_regular - price_per_product_sale;
      $(".discount_price").html(Shopify2.formatMoney(total_discount * 100, "")),
        current_val <= 100
          ? updateLockOutput(current_val)
          : current_val <= 250
          ? updateLockOutputWithIncrement(current_val, 100, 1)
          : current_val <= 500 &&
            updateLockOutputWithIncrement(current_val, 250, 1);
      var max2 = parseInt($(".product_rangebar_lock_in").attr("max")),
        min2 = parseInt($(".product_rangebar_lock_in").attr("min"));
      updateTooltip(current_val, max2, min2, "product_rangebar_lock_in"),
        updateBallonProp(current_val, max2, min2);
    }
    function updateLockOutput(newValue) {
      $(".range_bar_tooltip span").text(newValue),
        $(".product_lock_in_input").val(newValue),
        $(".total_hours").text(newValue);
    }
    function updateLockOutputWithIncrement(value, base, increment) {
      const adjustedValue =
        base + Math.floor((value - base) / increment) * increment;
      $(".range_bar_tooltip span").text(adjustedValue),
        $(".product_lock_in_input").val(adjustedValue),
        $(".total_hours").text(adjustedValue);
    }
    var currentValue = parseInt($(".range_bar_tooltip span").text());
    function lockrangeSliderMouseUp(event) {
      updateMinMaxVal(event, "product_rangebar_lock_in"),
        $(".range_bar_tooltip_drag_text").removeClass("hidden"),
        setTimeout(function () {
          gsap.to(".range_bar_tooltip", {
            rotation: 0,
            y: 0,
            x: 0,
            duration: 0.4,
          });
        }, 250);
    }
    function lockrangeSliderOnInput(event) {
      var current_val = event.target.value;
      PDPlockPrice(current_val),
        $(".range_bar_tooltip_drag_text").addClass("hidden");
      var newValue = current_val;
      newValue >= currentValue
        ? gsap.to(".range_bar_tooltip", {
            rotation: -25,
            y: 5,
            x: -29,
            duration: 0.4,
          })
        : newValue <= currentValue
        ? gsap.to(".range_bar_tooltip", {
            rotation: 25,
            y: 5,
            x: 29,
            duration: 0.4,
          })
        : gsap.to(".range_bar_tooltip", {
            rotation: 0,
            y: 0,
            x: 0,
            duration: 0.4,
          }),
        (currentValue = newValue);
    }
    for (
      var productRangeSliderlock = document.getElementsByClassName(
          "product_rangebar_lock_in"
        ),
        i = 0;
      i < productRangeSliderlock.length;
      i++
    )
      productRangeSliderlock[i].addEventListener(
        "input",
        lockrangeSliderOnInput
      ),
        "ontouchstart" in window || navigator.maxTouchPoints
          ? productRangeSliderlock[i].addEventListener(
              "touchend",
              lockrangeSliderMouseUp
            )
          : productRangeSliderlock[i].addEventListener(
              "mouseup",
              lockrangeSliderMouseUp
            );
    if (
      ($(".single_variant input").click(function () {
        $(this)
          .parents(".product")
          .find('.product-form form input[name="id"]')
          .val($(this).val());
        let qtys = $(this).parents(".single_variant").attr("data-quantity"),
          com_price = $(this).parents(".single_variant").attr("data-com"),
          price = $(this).parents(".single_variant").attr("data-price");
        $(this)
          .parents(".product")
          .find(".price__sale .price-item--regular")
          .text(com_price),
          $(this)
            .parents(".product")
            .find(".price__sale .price-item--sale")
            .text(price),
          qtys > 0
            ? ($(this)
                .parents(".product")
                .find(".product-form form .checkout_button")
                .attr("disabled", !1),
              $(this)
                .parents(".product")
                .find(
                  ".product-form form .checkout_button .product_button_text"
                )
                .text("CHECKOUT"))
            : ($(this)
                .parents(".product")
                .find(".product-form form .checkout_button")
                .attr("disabled", !0),
              $(this)
                .parents(".product")
                .find(
                  ".product-form form .checkout_button .product_button_text"
                )
                .text("Sold Out"));
      }),
      $(document).on(
        "click",
        ".subcription_content_tool,.cart_subcription_content_tool",
        function () {
          $(this).toggleClass("active_tooltip");
        }
      ),
      $(document).on(
        "click",
        ".block__checkout-extensibility-variant",
        function () {
          var variant_id = $(this).attr("data-id"),
            data_compare_price = $(this).attr("data-compare-price"),
            data_regular_price = $(this).attr("data-regular-price");
          $(".block__checkout-extensibility-variant-list").removeClass(
            "active"
          ),
            $(
              ".block__checkout-extensibility-variant[data-id='" +
                variant_id +
                "']"
            )
              .parents(".block__checkout-extensibility-variant-list")
              .addClass("active"),
            $(".block__checkout-extensibility-product-variant-selected").val(
              variant_id
            ),
            $(".block__checkout-extensibility-product-compare-price").text(
              data_compare_price
            ),
            $(
              ".block__checkout-extensibility-product-regular-price, .block__checkout-extensibility-product-addtocart-price"
            ).text(data_regular_price);
        }
      ),
      $(document).on(
        "click",
        ".block__checkout-extensibility-info",
        function () {
          var data_id = $(this).attr("data-popup-id");
          $(".block__checkout-extensibility-popup").addClass("active"),
            $(
              ".block__checkout-extensibility-variant-popup#" + data_id
            ).addClass("active_popup");
        }
      ),
      $(document).on(
        "click",
        ".block__checkout-extensibility-variant-popup-close",
        function () {
          $(".block__checkout-extensibility-popup").removeClass("active"),
            $(".block__checkout-extensibility-variant-popup").removeClass(
              "active_popup"
            );
        }
      ),
      $(document).on(
        "click",
        ".block__checkout-extensibility-product-add-to-cart-button",
        function (e) {
          e.preventDefault();
          var $this = $(this),
            serialize = $this.parents("form").serialize();
          $.ajax({
            url: "/cart/add.js",
            type: "POST",
            dataType: "json",
            data: serialize,
            success: function (data) {
              window.location.href = "/checkout";
            },
          });
        }
      ),
      $(document).on(
        "click",
        ".block__site-speed-banner-form-submit, .block__site-speed-service-form-submit, .block__site-speed-service-book-form-submit",
        async function (e) {
          e.preventDefault();
          var $this = $(this),
            serialize = $this.parents("form").serialize(),
            bundleproductHandle = $(this).attr("data-producthandle");
          let hasProduct = !1,
            cartitemData = await $.getJSON("/cart.js", function (cart) {
              cart.item_count > 0 &&
                (hasProduct = cart.items.some(
                  (product) => product.handle === bundleproductHandle
                ));
            });
          console.log(hasProduct),
            console.log(bundleproductHandle),
            hasProduct && bundleproductHandle != null
              ? ($this.removeClass("loading"),
                $this.find(".loading-overlay__spinner").addClass("hidden"),
                (window.location.href = "/checkout"))
              : $.ajax({
                  url: "/cart/add.js",
                  type: "POST",
                  dataType: "json",
                  data: serialize,
                  success: function (data) {
                    window.location.href = "/checkout";
                  },
                });
        }
      ),
      $(window)
        .scroll(function () {
          if ($(".block__checkout-converting-section").length) {
            var section_id = $(".block__checkout-converting-section").offset()
                .top,
              window_height = $(window).height() / 2,
              window_scroll =
                $(this).scrollTop() +
                $("#kretoss-section-header").height() +
                window_height;
            if (
              window_scroll >= section_id &&
              $(".block__checkout-converting-section").hasClass("active_count")
            ) {
              if (
                (($.fn.jQuerySimpleCounter = function (options) {
                  var settings = $.extend(
                      {
                        start: 0,
                        end: 100,
                        easing: "swing",
                        duration: 400,
                        complete: "",
                      },
                      options
                    ),
                    thisElement = $(this);
                  $({ count: settings.start }).animate(
                    { count: settings.end },
                    {
                      duration: settings.duration,
                      easing: settings.easing,
                      step: function () {
                        if (
                          thisElement[0].classList.contains("custom_index_2")
                        ) {
                          var mathCount = this.count;
                          thisElement.text("$" + mathCount.toFixed(1) + "B+");
                        } else {
                          var mathCount = Math.ceil(this.count);
                          thisElement.text(mathCount);
                        }
                      },
                      complete: settings.complete,
                    }
                  );
                }),
                $(".block__checkout-converting-percentage-text-1").length)
              ) {
                var count_one = parseInt(
                  $(".block__checkout-converting-percentage-text-1").attr(
                    "data-count"
                  )
                );
                $(
                  ".block__checkout-converting-percentage-text-1"
                ).jQuerySimpleCounter({ end: count_one, duration: 3e3 });
              }
              if ($(".block__checkout-converting-percentage-text-2").length) {
                var count_two = parseInt(
                  $(".block__checkout-converting-percentage-text-2").attr(
                    "data-count"
                  )
                );
                $(
                  ".block__checkout-converting-percentage-text-2"
                ).jQuerySimpleCounter({ end: count_two, duration: 3e3 });
              }
              if ($(".block__checkout-converting-percentage-text-3").length) {
                var count_three = parseInt(
                  $(".block__checkout-converting-percentage-text-3").attr(
                    "data-count"
                  )
                );
                $(
                  ".block__checkout-converting-percentage-text-3"
                ).jQuerySimpleCounter({ end: count_three, duration: 3e3 });
              }
              $(".block__checkout-converting-section").removeClass(
                "active_count"
              );
            }
          }
        })
        .scroll(),
      $(document).on("click", ".block__video-play", function () {
        $(this).parents(".block__video").addClass("block__video-play-pause"),
          $(this).parents(".block__video").find("video")[0].play(),
          $(this)
            .parents(".block__video")
            .find("video")
            .attr("controls", "true");
      }),
      $(document).ready(function () {
        $(".block__checkout-extensibility-tab").data("tab") &&
          $(document).on(
            "click",
            ".block__checkout-extensibility-tabs-title",
            function () {
              $(this).hasClass("change_icon")
                ? ($(this).removeClass("change_icon"),
                  $(this)
                    .parents(".block__checkout-extensibility-tabs-slide")
                    .find(".block__checkout-extensibility-tabs-panel")
                    .slideUp())
                : ($(".block__checkout-extensibility-tabs-title").removeClass(
                    "change_icon"
                  ),
                  $(".block__checkout-extensibility-tabs-panel").slideUp(),
                  $(this).addClass("change_icon"),
                  $(this)
                    .parents(".block__checkout-extensibility-tabs-slide")
                    .find(".block__checkout-extensibility-tabs-panel")
                    .slideDown());
            }
          );
      }),
      $(document).on(
        "click",
        ".block__chosse-checkout-extensibility-icon-heading-list",
        function () {
          var data_id = $(this).attr("data-id");
          $(
            ".block__chosse-checkout-extensibility-icon-heading-list"
          ).removeClass("active"),
            $(this).addClass("active"),
            $(".block__chosse-checkout-extensibility-icon").addClass("hidden"),
            $(
              ".block__chosse-checkout-extensibility-icon." + data_id
            ).removeClass("hidden"),
            $(
              ".block__chosse-checkout-extensibility-block-description"
            ).addClass("hidden"),
            $(
              ".block__chosse-checkout-extensibility-block-description." +
                data_id
            ).removeClass("hidden");
        }
      ),
      $(".block__services-checkout-extensibility-details-slider").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 8e3,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
        verticalSwiping: !0,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: !1,
              verticalSwiping: !1,
              dots: !0,
              cssEase: "ease",
              autoplaySpeed: 1e3,
              speed: 1e3,
              fade: !0,
            },
          },
        ],
      }),
      $(document).on(
        "click",
        ".block__newsletter-form-checkout-form-submit",
        function () {
          var $this = $(this),
            InputValue = {},
            check_val = $this
              .parents(".block__newsletter-form-checkout-form")
              .find(".block__newsletter-form-checkout-input-field-form-type")
              .val(),
            email2 = $this
              .parents(".block__newsletter-form-checkout-form")
              .find(".block__newsletter-form-checkout-input-field")
              .val();
          $this
            .parents(".block__newsletter-form-checkout-form")
            .find(".block__newsletter-form-checkout-form-success")
            .addClass("hidden"),
            $this
              .parents(".block__newsletter-form-checkout-form")
              .find(".block__newsletter-form-checkout-field-error")
              .addClass("hidden");
          var gdpr_compliance2 = $this
            .parents(".block__newsletter-form-checkout-box")
            .find(".block__gdpr-compliance-form-checkbox")
            .is(":checked");
          $this
            .parents(".block__newsletter-form-checkout-box")
            .find(".block__gdpr-compliance-checkbox-error")
            .addClass("hidden");
          var filter =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (email2 == "")
            return (
              $this
                .parents(".block__newsletter-form-checkout-form")
                .find(".block__newsletter-form-checkout-field-error")
                .removeClass("hidden"),
              $this
                .parents(".block__newsletter-form-checkout-form")
                .find(".block__newsletter-form-checkout-input-field")
                .focus(),
              !1
            );
          if (filter.test(String(email2).toLowerCase())) {
            if (gdpr_compliance2 == !1)
              return (
                $this
                  .parents(".block__newsletter-form-checkout-box")
                  .find(".block__gdpr-compliance-checkbox-error")
                  .removeClass("hidden"),
                !1
              );
          } else
            return (
              $this
                .parents(".block__newsletter-form-checkout-form")
                .find(".block__newsletter-form-checkout-field-error")
                .removeClass("hidden")
                .text("Please enter valid email."),
              $this
                .parents(".block__newsletter-form-checkout-form")
                .find(".block__newsletter-form-checkout-input-field")
                .focus(),
              !1
            );
          (InputValue.g = "SZ6geJ"),
            (InputValue.email = email2),
            (InputValue.Service = check_val),
            (InputValue.$consent = !0),
            (InputValue.$fields = "Service,$consent");
          var settings = {
            async: !0,
            crossDomain: !0,
            url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "cache-control": "no-cache",
            },
            data: InputValue,
          };
          $.ajax(settings).done(function (response) {
            $this
              .parents(".block__newsletter-form-checkout-form")
              .find(".block__newsletter-form-checkout-form-success")
              .removeClass("hidden"),
              $this
                .parents(".block__newsletter-form-checkout-form")
                .find(".block__newsletter-form-checkout-field-error")
                .addClass("hidden");
            let nextUrl = $this.data("nexturl");
            window.location.href = nextUrl;
          });
        }
      ),
      $(document).on(
        "click",
        ".block__deploy-checkout-btn,.block__upgrade-checkout-block-btn,.block__partner-checkout-extensibility-btn,.block__services-checkout-extensibility-btn",
        function (e) {
          e.preventDefault();
          var target_offset = $("body").offset().top;
          $("html, body").stop().animate({ scrollTop: target_offset }, 1e3);
        }
      ),
      $(".total_pro_qty").length &&
        $(document).on("click", ".cart__checkout-button", function (e) {
          e.preventDefault();
          var active_discount = $(this)
            .parents(".drawer__inner")
            .find(".total_pro_qty")
            .val();
          window.location.href =
            "https://arcticgrey.com/discount/" +
            active_discount +
            "?redirect=/checkout";
        }),
      $(".block__site-logo-blocks").length &&
        $(window).width() <= 768 &&
        $(".block__site-logo-blocks").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          responsive: [{ breakpoint: 550, settings: { slidesToShow: 2 } }],
        }),
      $(".block__bfcm-lock-in-rate-quantity-button").length &&
        ($(document).on(
          "click",
          ".block__bfcm-lock-in-rate-quantity-button",
          function () {
            $(this)
              .parents(".block__bfcm-lock-in-rate-product-subcription")
              .addClass("active_mobile");
          }
        ),
        $(document).on("click", "body", function (e) {
          var container = $(".block__bfcm-lock-in-rate-product-subcription");
          !container.is(e.target) &&
            container.has(e.target).length === 0 &&
            $(".block__bfcm-lock-in-rate-product-subcription").removeClass(
              "active_mobile"
            );
        })),
      $(window).on("load", function () {
        $(".snow-box-container").length &&
          $(".snow-box-container").removeClass("hidden");
      }),
      $(document).on("click", ".block__bfcm-lock-in-rate-rating", function () {
        $(".block__bfcm-site-reviews").removeClass("hidden"),
          $("body").addClass("overflow-hidden");
      }),
      $(document).on("click", ".block__bfcm-site-reviews-close", function () {
        $(".block__bfcm-site-reviews").addClass("hidden"),
          $("body").removeClass("overflow-hidden");
      }),
      $(document).on(
        "click",
        ".block__upgrade-checkout-content-email-btn",
        function () {
          var $this = $(this),
            InputValue = {},
            check_val = "Hydrogen & Oxygen Development Services",
            email2 = $this
              .parents(".block__upgrade-checkout-content")
              .find(".block__upgrade-checkout-content-form-email")
              .val(),
            phone = $this
              .parents(".block__upgrade-checkout-content")
              .find(".block__upgrade-checkout-content-phone")
              .val();
          $this
            .parents(".block__upgrade-checkout-content")
            .find(".block__upgrade-checkout-form-success")
            .addClass("hidden"),
            $this
              .parents(".block__upgrade-checkout-content")
              .find(".block__upgrade-checkout-field-error")
              .addClass("hidden");
          var filter =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (email2 == "")
            return (
              $this
                .parents(".block__upgrade-checkout-content")
                .find(".block__upgrade-checkout-content-email-error")
                .removeClass("hidden"),
              $this
                .parents(".block__upgrade-checkout-content")
                .find(".block__upgrade-checkout-content-form-email")
                .focus(),
              !1
            );
          if (filter.test(String(email2).toLowerCase())) {
            if (phone == "")
              return (
                $this
                  .parents(".block__upgrade-checkout-content")
                  .find(".block__upgrade-checkout-content-phone-error")
                  .removeClass("hidden"),
                $this
                  .parents(".block__upgrade-checkout-content")
                  .find(".block__upgrade-checkout-content-phone")
                  .focus(),
                !1
              );
          } else
            return (
              $this
                .parents(".block__upgrade-checkout-content")
                .find(".block__upgrade-checkout-content-email-error")
                .removeClass("hidden")
                .text("Please enter valid email."),
              $this
                .parents(".block__upgrade-checkout-content")
                .find(".block__upgrade-checkout-content-form-email")
                .focus(),
              !1
            );
          (InputValue.g = "SZ6geJ"),
            (InputValue.email = email2),
            (InputValue.Phone = phone),
            (InputValue.Service = check_val),
            (InputValue.$consent = !0),
            (InputValue.$fields = "Service,$consent");
          var settings = {
            async: !0,
            crossDomain: !0,
            url: "https://manage.kmail-lists.com/ajax/subscriptions/subscribe",
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "cache-control": "no-cache",
            },
            data: InputValue,
          };
          $.ajax(settings).done(function (response) {
            $this
              .parents(".block__upgrade-checkout-content")
              .find(".block__upgrade-checkout-form-success")
              .removeClass("hidden"),
              $this
                .parents(".block__upgrade-checkout-content")
                .find(".block__upgrade-checkout-field-error")
                .addClass("hidden");
          });
        }
      ),
      $(".block__site-page-type-list").hover(function () {
        $(this).hasClass("active_page") ||
          ($(".block__site-page-type-list").removeClass("active_page"),
          $(this).addClass("active_page"));
      }),
      $(document).on(
        "click",
        ".block__migration-to-shopify-scroll",
        function (event) {
          event.preventDefault();
          var data_id = $(this).attr("href");
          if ($(data_id).length) {
            var target_offset =
              $(".kretoss-section" + data_id).offset().top - 150;
            $("html, body").stop().animate({ scrollTop: target_offset }, 1e3);
          }
        }
      ),
      $(window).on("load", function () {
        if (
          $(".product__info-wrapper .range_bar_tooltip").length &&
          ($(".product__info-wrapper .range_bar_tooltip").addClass(
            "active_range_bar_tooltip"
          ),
          $(".block__2025-lock-in-rate-box").length)
        ) {
          let maxVal = parseInt(
              document.getElementById("product_range").getAttribute("max"),
              10
            ),
            minVal = parseInt(
              document.getElementById("product_range").getAttribute("min"),
              10
            );
          updateTooltip(
            parseInt($(".product_rangebar_lock_in").val()),
            maxVal,
            minVal,
            "product_rangebar_lock_in"
          ),
            updateBallonProp(parseInt($(".product_rangebar_lock_in").val()));
        }
      }),
      $(document).on("click", ".block__task-video-box-play", function () {
        $(this).addClass("hidden"),
          $(this)
            .parents(".block__task-video-box")
            .find("video")
            .attr("controls", "true"),
          $(this).parents(".block__task-video-box").find("video")[0].play();
      }),
      $(document).on(
        "click",
        ".block__get-started-form-option-button",
        function () {
          var migrateID = $(this)
            .parents(".block__get-started-form-header-content")
            .find(".block__get-started-form-option-input:checked")
            .val();
          migrateID != null &&
            (window.location.href =
              "/pages/get-started-form?business-needs=im-looking-to-migrate-to-shopify&migrate=" +
              migrateID);
        }
      ),
      $(document).on(
        "click",
        ".block__get-started-form-button-redirect",
        function () {
          var bussine_need = [];
          $(this)
            .parents(".block__get-started-form-block")
            .find(".block__get-started-form-option-multiselect:checked")
            .each(function () {
              bussine_need.push($(this).attr("id"));
            });
          var redirect_url = bussine_need.join("+");
          redirect_url &&
            (window.location.href =
              "/pages/get-started-form?business-needs=" + redirect_url);
        }
      ),
      $(window).width() <= 767 &&
        ($(".template_type_index .services_list").length &&
          $(".template_type_index .services_list").marquee({
            direction: "left",
            duration: 3e4,
            delayBeforeStart: 0,
            duplicated: !0,
            gap: 0,
            startVisible: !0,
          }),
        $(".block__custom-store-mobile-images").length &&
          $(".block__custom-store-mobile-images").marquee({
            direction: "left",
            duration: 3e4,
            delayBeforeStart: 0,
            duplicated: !0,
            gap: 0,
            startVisible: !0,
          })),
      $(".block__audit-service-card-exp-date-js").length)
    ) {
      var date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth(),
        lastDay = new Date(y, m + 1, 0),
        month_name = lastDay.toLocaleString("en-US", { month: "long" }),
        month_year = lastDay.getFullYear(),
        month_end_date = lastDay.getDate(),
        month_number = lastDay.getMonth() + 1;
      $(".block__audit-service-card-exp-date-js").text(
        month_name + " " + month_end_date + ", " + month_year
      ),
        $(".block__audit-service-card-exp-time-days-js").length &&
          MonthDayCounter(month_number, month_end_date, month_year);
    }
    function MonthDayCounter(month_number2, month_end_date2, month_year2) {
      var birthday = month_number2 + "/" + month_end_date2 + "/" + month_year2;
      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;
          $(".block__audit-service-card-exp-time-days-js").text(
            Math.floor(distance / 864e5)
          ),
            $(".block__audit-service-card-exp-time-hours-js").text(
              Math.floor((distance % 864e5) / 36e5)
            );
        }, 0);
    }
    $(".block__audit-service-card-images-slider-one").hasClass(
      "slick-initialized"
    ) ||
      $(".block__audit-service-card-images-slider-one").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 6e3,
        slidesToShow: 4,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
      }),
      $(".block__audit-service-card-images-slider-two").hasClass(
        "slick-initialized"
      ) ||
        $(".block__audit-service-card-images-slider-two").slick({
          draggable: !1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 0,
          speed: 8e3,
          slidesToShow: 4,
          pauseOnHover: !1,
          cssEase: "linear",
          vertical: !0,
        }),
      $(document).on(
        "click",
        ".block__shopify-single-product-audit-features",
        function () {
          $(this)
            .parents(".block__shopify-single-product-audit-features-list-block")
            .hasClass("active")
            ? ($(this)
                .parents(
                  ".block__shopify-single-product-audit-features-list-block"
                )
                .removeClass("active"),
              $(this)
                .parents(
                  ".block__shopify-single-product-audit-features-list-block"
                )
                .find(
                  ".block__shopify-single-product-audit-features-description"
                )
                .slideUp())
            : ($(this)
                .parents(".block__shopify-single-product-audit-features-list")
                .find(
                  ".block__shopify-single-product-audit-features-list-block"
                )
                .removeClass("active"),
              $(this)
                .parents(".block__shopify-single-product-audit-features-list")
                .find(
                  ".block__shopify-single-product-audit-features-description"
                )
                .slideUp(),
              $(this)
                .parents(
                  ".block__shopify-single-product-audit-features-list-block"
                )
                .addClass("active"),
              $(this)
                .parents(
                  ".block__shopify-single-product-audit-features-list-block"
                )
                .find(
                  ".block__shopify-single-product-audit-features-description"
                )
                .slideDown());
        }
      ),
      $(".block__innovative-brands-image-slider").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 5e3,
        pauseOnHover: !1,
        cssEase: "linear",
        variableWidth: !0,
      }),
      $(".block__awards-brands-image-slider").slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        infinite: !0,
        arrows: !1,
        centerMode: !0,
        responsive: [
          { breakpoint: 1441, settings: { slidesToShow: 7 } },
          { breakpoint: 1025, settings: { slidesToShow: 5 } },
          { breakpoint: 767, settings: { slidesToShow: 3 } },
        ],
      }),
      $(document).on(
        "click",
        ".block__audit-process-details-audit-features",
        function () {
          $(this)
            .parents(".block__audit-process-details-audit-features-list-block")
            .hasClass("active")
            ? ($(this)
                .parents(
                  ".block__audit-process-details-audit-features-list-block"
                )
                .removeClass("active"),
              $(this)
                .parents(
                  ".block__audit-process-details-audit-features-list-block"
                )
                .find(
                  ".block__audit-process-details-audit-features-description"
                )
                .slideUp())
            : ($(this)
                .parents(".block__audit-process-details-audit-features-list")
                .find(".block__audit-process-details-audit-features-list-block")
                .removeClass("active"),
              $(this)
                .parents(".block__audit-process-details-audit-features-list")
                .find(
                  ".block__audit-process-details-audit-features-description"
                )
                .slideUp(),
              $(this)
                .parents(
                  ".block__audit-process-details-audit-features-list-block"
                )
                .addClass("active"),
              $(this)
                .parents(
                  ".block__audit-process-details-audit-features-list-block"
                )
                .find(
                  ".block__audit-process-details-audit-features-description"
                )
                .slideDown());
        }
      ),
      $(document).on(
        "click",
        ".block__shopify-single-product-audit-scroll",
        function () {
          var data_id = $(this).attr("data-id");
          if ($("#" + data_id).length) {
            var offset_top =
              $(".block__shopify-single-product-audit#" + data_id).offset()
                .top - 100;
            $("html, body").animate({ scrollTop: offset_top }, "slow");
          }
        }
      ),
      $(window).width() > 989 &&
        $(".block__shopify-product-audit-images-animation").length &&
        $(window).on("scroll", function () {
          var scrollNo = $(window).scrollTop(),
            scrollAndSpeed = scrollNo / 8,
            contentWidth = 44;
          $(window).width() >= 1701 && $(window).width() <= 1800
            ? (contentWidth = 47)
            : $(window).width() >= 1601 && $(window).width() <= 1700
            ? (contentWidth = 50)
            : $(window).width() >= 1401 && $(window).width() <= 1600
            ? (contentWidth = 57)
            : $(window).width() >= 1301 && $(window).width() <= 1400
            ? (contentWidth = 53)
            : $(window).width() >= 990 &&
              $(window).width() <= 1300 &&
              (contentWidth = 50);
          var elementWidth =
              contentWidth -
              Math.min(Math.max(scrollAndSpeed, 0), contentWidth) +
              "%",
            elementrotateX = 15 - Math.min(Math.max(scrollAndSpeed, 0), 15),
            elementrotateY = 0,
            elementrotate = 32 - Math.min(Math.max(scrollAndSpeed, 0), 32),
            elementtranslate = 40 - Math.min(Math.max(scrollAndSpeed, 0), 40),
            finalCss =
              "translate3d(" +
              elementtranslate +
              "%,0,0) scale3d(1,1,1) rotateX(" +
              elementrotateX +
              "deg) rotateY(" +
              elementrotateY +
              "deg) rotate(" +
              elementrotate +
              "deg) skew(0)";
          $(".block__shopify-product-audit-images-animation")
            .find(".block__shopify-product-audit-images-list")
            .css("transform", finalCss),
            $(".block__shopify-product-audit-images-animation")
              .find(".block__shopify-product-audit-content")
              .css("width", elementWidth);
        }),
      $("body").hasClass("template_type_cart") && (window.location.href = "/"),
      $(document).on(
        "click",
        ".block__one-cart-rule-type-listing",
        function () {
          if (!$(this).hasClass("active")) {
            var data_id = $(this).attr("data_id");
            $(".block__one-cart-rule-image#" + data_id).length &&
              ($(".block__one-cart-rule-type-listing").removeClass("active"),
              $(this).addClass("active"),
              $(".block__one-cart-rule-image").addClass("hidden"),
              $(".block__one-cart-rule-image#" + data_id).removeClass(
                "hidden"
              ));
          }
        }
      ),
      $(".block__mega-menu-right-image-column-one-slider").hasClass(
        "slick-initialized"
      ) ||
        $(".block__mega-menu-right-image-column-one-slider").slick({
          draggable: !1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 0,
          speed: 6e3,
          slidesToShow: 4,
          pauseOnHover: !1,
          cssEase: "linear",
          vertical: !0,
        }),
      $(".block__mega-menu-right-image-column-two-slider").hasClass(
        "slick-initialized"
      ) ||
        $(".block__mega-menu-right-image-column-two-slider").slick({
          draggable: !1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 0,
          speed: 8e3,
          slidesToShow: 4,
          pauseOnHover: !1,
          cssEase: "linear",
          vertical: !0,
        }),
      $(".block__mega-menu-right-image-column-horizontal-slider").length &&
        $(".block__mega-menu-right-image-column-horizontal-slider").slick({
          draggable: !1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 0,
          speed: 5e3,
          slidesToShow: 2,
          pauseOnHover: !1,
          cssEase: "linear",
        }),
      $(".block__mega-menu-right-icon-listings-slider").length &&
        $(".block__mega-menu-right-icon-listings-slider").slick({
          draggable: !1,
          infinite: !0,
          autoplay: !0,
          arrows: !1,
          autoplaySpeed: 0,
          speed: 5e3,
          slidesToShow: 3,
          pauseOnHover: !1,
          cssEase: "linear",
        }),
      $(".block__site-speed-banner-main-image-listing").slick({
        draggable: !1,
        infinite: !0,
        autoplay: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: !1,
        autoplaySpeed: 0,
        speed: 8e3,
        pauseOnHover: !1,
        cssEase: "linear",
        vertical: !0,
        verticalSwiping: !0,
        adaptiveHeight: !0,
      });
  }),
  $(window).on("load", function () {
    if ($(".block__shopify-single-product-audit").length) {
      var base_url = window.location.href.split("#")[1];
      if ($("#" + base_url).length) {
        var offset_top =
          $(".block__shopify-single-product-audit#" + base_url).offset().top -
          100;
        $("html, body").animate({ scrollTop: offset_top }, "slow");
      }
    }
  }),
  $(document).on(
    "click",
    ".block__on-demand-team-list-select, .block__on-demand-team-list-checkbox",
    function () {
      $(this).parents(".block__on-demand-team-listing").toggleClass("active");
      var totalPriceEmp = 0,
        total_qty = 0;
      $(".block__on-demand-team-listing.active").each(function () {
        var price = parseInt(
            $(this)
              .find(".block__on-demand-team-list-select")
              .attr("data_price")
          ),
          qty = parseInt(
            $(this).find(".block__on-demand-team-list-select").attr("data_qty")
          );
        (totalPriceEmp = totalPriceEmp + price), (total_qty = total_qty + qty);
      });
      var totalPriceEmpmonth = totalPriceEmp / 12;
      $(".block__on-demand-team-calculator-full-time-price-count").html(
        Shopify.formatMoney(totalPriceEmpmonth, "")
      ),
        $(".block__on-demand-team-calculator-content")
          .find(".quantity__input")
          .val(total_qty)
          .trigger("change");
      var bulk_hours_price = parseInt(
          $(".block__on-demand-team-calculator-bulk-hour-price-count")
            .text()
            .replace("$", "")
            .replace(",", "")
        ),
        totalPriceEmpmonthtofixed = totalPriceEmpmonth,
        discount_amount = 0;
      $(".block__on-demand-team-listing").hasClass("active") &&
        (discount_amount = (
          100 -
          ((bulk_hours_price * 100) / totalPriceEmpmonthtofixed) * 100
        ).toFixed(2)),
        $(".block__on-demand-team-calculator-bulk-hour-per").text(
          "-" + discount_amount + "%"
        );
    }
  ),
  $(document).on("click", ".block__on-demand-team-list-details", function () {
    var data_id = $(this).attr("data_id");
    $(".block__on-demand-team-detail-popup#" + data_id).length &&
      ($(".block__on-demand-team-detail-popup-overlay").addClass("active"),
      $(".block__on-demand-team-detail-popup#" + data_id).addClass("active"),
      $("body").addClass("overflow-hidden"));
  }),
  $(document).on(
    "click",
    ".block__on-demand-team-detail-popup-overlay, .block__on-demand-team-detail-popup-close",
    function () {
      $(".block__on-demand-team-detail-popup-overlay").removeClass("active"),
        $(".block__on-demand-team-detail-popup").removeClass("active"),
        $("body").removeClass("overflow-hidden");
    }
  ),
  $(document).on(
    "click",
    ".block__on-demand-team-detail-popup-content-button",
    function () {
      var data_id = $(this).attr("data_id");
      $(".block__on-demand-team-detail-popup#" + data_id).length &&
        ($(".block__on-demand-team-detail-popup").removeClass("active"),
        $(".block__on-demand-team-detail-popup#" + data_id).addClass("active"),
        $("body").addClass("overflow-hidden"));
    }
  ),
  $(".block__most-innovative-brands-slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 0,
    infinite: !0,
    draggable: !1,
    speed: 8e3,
    pauseOnHover: !1,
    cssEase: "linear",
    arrows: !1,
    dots: !1,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 5 } },
      { breakpoint: 991, settings: { slidesToShow: 4 } },
      { breakpoint: 767, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
    ],
  }),
  $(".block__unlock-shopify-bulk-hours-listings-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 3e3,
    infinite: !0,
    pauseOnHover: !1,
    draggable: !1,
    arrows: !1,
    vertical: !0,
    verticalSwiping: !0,
  }),
  $(".block_buy-bulk-hour-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 3e3,
    draggable: !1,
    infinite: !0,
    pauseOnHover: !1,
    arrows: !1,
    dots: !1,
    vertical: !0,
    verticalSwiping: !0,
    adaptiveHeight: !0,
    responsive: [{ breakpoint: 575, settings: { slidesToShow: 1 } }],
  }),
  $(".block__buy-bulk-hour-service-slider").slick({
    draggable: !1,
    slidesToShow: 1,
    touchMove: "false",
    slidesToScroll: 1,
    autoplay: !1,
    infinite: !0,
    arrows: !0,
    dots: !1,
    prevArrow:
      '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_343_1389)"><path d="M7.828 10.9967L13.192 5.63275L11.778 4.21875L4 11.9967L11.778 19.7747L13.192 18.3608L7.828 12.9967H20V10.9967H7.828Z" fill="white"></path></g><defs><clipPath id="clip0_343_1389"><rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)"></rect></clipPath></defs></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_343_1384)"><path d="M16.172 10.9967L10.808 5.63275L12.222 4.21875L20 11.9967L12.222 19.7747L10.808 18.3608L16.172 12.9967H4V10.9967H16.172Z" fill="white"></path></g><defs><clipPath id="clip0_343_1384"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg></button>',
  }),
  $(document).on("click", ".block__pdp-add-to-cart-trigger", function () {
    $(".product-form__submit:not(.sticky_form_submit)").trigger("click");
  }),
  $(document).on(
    "click",
    ".block__buy-bulk-hour-buy-form-submit-to-checkout",
    function () {
      $(".block__product-global-quick-view").trigger("click");
    }
  ),
  $(".block__company-features-box").slick({
    draggable: !1,
    infinite: !0,
    autoplay: !0,
    arrows: !1,
    autoplaySpeed: 0,
    speed: 5e3,
    pauseOnHover: !1,
    cssEase: "linear",
    variableWidth: !0,
  }),
  $(".block__teams-for-merchant-team-bulk-hours-listing.active").length)
) {
  var pageLoadValue = $(
    ".block__teams-for-merchant-team-bulk-hours-listing.active"
  )
    .find(".block__teams-for-merchant-team-package-input")
    .val();
  UpdatePackagePrice(pageLoadValue);
}
$(document).on(
  "change",
  ".block__teams-for-merchant-team-package-input",
  function () {
    $(".block__teams-for-merchant-team-bulk-hours-listing").removeClass(
      "active"
    ),
      $(this)
        .parents(".block__teams-for-merchant-team-bulk-hours-listing")
        .addClass("active");
    var value = $(this).val();
    UpdatePackagePrice(value);
  }
);
function UpdatePackagePrice(value) {
  const hrs = parseInt(value);
  let price = 0,
    sub_price = 0;
  var proPerHour = 200;
  const sub_tiers = {
    4: 0,
    9: parseInt($(".three_pro_discount .qty_discount_2").attr("data_discount")),
    14: parseInt(
      $(".three_pro_discount .qty_discount_3").attr("data_discount")
    ),
    24: parseInt(
      $(".three_pro_discount .qty_discount_4").attr("data_discount")
    ),
    49: parseInt(
      $(".three_pro_discount .qty_discount_5").attr("data_discount")
    ),
    74: parseInt(
      $(".three_pro_discount .qty_discount_8").attr("data_discount")
    ),
    99: parseInt(
      $(".three_pro_discount .qty_discount_9").attr("data_discount")
    ),
    149: parseInt(
      $(".three_pro_discount .qty_discount_10").attr("data_discount")
    ),
    199: parseInt(
      $(".three_pro_discount .qty_discount_11").attr("data_discount")
    ),
    299: parseInt(
      $(".three_pro_discount .qty_discount_12").attr("data_discount")
    ),
    399: parseInt(
      $(".three_pro_discount .qty_discount_13").attr("data_discount")
    ),
    499: parseInt(
      $(".three_pro_discount .qty_discount_14").attr("data_discount")
    ),
    500: parseInt(
      $(".three_pro_discount .qty_discount_15").attr("data_discount")
    ),
  };
  for (v of Object.keys(sub_tiers))
    if (((sub_price = sub_tiers[v]), v >= hrs)) break;
  for (v of Object.keys(sub_tiers))
    if (((price = sub_tiers[v]), v >= hrs)) break;
  var total_after_discount = (
      (proPerHour - (proPerHour * price) / 100) *
      hrs
    ).toFixed(2),
    subsription_dis = (total_after_discount * 10) / 100;
  (total_after_discount = (total_after_discount - subsription_dis).toFixed(2)),
    $(".block__teams-for-merchant-team-package-button-price").html(
      Shopify.formatMoney(total_after_discount, "")
    ),
    $(".block__teams-for-merchant-team-package-hours").val(value);
}
$(document).ready(function () {
  if (
    ($(".block__conversions-rate-logo-image").css(
      "height",
      $(".block__conversions-rate-logo-image").width()
    ),
    $(document).on(
      "click",
      ".block__product-quick-view-global-upsell-product-box",
      function () {
        $(this).toggleClass("active");
        var variant_selected = $(
            ".block__product-quick-view-global-product-subscription-input:checked"
          ).attr("data-variant-type"),
          variant_type = $(this).attr("data-variant-title-minus");
        $(this).hasClass("active") &&
          (variant_type = $(this).attr("data-variant-title-plus"));
        var one_time_total_price = $(
            ".block__add-extra-hours-variants[data-title='one-time-purchase" +
              variant_type +
              "']"
          ).attr("data-total-price"),
          subscribe_total_price = $(
            ".block__add-extra-hours-variants[data-title='subscribe-save" +
              variant_type +
              "']"
          ).attr("data-total-price"),
          one_time_per_hours = $(
            ".block__add-extra-hours-variants[data-title='one-time-purchase" +
              variant_type +
              "']"
          ).attr("data-total-hour-price"),
          subscribe_per_hours = $(
            ".block__add-extra-hours-variants[data-title='subscribe-save" +
              variant_type +
              "']"
          ).attr("data-total-hour-price"),
          one_time_id = $(
            ".block__add-extra-hours-variants[data-title='one-time-purchase" +
              variant_type +
              "']"
          ).attr("data-id"),
          subscribe_id = $(
            ".block__add-extra-hours-variants[data-title='subscribe-save" +
              variant_type +
              "']"
          ).attr("data-id"),
          data_total_hours = $(
            ".block__add-extra-hours-variants[data-title='" +
              variant_selected +
              variant_type +
              "']"
          ).attr("data-variant-hours"),
          data_total_price = $(
            ".block__add-extra-hours-variants[data-title='" +
              variant_selected +
              variant_type +
              "']"
          ).attr("data-total-price"),
          variant_id = $(
            ".block__add-extra-hours-variants[data-title='" +
              variant_selected +
              variant_type +
              "']"
          ).attr("data-id");
        $(".block__product-global-active-variant-hours").text(data_total_hours),
          $(".block__product-quick-view-global-product-checkout-price").text(
            data_total_price
          ),
          $(
            ".block__product-variant-one-time-purchase .block__product-quick-view-global-product-subscription-price-main"
          ).text(one_time_total_price),
          $(
            ".block__product-variant-subscribe-save .block__product-quick-view-global-product-subscription-price-main"
          ).text(subscribe_total_price),
          $(
            ".block__product-variant-one-time-purchase .block__product-quick-view-global-product-subscription-price-hour span"
          ).text(one_time_per_hours),
          $(
            ".block__product-variant-subscribe-save .block__product-quick-view-global-product-subscription-price-hour span"
          ).text(subscribe_per_hours),
          $(
            ".block__product-variant-one-time-purchase .block__product-quick-view-global-product-subscription-input"
          ).val(one_time_id),
          $(
            ".block__product-variant-subscribe-save .block__product-quick-view-global-product-subscription-input"
          ).val(subscribe_id),
          $(".block__form-variant-id").attr("value", variant_id);
      }
    ),
    $(document).on(
      "click",
      ".block__product-quick-view-global-close",
      function () {
        $(".block__product-quick-view-global-snippet").removeClass(
          "quick_view_active"
        ),
          $(".block__singleproduct-quick-view-global-snippet").removeClass(
            "quick_view_active"
          ),
          $(".block__singleproduct-quickview-bundlepopup").removeClass(
            "active-bundle-popubox"
          ),
          $("body").removeClass("overflow-hidden chat-button-hide"),
          $("body").css("overflow", "auto");
      }
    ),
    $(document).on("click", "body", function (event) {
      $(event.target).hasClass("block__product-quick-view-global-snippet") &&
        ($(
          ".block__product-quick-view-global-snippet, .block__singleproduct-quick-view-global-snippet"
        ).removeClass("quick_view_active"),
        $(".block__singleproduct-quickview-bundlepopup").removeClass(
          "active-bundle-popubox"
        ),
        $("body").removeClass("overflow-hidden chat-button-hide"),
        $("body").css("overflow", "auto")),
        ($(event.target).hasClass(
          "block__singleproduct-quick-view-global-snippet"
        ) ||
          $(event.target).hasClass(
            "block__singleproduct-quickview-bundlepopup"
          )) &&
          ($(
            ".block__singleproduct-quick-view-global-snippet, .block__product-quick-view-global-snippet"
          ).removeClass("quick_view_active"),
          $(".block__singleproduct-quickview-bundlepopup").removeClass(
            "active-bundle-popubox"
          ),
          $("body").removeClass("overflow-hidden chat-button-hide"),
          $("body").css("overflow", "auto"));
    }),
    $(document).on("click", ".block__product-global-quick-view", function () {
      $(this)
        .parents(".block__section-have-quick-view")
        .find(".block__singleproduct-quick-view-global-snippet")
        .removeClass("quick_view_active"),
        $(this)
          .parents(".block__section-have-quick-view")
          .find(".block__singleproduct-quickview-bundlepopup")
          .removeClass("active-bundle-popubox"),
        $(this)
          .parents(".block__section-have-quick-view")
          .find(".block__product-quick-view-global-snippet")
          .addClass("quick_view_active");
      var oldWidth = document.body.offsetWidth;
      $("body").addClass("overflow-hidden chat-button-hide"),
        $("body").css("overflow", "hidden"),
        (document.body.style.width = oldWidth + "px");
    }),
    $(document).on(
      "click",
      ".block__singleproduct-global-quick-view",
      function () {
        $(this)
          .parents(".block__section-have-quick-view")
          .find(".block__singleproduct-quick-view-global-snippet")
          .addClass("quick_view_active"),
          $(this)
            .parents(".block__section-have-quick-view")
            .find(".block__singleproduct-quickview-bundlepopup")
            .addClass("active-bundle-popubox"),
          $("body").addClass("overflow-hidden chat-button-hide"),
          $("body").css("overflow", "hidden");
      }
    ),
    $(document).on(
      "click",
      ".block__singleproduct-quickview-bundlepopupbox-close",
      function () {
        $(this)
          .parents(".block__singleproduct-quickview-bundlepopup")
          .removeClass("active-bundle-popubox");
      }
    ),
    $(document).on(
      "change",
      ".block__product-quick-view-global-product-subscription-input",
      function () {
        var $this = $(this),
          variant_id = $this.attr("value"),
          selling_id = $this.attr("data-sellingplan"),
          variant_price = $this
            .parents(
              ".block__product-quick-view-global-product-subscription-label-box"
            )
            .find(
              ".block__product-quick-view-global-product-subscription-price-main"
            )
            .text();
        $this
          .parents(".block__product-quick-view-global-product-subscription")
          .find(".block__product-quick-view-global-product-subscription-label")
          .removeClass("active"),
          $this
            .parents(
              ".block__product-quick-view-global-product-subscription-label"
            )
            .addClass("active"),
          $this
            .parents(".block__product-quick-view-global-content-footer")
            .find(
              '.block__product-quick-view-global-product-checkout form input[name="id"]'
            )
            .val(variant_id),
          $this
            .parents(".block__product-quick-view-global-content-footer")
            .find(
              '.block__product-quick-view-global-product-checkout form input[name="selling_plan"]'
            )
            .val(selling_id),
          $this
            .parents(".block__product-quick-view-global-content-footer")
            .find(
              ".block__product-quick-view-global-product-checkout form .block__product-quick-view-global-product-checkout-price"
            )
            .text(variant_price);
        var total_activeproduct = $this
            .parents(".block__singleproduct-quick-view-global-snippet")
            .find(".block__product-quick-view-global-product-activebox").length,
          singleproduct_price = parseInt(
            $this
              .parents(".block__singleproduct-quick-view-global-snippet")
              .find(
                ".block__product-quick-view-global-product-subscription-label.active .block__product-quick-view-global-product-subscription-price-main"
              )
              .attr("data-variantprice")
          ),
          total_productprice = singleproduct_price * total_activeproduct;
        $this
          .parents(".block__singleproduct-quick-view-global-snippet")
          .find(
            ".block__product-quick-view-global-product-subscription-label.active .block__product-quick-view-global-product-subscription-price-main"
          )
          .html(Shopify.formatMoney(total_productprice, "")),
          $this
            .parents(".block__singleproduct-quick-view-global-snippet")
            .find(
              ".block__product-quick-view-global-product-checkout .block__product-quick-view-global-product-checkout-price"
            )
            .html(Shopify.formatMoney(total_productprice, ""));
      }
    ),
    $(document).on(
      "click",
      ".block__singleproduct-quick-view-global-snippet .block__product-quick-view-global-product-box",
      function () {
        var $this = $(this),
          cartproductcount = parseInt(
            $(".header__icon--cart .cart_icon .zoom-in-zoom-out").text()
          );
        $this.hasClass("block__product-quick-view-global-product-activebox")
          ? $this.removeClass(
              "block__product-quick-view-global-product-activebox"
            )
          : $this.addClass(
              "block__product-quick-view-global-product-activebox"
            );
        var total_activeproduct = $(this)
            .parents(".block__singleproduct-quick-view-global-snippet")
            .find(".block__product-quick-view-global-product-activebox").length,
          singleproduct_price = parseInt(
            $(this)
              .parents(".block__singleproduct-quick-view-global-snippet")
              .find(
                ".block__product-quick-view-global-product-subscription-label.active .block__product-quick-view-global-product-subscription-price-main"
              )
              .attr("data-variantprice")
          ),
          total_productprice = singleproduct_price * total_activeproduct;
        $this
          .parents(".block__singleproduct-quick-view-global-snippet")
          .find(".block__product-quick-view-global-product-subscription-label")
          .each(function () {
            var labelprice = $(this)
                .find(
                  ".block__product-quick-view-global-product-subscription-price-main"
                )
                .attr("data-variantprice"),
              variabletotleprice = labelprice * total_activeproduct;
            $(this)
              .find(
                ".block__product-quick-view-global-product-subscription-price-main"
              )
              .html(Shopify.formatMoney(variabletotleprice, ""));
          }),
          $(this)
            .parents(".block__singleproduct-quick-view-global-snippet")
            .find(
              ".block__product-quick-view-global-product-checkout .block__product-quick-view-global-product-checkout-price"
            )
            .html(Shopify.formatMoney(total_productprice, ""));
        var total_singleproduct = $(this)
          .parents(
            ".block__singleproduct-quick-view-global-snippet .block__product-quick-view-global-box"
          )
          .find(".block__product-quick-view-global-product-box").length;
        cartproductcount == 0 &&
          total_activeproduct == total_singleproduct &&
          $this
            .parents(".block__singleproduct-quick-view-global-snippet")
            .find(
              ".block__singleproduct-quickview-bundlepopup .block__shopify-single-product-audit-bundle-button"
            )
            .trigger("click");
      }
    ),
    $(document).on(
      "click",
      ".block__product-global-add-to-cart",
      async function (e) {
        e.preventDefault();
        var $this = $(this),
          ProductHandle = $this.attr("data-handle"),
          Productvariantid = parseInt(
            $this
              .parents(".block__product-quick-view-global-product-checkout")
              .find('form input[name="id"]')
              .val()
          );
        $this.addClass("loading"),
          $this.find(".loading-overlay__spinner").removeClass("hidden");
        var serialize = $this.parents("form").serialize();
        let hasProposal = !1,
          hasvariantProposal = !1,
          cartData = await $.getJSON("/cart.js", function (cart) {
            cart.item_count > 0 &&
              ((hasProposal = cart.items.some(
                (product) => product.handle === ProductHandle
              )),
              (hasvariantProposal = cart.items.some(
                (product) => product.variant_id === Productvariantid
              )));
          });
        hasProposal && hasvariantProposal
          ? ($this.removeClass("loading"),
            $this.find(".loading-overlay__spinner").addClass("hidden"),
            (window.location.href = "/checkout"))
          : $.ajax({
              url: "/cart/add.js",
              type: "POST",
              dataType: "json",
              data: serialize,
              success: function (data) {
                $.getJSON("/cart.js", function (cart) {
                  $(".zoom-in-zoom-out").text(cart.item_count);
                }),
                  $(".cart_icon").addClass("active"),
                  $(".zoom-in-zoom-out").removeClass("active"),
                  setTimeout(() => {
                    $(".cart_icon").removeClass("active"),
                      $(".zoom-in-zoom-out").addClass("active"),
                      $this.removeClass("loading"),
                      $this
                        .find(".loading-overlay__spinner")
                        .addClass("hidden"),
                      (window.location.href = "/checkout");
                  }, "2000");
              },
            });
      }
    ),
    $(document).on(
      "click",
      ".block__singleproduct-global-add-to-cart",
      async function (e) {
        e.preventDefault();
        var $this = $(this),
          ProductHandle = $this.attr("data-handle"),
          Productvariantid = parseInt(
            $this
              .parents(".block__product-quick-view-global-product-checkout")
              .find('form input[name="id"]')
              .val()
          ),
          Productsellingid = parseInt(
            $this
              .parents(".block__product-quick-view-global-product-checkout")
              .find('form input[name="selling_plan"]')
              .val()
          );
        $this.addClass("loading"),
          $this.find(".loading-overlay__spinner").removeClass("hidden");
        var serialize = $this.parents("form").serialize();
        let hasProposal = !1,
          hasvariantProposal = !1,
          cartData = await $.getJSON("/cart.js", function (cart) {
            cart.item_count > 0 &&
              ((hasProposal = cart.items.some(
                (product) => product.handle === ProductHandle
              )),
              (hasvariantProposal = cart.items.some(
                (product) => product.variant_id === Productvariantid
              )));
          });
        hasProposal && hasvariantProposal
          ? ($this.removeClass("loading"),
            $this.find(".loading-overlay__spinner").addClass("hidden"),
            (window.location.href = "/checkout"))
          : $.ajax({
              url: "/cart/add.js",
              type: "POST",
              dataType: "json",
              data: serialize,
              success: function (data) {
                var cart_product_array = [];
                fetch("/cart.js")
                  .then((response) => response.json())
                  .then((data2) => {
                    data2.items.forEach(function (item) {
                      var item_id = item.id;
                      cart_product_array.push(item_id);
                    });
                    let sample_product_atc_array = [];
                    var available_product = !1,
                      sellingplan_id;
                    if (
                      ($this
                        .parents(
                          ".block__singleproduct-quick-view-global-snippet"
                        )
                        .find(
                          ".block__product-quick-view-global-product-activebox"
                        )
                        .each(function () {
                          var product_variant_id = parseInt(
                            $(this)
                              .find('input[name="single-quickview-variantid"]')
                              .val()
                          );
                          isNaN(Productsellingid) ||
                            ((sellingplan_id = parseInt(
                              $(this)
                                .find(
                                  'input[name="single-quickview-productsellingid"]'
                                )
                                .attr("data-selingplan")
                            )),
                            (product_variant_id = parseInt(
                              $(this)
                                .find(
                                  'input[name="single-quickview-productsellingid"]'
                                )
                                .attr("data-variantid")
                            ))),
                            $.inArray(product_variant_id, cart_product_array) !=
                            -1
                              ? (available_product = !0)
                              : !isNaN(sellingplan_id) ||
                                sellingplan_id != "undefined"
                              ? sample_product_atc_array.push({
                                  id: product_variant_id,
                                  quantity: 1,
                                  selling_plan: sellingplan_id,
                                })
                              : sample_product_atc_array.push({
                                  id: product_variant_id,
                                  quantity: 1,
                                });
                        }),
                      sample_product_atc_array.length > 0)
                    ) {
                      let movealongproduct2 = function (auditproduct) {
                        $.ajax({
                          url: "/cart/add.js",
                          type: "POST",
                          dataType: "json",
                          data: auditproduct,
                          success: function (data3) {
                            if (sample_product_atc_array.length > 0) {
                              var singleproductid2 =
                                sample_product_atc_array.shift();
                              movealongproduct2(singleproductid2);
                            } else successProceess();
                          },
                          error: function (error) {
                            console.log("error");
                          },
                        });
                      };
                      var movealongproduct = movealongproduct2,
                        singleproductid = sample_product_atc_array.shift();
                      movealongproduct2(singleproductid);
                    } else successProceess();
                  });
              },
              error: function (error) {
                console.log("error data");
              },
            });
        function successProceess() {
          $.getJSON("/cart.js", function (cart) {
            $(".zoom-in-zoom-out").text(cart.item_count);
          }),
            $(".cart_icon").addClass("active"),
            $(".zoom-in-zoom-out").removeClass("active"),
            setTimeout(() => {
              $(".cart_icon").removeClass("active"),
                $(".zoom-in-zoom-out").addClass("active"),
                $this.removeClass("loading"),
                $this.find(".loading-overlay__spinner").addClass("hidden"),
                (window.location.href = "/checkout");
            }, "2000");
        }
      }
    ),
    $(".block__product-quick-view-global-content").length)
  ) {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`),
      window.addEventListener("resize", () => {
        let vh2 = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh2}px`);
      });
  }
  if (
    ($(document).on(
      "click",
      ".block__site-speed-service-form-submit, .block__site-speed-service-book-form-submit",
      function () {
        $(".block__site-speed-banner-form-submit").trigger("click");
      }
    ),
    $(".block__new-old-site-compare-image-box").length)
  ) {
    let initComparisons2 = function () {
      var x, i;
      x = document.getElementsByClassName("block__new-old-site-compare-before");
      let y = document.querySelector(".block__new-old-site-compare-after");
      for (i = 0; i < x.length; i++) compareImages(x[i]);
      function compareImages(img) {
        var slider,
          img,
          clicked = 0,
          w,
          h;
        (w = img.offsetWidth),
          (h = img.offsetHeight),
          $(window).resize(function () {
            (w = y.offsetWidth), (h = y.offsetHeight);
          }),
          (img.style.width = w / 2 + "px");
        var slider = document.querySelector(
          ".block__new-old-site-compare-img-scroll-bar"
        );
        (slider.style.left = w / 2 - slider.offsetWidth / 2 + "px"),
          slider.addEventListener("mousedown", slideReady),
          window.addEventListener("mouseup", slideFinish),
          slider.addEventListener("touchstart", slideReady),
          window.addEventListener("touchend", slideFinish);
        function slideReady(e) {
          e.preventDefault(),
            (clicked = 1),
            window.addEventListener("mousemove", slideMove),
            window.addEventListener("touchmove", slideMove);
        }
        function slideFinish() {
          clicked = 0;
        }
        function slideMove(e) {
          var pos;
          if (clicked == 0) return !1;
          (pos = getCursorPos(e)),
            pos < 0 && (pos = 0),
            pos > w && (pos = w),
            slide(pos);
        }
        function getCursorPos(e) {
          var a,
            x2 = 0;
          return (
            (e = e.changedTouches ? e.changedTouches[0] : e),
            (a = img.getBoundingClientRect()),
            (x2 = e.pageX - a.left),
            (x2 = x2 - window.pageXOffset),
            x2
          );
        }
        function slide(x2) {
          (img.style.width = x2 + "px"),
            (slider.style.left =
              img.offsetWidth - slider.offsetWidth / 2 + "px");
        }
      }
    };
    var initComparisons = initComparisons2;
    initComparisons2(),
      $(window).resize(function () {
        $(".block__new-old-site-compare-before").css(
          "width",
          "calc(100% - 50%)"
        ),
          $(".block__new-old-site-compare-img-scroll-bar").css(
            "left",
            "calc(100% - 58%)"
          );
      });
  }
  $(window).width() <= 768 &&
    $(".block__features-with-images").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: !0,
      draggable: !1,
      autoplay: !0,
      autoplaySpeed: 0,
      arrows: !1,
      speed: 8e3,
      pauseOnHover: !1,
      cssEase: "linear",
      responsive: [{ breakpoint: 500, settings: { slidesToShow: 1 } }],
    }),
    $(".block__features-with-images-column-list").slick({
      draggable: !1,
      infinite: !0,
      autoplay: !0,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: !1,
      autoplaySpeed: 0,
      speed: 8e3,
      pauseOnHover: !1,
      cssEase: "linear",
      vertical: !0,
      verticalSwiping: !0,
      adaptiveHeight: !0,
      responsive: [
        { breakpoint: 1350, settings: { slidesToShow: 4 } },
        { breakpoint: 1200, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 5 } },
        { breakpoint: 500, settings: { slidesToShow: 4 } },
        { breakpoint: 400, settings: { slidesToShow: 5 } },
      ],
    }),
    $(".block__loyalty-program-sub-image-one").slick({
      draggable: !1,
      infinite: !0,
      autoplay: !0,
      arrows: !1,
      autoplaySpeed: 0,
      speed: 8e3,
      pauseOnHover: !1,
      cssEase: "linear",
      vertical: !0,
      verticalSwiping: !0,
      adaptiveHeight: !0,
    }),
    $(".block__loyalty-program-sub-image-two").slick({
      draggable: !1,
      infinite: !0,
      autoplay: !0,
      arrows: !1,
      autoplaySpeed: 0,
      speed: 6e3,
      pauseOnHover: !1,
      cssEase: "linear",
      vertical: !0,
      verticalSwiping: !0,
      adaptiveHeight: !0,
    }),
    $(document).on(
      "change",
      ".block__product-size-chart-popup-type-input",
      function () {
        var data_id = $(this).attr("data_id");
        $(this)
          .parents(".block__product-size-chart-popup-contents")
          .find(".block__product-size-chart-details-type")
          .addClass("hidden"),
          $(this)
            .parents(".block__product-size-chart-popup-contents")
            .find(".block__product-size-chart-details-type#" + data_id)
            .removeClass("hidden");
      }
    ),
    $(document).on("click", ".block__product-size-variant", function () {
      $(".block__product-size-chart-popup-container").addClass("active"),
        $("body").addClass("overflow-hidden");
    }),
    $(document).on(
      "click",
      ".block__product-size-chart-popup-header-close",
      function () {
        $(".block__product-size-chart-popup-container").removeClass("active"),
          $("body").removeClass("overflow-hidden");
      }
    ),
    $(document).on("click", "body", function (event) {
      $(event.target).hasClass("block__product-size-chart-popup-container") &&
        ($(".block__product-size-chart-popup-container").removeClass("active"),
        $("body").removeClass("overflow-hidden"));
    }),
    $(document).on(
      "click",
      ".block__product-buy-more-save-add-to-cart-btn",
      function () {
        var data_qty = $(this).attr("data_qty");
        $(".block__product-qty-cart-box .quantity__input").val(data_qty),
          $(".block__product-qty-cart-box .product-form__submit").trigger(
            "click"
          );
      }
    ),
    $(document).on("click", ".block__product-reviews", function () {
      var target_offset = $(".yotpo-widget-instance").offset().top - 150;
      $("html, body").stop().animate({ scrollTop: target_offset }, 1e3);
    }),
    $(document).on("input", ".block__quantity-input", function () {}),
    $(window).innerWidth() < 1023 &&
      $(window).innerWidth() > 767 &&
      $(".build_new_store_section .main_image").css(
        "paddingTop",
        $(".build_new_store_section .new_store").height()
      );
}),
  $(window).on("load", function () {
    checkBorwser();
  }),
  $(document).ready(function () {
    checkBorwser();
  });
function checkBorwser() {
  navigator.userAgent.indexOf("Firefox") != -1 &&
    $(".block__bfcm-lock-in-rate-subcription-brw").addClass(
      "block__bfcm-lock-in-rate-subcription-brw-ff"
    );
}
