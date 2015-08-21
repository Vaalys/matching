$(document).ready(function(){

  var square = $(".square");
  var board = $('.board');
  var numButton = $("span");
  var pickedCardArray = [];
  var pieceChoices = {
    "ten": 5,
    "twenty": 10,
    "thirty": 15
  }

  numButton.click(function(){
    board.empty();
    numButton.css('background', '#E1CEF3');
    this.style.background = "gray";
    var buttonValue = this.className;
    var pieces = pieceChoices[buttonValue]
    gamePieces(countPieces(pieces));
    gamePiecesMatch(countPieces(pieces));
    clickSquares();
  })

  var countPieces = function(pieces){
    var piecesCount = [];
    for (var counter = 1; counter <= pieces; counter++) {
      piecesCount.push(counter);
    }
      return piecesCount;
  }

  var shuffleArray = function(){
    // I need to shuffle the ^ array of game pieces
  }

  var gamePieces = function(count){
    // I need to have two each's ? To make the div pairs
    // no, maybe have something like 1.1
    // Could I increment the loop for even/odd numbers
    // say 1 & 2 are matches, 3 & 4 a match... so on
    // FFS, Ammie.
    $.each(count, function(index, value){
        var createSquare = document.createElement('div');
        createSquare.setAttribute('class', 'imgbox');
        createSquare.setAttribute('id', value);
        createSquare.setAttribute('style', "background-image: url('https://robohash.org/" + value + ".png')");
        board.append(createSquare);

        var coverSquare = document.createElement('div');
        coverSquare.setAttribute('class', 'square');
        coverSquare.setAttribute('id', value);
        $('#' + value).append(coverSquare);
    });
  };

  var gamePiecesMatch = function(count){
    $.each(count, function(index, value){
        var createTwo = document.createElement('div');
        createTwo.setAttribute('class', 'imgbox');
        createTwo.setAttribute('id', value + '1');
        createTwo.setAttribute('style', "background-image: url('https://robohash.org/" + value + ".png')");
        board.append(createTwo);

        var coverTwo = document.createElement('div');
        coverTwo.setAttribute('class', 'square');
        coverTwo.setAttribute('id', value + '1');

        $('#' + value + '1').append(coverTwo);
    });
  };

  var clickSquares = function(){
      $(".square").click(function(){
        // console.log('weee, clicked!');
        if(pickedCardArray.length < 2) {
          $(this).addClass('magictime boingOutDown');
          // charAt could allow me to check for matches later
          // BUT not really because what about 10? GAAAAAAH IDIOT
          pickedCardArray.push(this.id.charAt(0))
          console.log(pickedCardArray);

          if(pickedCardArray.length === 2){
            var twoSquares = $('.magictime')
            console.log('miss!');

            // function that compares the values in the array
            setTimeout(function(){
              twoSquares.removeClass('magictime boingOutDown').addClass('square');
              pickedCardArray = []
            }, 1200);
          }
        }
      });
    }

});
