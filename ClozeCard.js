

var ClozeCard = function(text, cloze) {
  this.cloze = cloze;
  this.fullText = text; 
  this.partial = function(){
    var str = text;
    var clozeLength = cloze.length;
    var txtLength = text.length;
    var n = str.search(cloze);
    if (n >= 0){
      var firstPart = str.substr(0,n);
      var thirdPart = str.substr(n+clozeLength,txtLength); 
      var answer = firstPart + "..." + thirdPart
      return answer;
    } else {
      var answer = "Error: \"" + cloze + "\" does not appear in \"" + text + "\""; 
      return answer;
    };
  }
};

module.exports = ClozeCard;




