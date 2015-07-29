$(document).ready(function(){

  var $buttons = $('.operator');

  $buttons.on('click', function(){
    $(this).css('background', 'red');
  });

  var $numbers = $('span:not(.operator)');

  $numbers.on('click', function(){
    var numClicked = $(this).html();
    displayNum(numClicked);
  });

  function displayNum(text){
    var num = parseInt(text);
    $('#screen').append(num);
  }



});



  function makeNumber(string){
    var calcString = string;
    console.log(Number(calcString));
  }
