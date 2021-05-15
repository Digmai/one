
    
 

    (function ($) {
        jQuery(document).ready(function(){
            jQuery('.testimonials_mans').on('click',function(){
                $(this).next().animate({'display':'inline'},1000);
            });
        })();
      })(jQuery);