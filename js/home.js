/**
 * Created by shaobo on 2018/2/5.
 */
var box = $(".box");
var divs = box.children();
var lisColor = ['deeppink','yellow','greenyellow','red','deepskyblue','purple'];
divs.each(function(index,el){
  var ul = $("<ul></ul>");
  for(var i = 0; i < 9; i++){
    var li = $("<li></li>");
    li.css({"backgroundColor":lisColor[index]});
    ul.append(li);
  }
  $(el).append(ul);
});

var lisPosition = [];
for(var i = 0; i < 54; i++){
  lisPosition.push(parseInt(Math.random()*350));
}
$('li').each(function(index,el){
  $(el).css({'left':lisPosition[index],"top":lisPosition[index]});
});
$('li').each(function(index,el){
  $(el).animate({'left':0,"top":0},3000);
});
