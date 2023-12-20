$(function () {
  /*nav*/
  $(".all").on("click", function () {
    $(".nav").addClass("on");
    $(".dim").show();
  });
  $(".close").on("click", function () {
    $(".nav").removeClass("on");
    $(".dim").hide();
  });

  /*main*/
  $(window).resize(function () {
    var container = $(".full-bg");
    var currentWindow = $(this);
    windowWidth = currentWindow.width();
    windowHeight = currentWindow.height();
    (broswerRatio = windowWidth / windowHeight), (imageRatio = 1920 / 1280);

    if (imageRatio > broswerRatio) {
      container.css({
        height: "100%",
        width: windowHeight * imageRatio,
        left: (windowWidth - windowHeight * imageRatio) / 2,
        top: 0,
      });
    } else {
      container.css({
        height: windowWidth / imageRatio,
        width: "100%",
        left: 0,
        top: (windowHeight - windowWidth / imageRatio) / 2,
      });
    }
  }); //resize
  $(window).trigger("resize");
});
