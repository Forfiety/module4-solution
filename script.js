(function () {

    var names = ["Sam", "John", "Jay-Z", "Jay-jay", "Yawi", "Mel", "Aron", "Joseph", "Shaun", "Jake"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toUpperCase();
    
      if (firstLetter == 'J') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
    
    (function(window) {
        var speakWord = "Hello";
        var helloSpeaker = function (name) {
            console.log(speakWord + " " + name);
        }
    
        window.helloSpeaker = helloSpeaker;
    
    })(window);
    
    (function(window) {
        var speakWord = "Good Bye";
        var byeSpeaker = function (name) {
              console.log(speakWord + " " + name);
        }
        
        window.byeSpeaker = byeSpeaker;
    
    })(window);