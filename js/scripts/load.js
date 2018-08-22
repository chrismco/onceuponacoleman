
   function loadJS(){
    var theScript = document.createElement("script");
    theScript.setAttribute("type", "text/javascript");
    theScript.setAttribute("src", "js/scripts/global.js");
    document.getElementsByTagName("body")[0].appendChild(theScript);
   }
   
   $(function () {
     
        // function loadStyleSheet(src) {
        //   if (document.createStyleSheet) {
        //     document.createStyleSheet(src);
        //   }
        //   else {
        //     $("head").append($("<link rel='stylesheet' href='" + src + "' type='text/css' media='screen' />"));
        //   }
        // };
    $(document).ready(function () {

        //Carousel
        $('.responsive').slick({
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 576,
              settings: {
                  arrows:false,
                  dots:true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      });
        loadJS()

    })