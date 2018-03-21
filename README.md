# stopgame_plusgun


var arTmp = new Array();
$('.vote-plus').each(function(){
if($(this).hasClass("voted")) return;
var elClass = $(this).attr('class'); 
var arrClassess = elClass.split(' '); 
elClass = arrClassess[1]; 

var arr = elClass.split('-');
var idComment = arr[2];
arTmp[arTmp.length] = idComment;


});

var f = function(i){
i = i | 0;
i++;


console.log(arTmp[i]); 
rate_comment(arTmp[i], this, 'topic', 'plus');

if(i<arTmp.length)
setTimeout(f.bind(null,i),1000); 
}

f();var arTmp = new Array();
$('.vote-plus').each(function(){
if($(this).hasClass("voted")) return;
var elClass = $(this).attr('class'); 
var arrClassess = elClass.split(' '); 
elClass = arrClassess[1]; 

var arr = elClass.split('-');
var idComment = arr[2];
arTmp[arTmp.length] = idComment;


});

var f = function(i){
i = i | 0;
i++;


console.log(arTmp[i]); 
rate_comment(arTmp[i], this, 'topic', 'plus');

if(i<arTmp.length)
setTimeout(f.bind(null,i),1000); 
}

f();
