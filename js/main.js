$(document).ready(function(){

  var $number1 = 0;

  var $number2 = 0;

  var $operator = $('.operator:not(#cancel, #calc)');

  var $divide = $('.operator:nth-child(2)');
  var $multiply = $('.operator:nth-child(3)');
  var $subtract = $('.operator:nth-child(7)');
  var $add = $('.operator:nth-child(11)');

  var $numbers = $('span:not(.operator)');

  var $action = '';

  var $screenString = $('#screen').html();
  var $secondNum = $screenString.split('x', '\u00F7');


  $divide.on('click', function(){
    $action = '/';
    $number1 = parseInt($('#screen').html());
    $('#screen').append($divide.html());
  });

  $multiply.on('click', function(){
    $action = 'x';
    $number1 = parseInt($('#screen').html());
    $('#screen').append($multiply.html());
  });

  $subtract.on('click', function(){
    $action = '-';
    $number1 = parseInt($('#screen').html());
    $('#screen').append($subtract.html());
  });

  $add.on('click', function(){
    $action = '+';
    $number1 = parseInt($('#screen').html());
    $('#screen').append($add.html());
  });

  $operator.on('click', function(){
    var numOnScreen = parseInt($('#screen').html());
    var $number1 = numOnScreen;
  });

  $('#calc').on('click', function(){
    var $screenString = $('#screen').html();
    var $secondNum = $screenString.split(/\u00F7|x|-|\+/);
    $number2 = parseInt($secondNum[1]);
    $('#screen').html();

      if ($action ==='/'){
        var answer = divide($number1, $number2);
        $('#screen').html(answer);
      } else if ($action === 'x'){
        var answer1 = multiply($number1, $number2);
        $('#screen').html(answer1);
      } else if ($action === '-'){
        var answer2 = subtract($number1, $number2);
        $('#screen').html(answer2);
      } else if ($action === '+'){
        var answer3 = addition(number1, number2);
        $('#screen').html(answer3);
      }

  });

  $numbers.on('click', function(){
    var numClicked = $(this).html();
    displayNum(numClicked);
  });

  function displayNum(text){
    var num = parseInt(text);
    $('#screen').append(num);
  }

  $('#cancel').on('click', function(){
    $('#screen').html('');
  });



});



  function makeNumber(string){
    var calcString = string;
    return Number(calcString);
  }

  function divide(number1, number2){
    var answer = number1/number2;
    return answer.toFixed(4);
  }

  function addition(number1, number2){
    var answer = number1 + number2;
    return answer.toFixed(4);
  }

  function subtract(number1, number2){
    var answer = number1 - number2;
    return answer.toFixed(4);
  }

  function multiply(number1, number2){
    var answer = number1 * number2;
    return answer.toFixed(4);
  }
