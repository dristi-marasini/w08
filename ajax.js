(function ($) {

    $('#btnLoadText').click(function () { 
myResult();
     
     });
    $('#btnAjax').click(function () { callRestAPI() });
  
    // Perform an asynchronous HTTP (Ajax) API request.
    function callRestAPI() {
      var root = 'https://jsonplaceholder.typicode.com'
      $.ajax({
        url: root + '/posts/1',
        method: 'GET'
      }).then(function (response) {
        console.log(response);
        $('#showResult').html(response.body);
      });
    }
    function myResult(){
      $("#showResult").load("show.txt", function(responseTxt, statusTxt, xhr){
        if(statusTxt == "success")
            alert("External content loaded successfully!");
        if(statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
    }
  })(jQuery);
 