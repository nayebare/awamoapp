/* Main app js file */

$(document).ready(function () {

  $('.add-row').click(function () {
    var inputData = {};
    var number1 = $('#number1').val();
        action = $('#action').val();
        number2 = $('#number2').val();
        expected = 0;

    // put values in array
    inputData.opd1 = number1;
    inputData.opd2 = number2;
    inputData.opn = action;

if(number1 == '' || number2 == '' ){alert('number1 or number2 is empty');} else{

 if(action == 'no'){alert('please select operation');} else{
 
    // addition option
    if (action == 'add') {
      $.post('/api/add', inputData, function (expected) {
        var response = (Math.ceil(parseInt(number1)) + Math.ceil(parseInt(number2)));
        if (response != expected) {
          passed = 'no';
          var markupHighlight = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markupHighlight);
        } else {
          passed = 'yes';
          var markup = "<tr backgroud-color='lime-gren'><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        }

      }, 'JSON');

    }
    // substraction option

    if (action == 'sub') {
      $.post('/api/sub/', inputData, function (expected) {
        var response = (Math.ceil(parseInt(number1)) - Math.ceil(parseInt(number2)));
        if (response != expected) {
          passed = 'no';
          var markupHight = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markupHight);
        } else {
          passed = 'yes';
          var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        }
      }, 'JSON');

    }

    // multiplication option
    if (action == 'mul') {
      $.post('/api/mul/', inputData, function (expected) {
        var response = (Math.ceil(parseInt(number1)) * Math.ceil(parseInt(number2)));
        if (response != expected) {
          passed = 'no';
          var markupHight = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markupHight);
        } else {
          passed = 'yes';
          var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        }

      }, 'JSON');

    }

    // division controller
    if (action == 'div') {
      $.post('/api/div/', inputData, function (expected) {
        var response = (Math.ceil(parseInt(number1)) / Math.ceil(parseInt(number2)));
        if (response != expected) {
          passed = 'no';
          var markupHight = "<tr style='background-color: #4CAF50;'><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markupHight);
        } else {
          passed = 'yes';
          var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        }

      }, 'JSON');

    }
  }
}

  });// end main function
  
  // Find and remove selected table rows
  $('.delete-row').click(function () {
    $('table tbody').find('input[name="record"]').each(function () {
      if ($(this).is(':checked')) {
        var result = confirm("Are you sure  you want to delete this item?");
        $(this).parents('tr').remove();
      }
      else {
        alert('please select item');
      }
    });

  });
});
