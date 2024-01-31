$(function(){
    // gnb
    let oneDepth = $('#header .gnb > li'), 
        twoDepth = oneDepth.children('.twoD'), 
        thrBtn = twoDepth.find('.thrBt'), 
        gnbBg = $('#header .gnbBg'),
        leftArea = $('#header .leftArea');

    oneDepth.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
        console.log('마우스엔터')
    })
    oneDepth.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
        console.log('마우스떠남')
    })

    let orgH = gnbBg.height(),
        longH = gnbBg.height() + 70;

    thrBtn.click(function(){
        if( $(this).hasClass('on') ){
            $(this).removeClass('on');
            $(this).next('.thrD').hide();
            gnbBg.css( 'height' , orgH );
        }else{
            $(this).addClass('on');
            $(this).next('.thrD').show();
            gnbBg.css( 'height' , longH );  
        }
    })

    // 모바일 gnb
    let openBt = $('.mHeader .menuBtn'),
        mMArea = $('.mMenuArea'),
        closeBt = mMArea.find('.closeBt'),
        oneD = $('.gnbArea').children('.oneD'),
        twoD = $('.gnbArea').children('.twoD'),
        thrBt = twoD.children('.thrBt'),
        thrD = twoD.children('.thrD');

    openBt.click(function(){
        mMArea.animate({'left' : '0'},600);
    })

    closeBt.click(function(){
        mMArea.animate({'left' : '-100%'},600);
    })

    oneD.click(function(){
        twoD.slideUp();
        oneD.removeClass('on')

        if( !$(this).next('.twoD').is(':visible') ){
            $(this).next('.twoD').slideDown();
            $(this).addClass('on');
        }
    });

    thrBt.click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('on');
    })

    // 전시영역 배경이미지 교체
    let mainCon1LI = $('.mainCon1List > li'),
        mainCon1Bg = $('.mainCon1Bg > div');

    console.log(mainCon1LI);
    console.log(mainCon1Bg);

    mainCon1LI.each(function( idx ){
        $(this).hover(function(){
            mainCon1Bg.eq(idx).stop().fadeIn(600);
        } , function(){
            mainCon1Bg.eq(idx).stop().fadeOut(300);
        })
    })

    // top버튼
    let topBtn = $('.topBtn');
    topBtn.click(function(){
        $('html').animate({'scrollTop' : '0'}, 800, 'easeInOutExpo')
    })

    // 윈도우 스크롤되면 애니메이션
    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop(), // 윈도우 스크롤된 정도
            mCon1T = $('.mainCon1').offset().top, // 수직 위치값
            mCon2T = $('.mainCon2').offset().top,
            mCon3T = $('.mainCon3').offset().top,
            footT = $('#footer').offset().top;
        
        if( winScrollT >= mCon1T &&  winScrollT <= mCon2T ){
            // mCon1T 애니메이션
            $('.mainCon1 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }else if( winScrollT >= mCon2T &&  winScrollT <= mCon3T){
            // mCon2T 애니메이션
            $('.mainCon2 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }else if(winScrollT >= mCon3T &&  winScrollT <= footT){
            // mCon3T 애니메이션
            $('.mainCon3 .mainTit').animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : '0'},600,'swing')
            $('.mainCon3 .mainNews').delay(400).animate({'opacity' : 1 , 'top' : '0'},600,'swing')
        }

        // 윈도우 스크롤 되면 헤더 고정시키기
        if( winScrollT > 100 ){
            $('#header').css('position' , 'fixed');
            $('#header').addClass('on');
        }else{
            $('#header').css('position' , 'relative');
            $('#header').removeClass('on');
        }
    })

    // swiper 설정
    var swiper = new Swiper(".mainSlide", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

})