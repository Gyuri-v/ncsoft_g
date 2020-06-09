$(document).ready(function(){
    //header _ logo scroll
    $(window).scroll(function(){
           sc=$(window).scrollTop();
        if(sc>=0 && sc>380){
            $('.nav_btn_line').css('backgroundColor','#35268f')
            $('.logo_img2').css('display','none')
            $('.logo_img1').css('display','block')
        }else if(sc>=0 && sc<380){
            $('.nav_btn_line').css('backgroundColor','#ffb317')
            $('.logo_img1').css('display','none')
            $('.logo_img2').css('display','block')
        }
    });
    /*nav_btn*/
    $('.nav_btn').click(function(){
        $('.nav').animate({'right':'0'});
    })
    $('.nav_close').click(function(){
        $('.nav').animate({'right':'-100%'});
    })
    $(".nav nav ul li a").click(function(){
        $(".nav").animate({'right':'-100%'});
    })

    /*nav_lng_accordian*/
    $('.gnb_title').on('click', function(){ 
        var content = $(this).siblings('.lnb'); 
        if (content.css('display') == 'none') { 
          $('.lnb').slideUp(); 
          content.slideDown(); 
          }
        else { 
          content.slideUp(); 
       }
    });
    
    //footer and nav fillter 
    $('.container').click(function(){
        $('.container_con').toggle();
    })
})