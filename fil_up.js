$(document).ready(function(){
    $("#myFilter").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#productTable").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });