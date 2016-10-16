  $( "#submiturl" ).click( function get_data(url){
      $("#ajaxres, .search-product").empty();
      $(".search-product").append("<img src='img/loader.gif' class='img-responsive'><br><img src='img/load-look.gif' class='img-responsive'>");
      $("#pr-form")[0].reset();
      var url = $("#url").val();

      var container = $('#ajaxres');

        if(url.match('^http')){
            $("#alert").css("display", "none");
            $("#productModal").modal("show");
          // call YQL
          $.getJSON("http://query.yahooapis.com/v1/public/yql?"+
                    "q=select%20*%20from%20html%20where%20url%3D%22"+
                    encodeURIComponent(url)+
                    "%22&format=xml'&callback=?",
            // this function gets the data from the successful 
            // JSON-P call
            function(data){
              // if there is data, filter it and render it out
              if(data.results[0]){
                var data = filterData(data.results[0]);
                container.html(data);
                call_product(url);

              } else {
                var errormsg = '<p>Error: Unable load the page.</p>';
                container.html(errormsg);
              }
            }
          );
        } 
    else {
      $("#alert").css("display", "block");
    }

  });
  function filterData(data){
    data = data.replace(/<?\/body[^>]*>/g,'');
    data = data.replace(/[\r|\n]+/g,'');
    data = data.replace(/<--[\S\s]*?-->/g,'');
    data = data.replace(/<noscript[^>]*>[\S\s]*?<\/noscript>/g,'');
    data = data.replace(/<script[^>]*>[\S\s]*?<\/script>/g,'');
    data = data.replace(/<script.*\/>/,'');
    return data;
  }
