/* Main app js file */

$(document).ready(function () {

  $('.add-row').click(function () {
    var inputData = {};
    var number1 = $('#number1').val();
        action = $('#action').val();
        number2 = $('#number2').val();

    // put values in array
    inputData.opd1 = number1;
    inputData.opd2 = number2;
    inputData.opn = action;

    //apply mock-backend server result here
    var response = mockServerComputation(inputData);
    if (number1 == '' || number2 == '') { alert('number1 or number2 is empty'); } else {
        // addition option
        if (action == 'add') {
          var expectedSum = (parseInt(number1)) + parseInt(number2);
          if (response != expectedSum) {
            passed = 'no';
            var markupHighlight = "<tr style='background-color:#ffaf9a;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedSum + '</td><td>' + response + '</td><td>' + passed + '</td><td><span class="deletebtn" title="Remove row">x</></td></tr>';
            $('table tbody').append(markupHighlight);
          } else {
            passed = 'yes';
            var markup = "<tr style='background-color:#ffe484;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedSum + '</td><td>' + response + '</td><td>' + passed + '</td><td><span class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markup);
          }
        }

        // substraction option
        if (action == 'sub') {
          var expectedDif = (parseInt(number1)) - parseInt(number2);
          if (response != expectedDif) {
            passed = 'no';
            var markupHight = "<tr style='background-color:#ffaf9a;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedDif + '</td><td>' + response + '</td><td>' + passed + '</td><td><span  class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markupHight);
          } else {
            passed = 'yes';
            var markup = "<tr style='background-color:#ffe484;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedDif + '</td><td>' + response + '</td><td>' + passed + '</td><td><span class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markup);
          }
        }

        // multiplication option
        if (action == 'mul') {
          var expectedResult = (parseInt(number1)) * parseInt(number2);
          if (response != expectedResult) {
            passed = 'no';
            var markupHight = "<tr style='background-color:#ffaf9a;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedResult + '</td><td>' + response + '</td><td>' + passed + '</td><td><span class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markupHight);
          } else {
            passed = 'yes';
            var markup = "<tr style='background-color:#ffe484;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedResult + '</td><td>' + response + '</td><td>' + passed + '</td><td><span  class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markup);
          }
        }

        // division controller
        if (action == 'div') {
          var expectedRes = (parseInt(number1)) / parseInt(number2);
          if (response != expectedRes) {
            passed = 'no';
            var markupHight = "<tr style='background-color:#ffaf9a;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedRes + '</td><td>' + response + '</td><td>' + passed + '</td><td><span  class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markupHight);
          } else {
            passed = 'yes';
            var markup = "<tr style='background-color:#ffe484;'><td>" + number1 + '</td><td>' + number2 + '</td><td>' + expectedRes + '</td><td>' + response + '</td><td>' + passed + '</td><td><span  class="deletebtn" title="Remove row">x</span></td></tr>';
            $('table tbody').append(markup);
          }
        }
      }
    
  });// end main function

  // Find and remove selected table rows
$(document).on('click', 'span.deletebtn', function () {
  $(this).closest('tr').remove();
  return false;
});
});