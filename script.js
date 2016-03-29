
var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>'
  + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
}; //this is template for list item

var main = function() {
  $('form').submit(function(){
    var text = $('#todo').val(); //this assigns the text in the form to a variable called 'text'
    var html = template(text); //this takes template with text and assigns to a variable called html
    $(html).appendTo('.list'); //this then appends template to list in html
    $('#todo').val(""); // clears form by reassigning it to an empty string
    return false;  //prevents default action for this event
  });

  $('.list').on("click", ".glyphicon-remove", function(event){ //event listens for clicking on 'X' within list
    $(this).parent().remove(); //clicking on event then results in removing entire list item by removing parent
  });

  $('.list').on("click", ".glyphicon-star", function(event){ //event listens for clicking on star within list
    $(this).toggleClass("active");//clicking results in star becoming active
  });
};

$(document).ready(main); //ensures document is loaded before js runs
