/**
 * Created by shaobo on 2018/1/12.
 */
$(function () {
  $('#fullpage').fullpage({
    navigation: true,
    onLeave: function (index, nextIndex, direction) {
      if (index == 1 && nextIndex == 2) {
        $(".page_one img").show().animate({
          bottom:-($(window).height()-50)
        },2000,function(){
          $(".page_one img").removeClass("img_rotate").animate({
            bottom: -320,
            left: 700
          },3000,function(){
            $(".page_one img").animate({
              opacity: 0
            },400);
            //显示超级玛丽
            $(".page_two .pillar").removeClass("show");
            $(".page_two span").removeClass("show");
            $(".page_two .wall").removeClass("show");
            $(".page_two .superMary").removeClass("show").animate({
                bottom:150
            },3000,function(){
              $(".page_two .superMary").attr("src","img/2.png").animate({
                  left:200,
                  bottom:0
              },2000,function(){
                $(".page_two .superMary").attr("src","img/3.png").animate({
                  left:400
                },3000,function(){
                  $(".page_two .superMary").attr("src","img/1.png");
                  $(".page_two .mushroom").removeClass("show").animate({
                    bottom:140
                  },1000,function(){
                     $(".page_two .mushroom").animate({
                        left:560
                    },1500,function(){
                        $(".page_two .mushroom").addClass("show");
                    });
                     $(".page_two .superMary").attr("src","img/2.png").animate({
                        left:540,
                        bottom:140
                     },1500,function(){
                        $(".page_two .superMary").attr("src","img/3.png").addClass("changeSize");
                        setTimeout(function(){
                          $(".page_two .superMary").css("width","100").removeClass("changeSize");
                        },3000);
                     });
                  });
                });
              });
            });
          });
        });
      }
    }
  });
  //标题动画
  var $title = $(".section .title");
  $title.on("mouseenter", function () {
    $(this).children("h6").addClass("active").removeClass("leave");
  });
  $title.on("mouseleave", function () {
    $(this).children("h6").addClass("leave").removeClass("active");
  })
});