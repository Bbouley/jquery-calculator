$(document).ready(function(){

  var $operator = $('.operator:not(#cancel, #calc)');

  var $divide = $('.operator:nth-child(2)').html();
  var $multiply = $('.operator:nth-child(3)').html();
  var $subtract = $('.operator:nth-child(7)').html();
  var $add = $('.operator:nth-child(11)').html();

  var $numbers = $('span:not(.operator)');

  $operator.on('click', function(){
    $('#screen').append('x');

});

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
    return Number(calcString);
  }

  function divide(number1, number2){
    var answer = number1/number2;
  }
