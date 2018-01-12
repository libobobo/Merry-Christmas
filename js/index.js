/**
 * Created by shaobo on 2018/1/12.
 */
$(function () {
  $('#fullpage').fullpage({
    navigation: true
  });
  //标题动画
  var $title = $(".section .title");
  $title.on("mouseenter",function(){
    $(this).children("h6").addClass("active").removeClass("leave");
  });
  $title.on("mouseleave",function(){
    $(this).children("h6").addClass("leave").removeClass("active");

  })
});