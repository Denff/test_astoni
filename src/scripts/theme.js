/*global jQuery*/


(function($) {
    $(document).ready(function(){


        $(".header__burger").click(function(){
            $(".header__burger, .nav").toggleClass("active");
            $("body").toggleClass("lock");
        });

        if ($(".main-slider").length) {
            $(".main-slider").slick({
                slidesToShow: 1,
                dots: true,
                speed: 500,
                infinite: false,
                appendArrows: ".slider__arrows",
                prevArrow:".slider__arrow-prev",
                nextArrow:".slider__arrow-next",
                appendDots: ".slider__dots",
                dotsClass: "slider__dots",
            });
        }

        $("input").on("focus", function(){
            if($(this).hasClass("error")){
                $(this).removeClass("error");
            }
        });

        $("form").on("submit", function(e) {
            e.preventDefault();

            var $form = $(this);
            var nameVal = $form.find("input.name").val();
            // var surnameVal = $form.find("input.surname").val();
            // var messageVal = $form.find("textarea.massage").val();

            
            if (nameVal == false) {
                $form.find("input.name").addClass("error");
            }
            else if (nameVal == true) {
                $form.find("input.name").removeClass("error");
            }
            

            if(nameVal == true) {
                $.ajax({
                    type: "POST",
                    url: "sendmail.php",
                    data: $form.serialize(),
                    success: function () {
                        $.fancybox.close();
                        $.fancybox.open({
                            src  : ".modal-success",
                            type : "inline"
                        });
                        setTimeout(function(){$.fancybox.close();}, 3000);
                    }
                });
            }
        });


    });

})(jQuery);
