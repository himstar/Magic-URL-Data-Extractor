function call_product(url) {

    if (url.indexOf("snapdeal") >= 0)
    {
        var title = $('#productOverview h1').text();
        var img = $("#bx-slider-left-image-panel").find("li:nth-child(1)").find("img").attr("src");
        var price = $('.payBlkBig').text();
        var seller = "Snapdeal";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("flipkart") >= 0)
    {
        var title = $('h1').text();
        var img = $(".sfescn").attr("src");
        var price = $('_1vC4OE _37U4_g').text();
        var seller = "FlipKart";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("amazon") >= 0)
    {
        var title = $('#productTitle').text();
        var img = $('#imgTagWrapperId').find("img").attr('src');
        var price = $(".a-span12").find('.a-size-medium.a-color-price').text();
        var seller = "Amazon";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("jabong") >= 0)
    {
        var title = $('.product-title').text();
        var img_data = $.parseJSON($(".slide img").attr('data-img-config'));
        var parseImg = img_data[320];
        var parseImg_base = img_data.base_path;
        var img = parseImg_base+parseImg; 
        var price = $('.actual-price').text();
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("myntra") >= 0)
    {
        var title = $('.application-base h1').text();
        var img = $("#thumbnails-vertical-container").find("button:nth-child(1) img").attr('src');
        var price = $('.application-base .pdp-price').text();
        var seller = "Myntra";
        product_push(title,price,img,url,seller);
  
    }
    else if (url.indexOf("stalkbuylove") >= 0)
    {
        var title = $("#ajaxres h1").text();
        var img = $("#ajaxres .my_image_box").attr('src');
        var price = $("#ajaxres .no-display").find(".price").text();
        var seller = "StalkBuyLove";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("voonik") >= 0)
    {
        var title = $("#ajaxres .col-md-12.titleRow").text();
        var img = $("#ajaxres .thumbimage").attr('src');
        var price = $("#ajaxres .size_latest").attr("price");
        var seller = "Voonik";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("utsavfashion") >= 0)
    {
        var title = $("#ajaxres h1").text();
        var img = $("#ajaxres #image-main").attr('src');
        var price = $("#ajaxres .price-box").find(".price").text();
        var seller = "Utsavfashion";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("cbazaar") >= 0)
    {
        var title = $("#ajaxres h1 .productHeading").text();
        var img = $("#ajaxres #imgPrdUpperThumb").attr('largeimage');
        var price = $("#ajaxres #hdnPrice").val();
        var seller = "C Bazaar";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("purplle") >= 0)
    {
        var title = $("#ajaxres h1").text();
        var img = "http:"+ $("#ajaxres .zoomcontainer").find(".p-zoom.product-img").attr('data-image');
        var price = $("#ajaxres #product_price").val();
        var seller = "Purplle";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("mirraw") >= 0)
    {
        var title = $("#ajaxres .nopadding").find("a").text();
        var img = "http:"+ $("#ajaxres #design_gallery").find(".original").attr('src');
        var price = $("#ajaxres .discount_old_price").find("h3").text();
        var seller = "Mirraw";
        product_push(title,price,img,url,seller);
    }
    else if (url.indexOf("ebay") >= 0)
    {
        var title = $("#ajaxres #itemTitle").text();
        var img = $("#ajaxres #icImg").attr('src');
        var price = $("#ajaxres #prcIsum").text();
        var seller = "ebay";
        product_push(title,price,img,url,seller);
    }
    else 
    {
        $("#ajaxres, .search-product").empty();
        $(".search-product").append("<img src='img/error.PNG' class='img-responsive'><br><br><div class='alert alert-danger'><strong>Sorry!</strong> I'm unable to fetch data for :</div><br><p>  "+ url +"  </p>");
    }
}

function product_push(title,price,img,url,seller) {
    $("#ajaxres, .search-product").empty();
    if ( typeof img == "undefined") {
        $(".search-product").append("<div class='alert alert-danger'><strong>Sorry !</strong>  Please provide "+ seller +" product page URL only </div>");
    }
    else {
        $(".search-product").append("<div class='product--pink'><div class='product_inner'> <img alt='" + title + "' src='" + img + "' class='img-responsive'><h2> " + title + "  </h2><p> Price: Rs. " + price + "</p> <a href='" + url + "' class='btn btn-success' target='_blank'> Buy Now </a></div></div>");
        $("#pname").val(title);
        $("#purl").val(url);
        $("#pimg").val(img);
        $("#pprice").val(price);
        $("#pseller").val(seller);
    }
}