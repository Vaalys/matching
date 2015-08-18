$(document).ready(function(){

  var square = $(".square");
  var board = $('.board');
  var numButton = $("span");
  var pickedCardArray = []
  var ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  var tenString = ['one', 'two', 'three', 'four', 'five']
  // console.log(ten)

  numButton.click(function(){
    board.empty();
    numButton.css('background', '#E1CEF3');
    this.style.background = "gray";
    // var buttonValue = this.innerHTML;
    var buttonValue = this.className;
    console.log(buttonValue);
    // gamePieces(buttonValue);
    gamePieces(tenString);
    gamePiecesMatch(tenString);
    clickedSquares();
  })

  var shuffleArray = function(){
  }

  var gamePieces = function(count){
    // I need to have two each's ? To make the div pairs
    // no, maybe have something like 1.1
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
        createTwo.setAttribute('class', 'imgbox two');
        createTwo.setAttribute('id', value + ' ' + value);
        createTwo.setAttribute('style', "background-image: url('https://robohash.org/" + value + ".png')");
        board.append(createTwo);

        var coverTwo = document.createElement('div');
        coverTwo.setAttribute('class', 'square');
        coverTwo.setAttribute('id', value + ' ' + value);

        $('#' + value + ' ' + value).append(coverTwo);
    });
  };

  var clickedSquares = function(){
      $(".square").click(function(){
        console.log('weee, clicked!');

        if(pickedCardArray.length < 2) {
          $(this).addClass('magictime boingOutDown');
          pickedCardArray.push(this.id)
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

  var showImage = function(){
  }

});
