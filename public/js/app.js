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

    // input fields should not be empty

    //if no option is selected  rise an error


    // addition option
    if (action == 'add') {
      $.post('/add', inputData, function (expected) {
        var response = (Math.ceil(parseInt(number1)) + Math.ceil(parseInt(number2)));
        if (response != expected) {
          passed = 'no';
          var markupHight = "<tr><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        } else {
          passed = 'yes';
          var markup = "<tr backgroud-color='lime-gren'><td><input type='checkbox' name='record'></td><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expected + '</td><td>' + response + '</td><td>' + passed + '</td></tr>';
          $('table tbody').append(markup);
        }

      }, 'JSON');

    }
    // substraction option

    if (action == 'sub') {
      $.post('/sub/', inputData, function (expected) {
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
      $.post('/mul/', inputData, function (expected) {
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
      $.post('/div/', inputData, function (expected) {
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

  });

  // Find and remove selected table rows
  $('.delete-row').click(function () {
    $('table tbody').find('input[name="record"]').each(function () {
      if ($(this).is(':checked')) {
        $(this).parents('tr').remove();
      }
    });
  });
});
