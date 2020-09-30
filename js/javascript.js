
//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
	})
})

//下選單動畫
$(function(){
    $('.but1').click(function(){
        $('main').attr('class','visited1')
    })
    $('.but2').click(function(){
        $('main').attr('class','visited2')
    })
    $('.but3').click(function(){
        $('main').attr('class','visited3')
    })
    $('.but4').click(function(){
        $('main').attr('class','visited4')
    })
    $('.but5').click(function(){
        $('main').attr('class','visited5')
    })
    $('.but6').click(function(){
        $('main').attr('class','visited6')
    })
})