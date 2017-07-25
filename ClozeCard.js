

var ClozeCard = function(text, cloze) {
  this.fullText = text; 
  this.cloze = cloze;

  // Non-prototype version starts here
  // ====================================================================
  // this.partial = function(){
  //   var str = this.fullText;
  //   var keyWord = this.cloze;
  //   var txtLength = str.length;
  //   var clozeLength = keyWord.length;
  //   var n = str.search(keyWord);
  //   if (n >= 0){
  //     var firstPart = str.substr(0,n);
  //     var thirdPart = str.substr(n+clozeLength,txtLength); 
  //     var answer = firstPart + "..." + thirdPart
  //     return answer;
  //   } else {
  //     var answer = "Error: \"" + cloze + "\" does not appear in \"" + text + "\""; 
  //     return answer;
  //   };
  // }
  // ================= non-prototype version ends here =================
};

// Prototype method code starts here.
// ======================================================================

ClozeCard.prototype.partial = function(){
  var str = this.fullText;
  var keyWord = this.cloze;
  var n = str.search(keyWord);
  var answer = "";
  // The if statement tests if the keyWord is found in str. 
  if (n >= 0){
    answer = str.replace(keyWord, "...");
  } else {
    answer = "Error: \"" + keyWord + "\" does not appear in \"" + str + "\""; 
  };
  return answer;
};

// ================== prototype method ends here =========================

module.exports = ClozeCard;




