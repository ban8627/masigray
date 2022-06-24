// html, css, js 로딩완료
$(document).ready(function () {
  // 메인 메뉴 기능
  let header = $('.header');
  let header_top = $('.header-top');

  let header_main = $('.header-main');
  let gnb = $('.gnb');
  gnb.mouseenter(function () {
    header_main.addClass('header-main-show');
  });
  gnb.mouseleave(function () {
    header_main.removeClass('header-main-show');
  });

  // 스크롤시 기능
  $(window).scroll(function () {
    // 스크롤바의 위치를 파악한다.
    let temp = $(window).scrollTop();
    // .header-top 숨기기
    if (temp > 0) {
      header.addClass('header-fix');
      header_top.addClass('header-top-close');
    } else {
      header.removeClass('header-fix');
      header_top.removeClass('header-top-close');
    }

  });
  // 모바일 메뉴 기능
  // 1. 펼침메뉴 기능
  let mb_menu_li = $('.mb-menu > li');
  let mb_mainmenu = $('.mb-menu > li > a');
  let mb_submenu = $('.mb-submenu');
  let mb_icon_rot = $('.mb-icon-rot');

  $.each(mb_mainmenu, function (index) {
    $(this).click(function (event) {
      // href 막기
      event.preventDefault();

      // 클릭하면 현재 포커스 클래스가 있는지 검토
      let temp = $(this).hasClass('mb-menu-focus');
      if (temp == true) {

        // 포커스 적용해제
        $(this).removeClass('mb-menu-focus');
        // 아이콘 리버스 제거
        $(this).removeClass('mb-icon-rot');
        // 펼쳐진 해당 서브메뉴 닫기
        mb_submenu.eq(index).hide();
      } else {
        // 일단 모두 숨겨라
        mb_submenu.hide();
        //다른 메뉴의 포커스 색상 해제
        mb_mainmenu.removeClass('mb-menu-focus');
        mb_mainmenu.removeClass('mb-icon-rot');
        // 포커스 색상 적용하기
        $(this).addClass('mb-menu-focus');
        // 아이콘 리버스
        $(this).addClass('mb-icon-rot');
        // 클릭된 번호만 보여라
        mb_submenu.eq(index).show();
      }
    });
  });
  // 모바일 메뉴 보이기 & 숨기기 기능
  let mb_bt = $('.mb-bt');
  let mb_dim = $('.mb-dim');
  let mb_close = $('.mb-close');
  let mb_wrap = $('.mb-wrap');

  mb_bt.click(function (event) {
    event.preventDefault();
    mb_dim.show();
    mb_wrap.addClass('mb-wrap-open');
  });
  mb_close.click(function (event) {
    event.preventDefault();
    // 주메뉴 색상 제거
    mb_mainmenu.removeClass('mb-menu-focus');
    // 서브메뉴 모두 닫기
    mb_submenu.hide();
    // 사라지는 모션 실행
    mb_wrap.removeClass('mb-wrap-open');
    // 딤 제거
    mb_dim.hide();
  });
  // 반응처리
  $(window).resize(function(){
    // 화면의 너비
    let temp = $(window).width();
    if(temp > 700){
      mb_submenu.hide();
      mb_mainmenu.removeClass('mb-menu-focus');
      mb_mainmenu.removeClass('mb-icon-rot');
      mb_wrap.removeClass('mb-wrap-open');
      mb_dim.hide();
    }
  });
  // 위로가기
  let go_top = $('.gotop');
  go_top.click(function(){
    $('html').animate({
      scrollTop:0
    },1000)
  });

});

// html, css, js, 멀티미디어까지 로딩완료
window.onload = function () {
  // visual 슬라이드
  new Swiper('.sw-visual', {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next'
    }
  });

  // items 슬라이드
  new Swiper('.sw-items', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      prevEl: '.sw-items-prev',
      nextEl: '.sw-items-next'
    },

    pagination: {
      el: '.sw-items-pg'
    }

  });

  // Bevarage 슬라이드
  new Swiper('.sw-bevarage', {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-bevarage-prev',
      nextEl: '.sw-bevarage-next'
    },

    pagination: {
      el: '.sw-bevarage-pg',
      type: 'fraction'
    }
  });
}