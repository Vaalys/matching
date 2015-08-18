$(document).ready(function(){

  var square = $(".square");
  var board = $('.board');
  var numButton = $("span");
  var pickedCardArray = []
  var ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // var twenty = [ten.push(ten)]
  var shuffled = [1, 2, 3, 4, 5]

  // console.log(ten)
  // console.log(twenty)


  numButton.click(function(){
    $("span").css('background', '#E1CEF3');
    this.style.background = "gray";
    var buttonValue = this.innerHTML;
    console.log(buttonValue);
    // gamePieces(buttonValue);
    gamePieces(ten);
  })

  var shuffleArray = function(){
  }

  var gamePieces = function(count){
    $.each(count, function(index, value){
        var board = $('.board');
        var square = $('.square');
        var createSquare = document.createElement('div');
        createSquare.setAttribute('class', "square");
        createSquare.setAttribute('id', value);
        $('.board').append(createSquare);
    });
  };



  $(".square").click(function(){
    console.log('weee');
    // var square = $(".square");

    if(pickedCardArray.length < 2) {
      $(this).addClass('magictime boingOutDown');
      pickedCardArray.push(this.id)

      if(pickedCardArray.length === 2){
        var twoSquares = $('.magictime boingOutDown')
        // function that compares the values in the array
        setTimeout(function(){
          $('.magictime').removeClass('magictime boingOutDown').addClass('square');
          pickedCardArray = []
        }, 1500);
      }
    }
  });

  var showImage = function(){
  }

});
