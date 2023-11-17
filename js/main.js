$(document).ready(function () {
  function e() {
    $(".nav-toggle").click(function () {
      $(".nav-links").toggleClass("open");
    });
  }
  function threeSlider() {
    $("#slide .prev, #slide .next").click(function () {
      var $this = $(this),
        curBack = $(".slider").find(".back"),
        posBack = $(".slider").children().index(curBack),
        curCurr = $(".slider").find(".current"),
        posCurr = $(".slider").children().index(curCurr),
        curFront = $(".slider").find(".front"),
        posFront = $(".slider").children().index(curFront),
        totalPics = $(".slider").children().length;

      $(".slider").addClass("swap");

      setTimeout(function () {
        if ($this.hasClass("next")) {
          if (
            posFront < totalPics - 1 &&
            posCurr < totalPics - 1 &&
            posBack < totalPics - 1
          ) {
            $(".back").removeClass("back").next().addClass("back");
            $(".current").removeClass("current").next().addClass("current");
            $(".front").removeClass("front").next().addClass("front");
          } else {
            if (posFront === totalPics - 1) {
              $(".back").removeClass("back").next().addClass("back");
              $(".current").removeClass("current").next().addClass("current");
              $(".slider li").removeClass("front").first().addClass("front");
            } else if (posCurr === totalPics - 1) {
              $(".back").removeClass("back").next().addClass("back");
              $(".slider li")
                .removeClass("current")
                .first()
                .addClass("current");
              $(".front").removeClass("front").next().addClass("front");
            } else {
              $(".slider li").removeClass("back").first().addClass("back");
              $(".current").removeClass("current").next().addClass("current");
              $(".front").removeClass("front").next().addClass("front");
            }
          }
        } else {
          if (posBack !== 0 && posCurr !== 0 && posFront !== 0) {
            $(".back").removeClass("back").prev().addClass("back");
            $(".current").removeClass("current").prev().addClass("current");
            $(".front").removeClass("front").prev().addClass("front");
          } else {
            if (posBack === 0) {
              $(".slider li").removeClass("back").last().addClass("back");
              $(".current").removeClass("current").prev().addClass("current");
              $(".front").removeClass("front").prev().addClass("front");
            } else if (posCurr === 0) {
              $(".back").removeClass("back").prev().addClass("back");
              $(".slider li").removeClass("current").last().addClass("current");
              $(".front").removeClass("front").prev().addClass("front");
            } else {
              $(".back").removeClass("back").prev().addClass("back");
              $(".current").removeClass("current").prev().addClass("current");
              $(".slider li").removeClass("front").last().addClass("front");
            }
          }
        }

        $(".slider").removeClass("swap");
      }, 300);
    });
  }
  e(), threeSlider();
});
