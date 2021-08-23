$(document).ready(function () {
  $(".rules__right").on("click", function () {
    $(".slider").toggleClass("left");
    $(".rules__right").toggleClass("color1");
    console.log("ere");
  });
  $(".money__body-title li").on("click", function () {
    $(".money__body-title li").removeClass("actived");
    $(this).addClass("actived");

    $("[data-content]").removeClass("active");
    $(`[data-content="${$(this).data("open-block")}"`).addClass("active");
  });

  $(".right__title a").on("click", function () {
    $(".right__title a").removeClass("activ");
    $(this).addClass("activ");
    $(".content__right-body p").removeClass("hide");
    $(".agree__rules").removeClass("hide");
    $(".password").attr("placeholder", "Придумайте пароль");
    $(".content__right").removeClass("hight");
  });
  $(".right__enter").on("click", function () {
    $(".content__right-body p").addClass("hide");
    $(".agree__rules").addClass("hide");
    $(".password").attr("placeholder", "Пароль");
    $(".content__right").addClass("hight");
  });

  //   $(".apple__ap").on("mouseup", function () {
  //     $(".footer button::after").removeClass("galaxy");
  //     $(".footer button::after").addClass("iphone");
  //   });

  //   $(".apple__ap1").on("hover", function () {
  //     // $(".footer button::after").addClass("iphone");
  //     $(".footer button::after").removeClass("iphone");

  //     $(".footer button::after").addClass("galaxy");
  //   });

  $(".apple__ap").hover(function () {
    $(".apps img").removeClass("xyita");

    $(".apps img").removeClass("galaxy");
    $(".apps img").addClass("iphone");
    $(".apps img").addClass("xyita");
    console.log("sd");
  });
  $(".apple__ap1").hover(function () {
    $(".apps img").removeClass("xyita");

    $(".apps img").removeClass("iphone");
    $(".apps img").addClass("galaxy");
    $(".apps img").addClass("xyita");
    console.log("sd");
  });

  $(".cashout__link").on("click", function () {
    $(".cashout__link").removeClass("act");
    $(this).addClass("act");
    $(".main__change").removeClass("yet");
    $(`[data-about="${$(this).data("actived-block")}"`).addClass("yet");
  });

  $(".change__content img").on("click", function () {
    $(".change__content img").removeClass("click");
    $(this).addClass("click");

    $(".text__change-content").removeClass("visible");

    $(`[data-click="${$(this).data("actived-change")}"`).addClass("visible");

    // $(".main__change").removeClass("yet");
    // $(`[data-about="${$(this).data("actived-block")}"`).addClass("yet");
  });

  $(".email").on("click", function () {
    $(".email").addClass("col");
  });

  $(".password").on("click", function () {
    $(".password").addClass("col");
  });

  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".email"); // тут указываем ID элемента

    if (
      !div.is(e.target) && // если клик был не по нашему блоку
      div.has(e.target).length === 0
    ) {
      // и не по его дочерним элементам
      div.removeClass("col"); // скрываем его
    }
    var div1 = $(".password");
    if (!div1.is(e.target) && div1.has(e.target).length === 0) {
      div1.removeClass("col");
    }
  });
  $(document).mouseup(function (e) {
    // событие клика по веб-документу
    var div = $(".email"); // тут указываем ID элемента
    div.removeClass("col"); // скрываем его
  });
  var div1 = $(".password");
  div1.removeClass("col");

  $(" .block__program-right li ").on("click", function () {
    $(".block__program-right li").removeClass("change");
    $(this).addClass("change");
  });
  $("#1").on("click", function () {
    $("#01").addClass("net");
    $("#02").removeClass("net");
  });
  $("#2").on("click", function () {
    $("#02").addClass("net");
    $("#01").removeClass("net");
  });

  $(".about__mainbody-down span").on("click", function () {
    $(".about__mainbody-down p").toggleClass("est");
  });
  $(".header__burger").on("click", function () {
    $(".header__burger-menu").addClass("unhide");
  });
  $(".burger__close-icon").on("click", function () {
    $(".header__burger-menu").removeClass("unhide");
  });

  //   $(window).resize(function () {
  //     if ($(window).width() < 979) {
  //       $('.social').addClass('hide');
  //     } else {
  //       $('.social').removeClass('hide');
  //     }
  //   });
});
