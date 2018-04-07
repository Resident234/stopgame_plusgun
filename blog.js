var f = function(i){
i = i | 0;
i++;

var intRandomBlogID = randomInteger(1, 100000);
console.log(intRandomBlogID); 
rating(intRandomBlogID, this, 'topic', 'plus');

if(i < 500)
setTimeout(f.bind(null,i),1000); 
}

f();  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
