$(document).ready(function(){
    $('.slider').bxSlider({
        auto:'true',
        autoHover:'true',
        speed:'300',
        controls:'true',
        touchEnabled:'ture',
    });
    $(window).resize(function(){
        drawChart();
    });
    
    ////////////////////////헤더///////////////////////////
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

///////////////////////푸터////////////////////////////////////
                    $('.container').click(function(){
                        $('.container_con').slideToggle();
                    });
////////////////////스크롤//////////////////////////////
   $(window).scroll(function(){
       sc=$(window).scrollTop();
    if(sc>=0 && sc>500){
        $('.nav_btn_line').css('backgroundColor','#35268f')
        $('.logo_img2').css('display','none')
        $('.logo_img1').css('display','block')
    }else if(sc>=0 && sc<500){
        $('.nav_btn_line').css('backgroundColor','#ffb317')
        $('.logo_img1').css('display','none')
        $('.logo_img2').css('display','block')
    }
});
//////////////////////////구글차트////////////////////////////////
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
      ['02/10', 638000, 648000, 661000, 669000],
      ['02/11', 631000, 644000, 648000, 656000]
      , ['02/12', 635000, 636000, 650000, 660000]
      , ['02/13', 624000, 629000, 647000, 654000]
      , ['02/14', 630000, 635000, 657000, 661000]
      , ['02/17', 651000, 658000, 660000, 666000]
      // Treat first row as data as well.
    ], true);
            var options = {
                legend: 'none'
            };
            var chart = new google.visualization.CandlestickChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }

});