$(document).ready(function(){
  $("#myFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#productTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});