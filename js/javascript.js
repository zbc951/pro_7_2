
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

//nav選單效果
$(function(){
    $('.lang1').click(function(){
        $('nav').attr('class','navisited1')
    })
    $('.lang2').click(function(){
        $('nav').attr('class','navisited2')
    })
    $('.lang3').click(function(){
        $('nav').attr('class','navisited3')
    })
})

//nav出現
$(function(){
    $('.topic').click(function(){
        $('body').addClass('navslide')
    })
    $('.navic').click(function(){
        $('body').removeClass('navslide')
    })
    $('.blackbg').click(function(){
        $('body').removeClass('navslide')
    })
    $('.navlist li').click(function(){
        $('body').removeClass('navslide')
    })
})

//下選單按鈕效果
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

//signup顯示密碼按鈕
$(function(){
    $('.passwordbut').mouseenter(function(){
        $('.password').attr('type','text')
    })
    $('.passwordbut').mouseleave(function(){
        $('.password').attr('type','password')
    })
})

//signup出現
$(function(){
    $('.b2').click(function(){
        $('body').addClass('signupapp')
    })
    $('.blackbg').click(function(){
        $('body').removeClass('signupapp')
    })
    $('.conbut').click(function(){
        $('body').removeClass('signupapp')
    })
    $('.inli2').click(function(){
        $('body').attr('class','signupapp')
    })
})

//login出現
$(function(){
    $('.b1').click(function(){
        $('body').addClass('loginapp')
    })
    $('.blackbg').click(function(){
        $('body').removeClass('loginapp')
    })
    $('.conbut').click(function(){
        $('body').removeClass('loginapp')
    })
    $('.upli1').click(function(){
        $('body').attr('class','loginapp')
    })
})

//safari active問題
document.addEventListener("touchstart", function() {},false);