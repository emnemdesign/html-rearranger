var $body = $('body');
var $headerTwo = $('<h2>');
var $ulTwo = $('<ul>');
var $headerOne = $('<h2>');
var $ulOne = $('<ul>');
var $ul = $('<ul>');
var $li = $('ul li');

$body.append($headerTwo);
$headerTwo.html('Below ground veggies');
$body.append($ulTwo);
$body.append($headerOne);
$headerOne.html('Above ground veggies');
$body.append($ulOne);

$li.each(function () {
  if ($(this).hasClass('below')) {
    $ulTwo.append($(this));
  } else {
    $ulOne.append($(this));
  }
});
