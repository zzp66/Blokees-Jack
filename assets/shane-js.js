$(document).ready(function () {
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init()
  $('.shane-home-comment .swiper-slide').mouseenter(function () {
    $('.shane-home-comment .swiper-slide').removeClass('active')
    $(this).addClass('active')
  })
  $('.home-video-columns .video-hover').mouseenter(function () {
    $('.home-video-columns .video-hover').removeClass('active')
    $(this).addClass('active')
  })
  //导航自定义的下拉js
  $('.shane-menu-01').click(function () {
    var topCdan = $(document).scrollTop()
    $(this).toggleClass('active')
    $('.shane-menu-fromleft').toggleClass('active')
    $('.full-menu').toggleClass('shane-change-color')
  })
  $('.shane-menu-fromleft>div').click(function () {
    $(this).toggleClass('active')
  })
  var selectDefValue = $('.shane-input-radio').val()
  $('.shane-show-pro-name span').text(selectDefValue)
  $('.shane-input-radio').change(function () {
    var selectedValue = $(this).val()
    $('.shane-show-pro-name span').text(selectedValue)
  })
})
$('.product-v-img .product-card-swatch').mouseenter(function () {
  var pro_v_name = $(this).attr('data-pname')
  $(this).parents('.product-v-img').siblings('.product-v-name').text(pro_v_name)
})

const progressCircle = document.querySelector('.autoplay-progress svg')
const progressContent = document.querySelector('.autoplay-progress span')
var swiperBanner = new Swiper('.homebannerSwiper', {
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  on: {
    autoplayTimeLeft (s, time, progress) {
      progressCircle.style.setProperty('--progress', 1 - progress)
      progressContent.textContent = `${Math.ceil(time / 1000)}s`
    }
  }
})
var swiperColumn = new Swiper('.imagecolumnSwiper', {
  slidesPerView: 1.1,
  spaceBetween: 15,
  navigation: {
    nextEl: '.shane-image-columns .columns-prev',
    prevEl: '.shane-image-columns .columns-next'
  },
  breakpoints: {
    640: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 1.9,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 2.05,
      spaceBetween: 30
    }
  }
})
var swiperColumn = new Swiper('.procolumnSwiper', {
  slidesPerView: 1.3,
  spaceBetween: 15,
  navigation: {
    nextEl: '.shane-pro-columns .columns-prev',
    prevEl: '.shane-pro-columns .columns-next'
  },
  breakpoints: {
    640: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 15
    },
    930: {
      slidesPerView: 2.1,
      spaceBetween: 15
    },
    1260: {
      slidesPerView: 2.95,
      spaceBetween: 15
    }
  }
})
var swiper = new Swiper('.promotedSwiper', {
  speed: 1000,
  navigation: {
    nextEl: '.shane-pro-promoted .pro-promoted-prev',
    prevEl: '.shane-pro-promoted .pro-promoted-next'
  },
  on: {
    init: function () {
      swiperAnimateCache(this) //隐藏动画元素
      swiperAnimate(this) //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this) //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    }
  }
})
var swiperShowcase = new Swiper('.showcaseSwiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.showcaseSwiper .showcase-text-prev',
    prevEl: '.showcaseSwiper .showcase-text-next'
  },
  breakpoints: {
    769: {
      slidesPerView: 5,
      spaceBetween: 80
    }
  }
})
var swiperColumn = new Swiper('.commentcolumnSwiper', {
  slidesPerView: 1.2,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.shane-home-comment .columns-prev',
    prevEl: '.shane-home-comment .columns-next'
  },
  breakpoints: {
    769: {
      slidesPerView: 3.95,
      spaceBetween: 15
    }
  }
})
var swiperSocial02 = new Swiper('.socialImgSwiper', {
  loop: true,
  noSwiping: true,
  noSwipingClass: 'stop-swiping',
  pagination: {
    el: '.swiper-pagination'
  }
})
var swiperSocial01 = new Swiper('.socialTextSwiper', {
  loop: true,
  navigation: {
    nextEl: '.home-social-swiper .social-text-prev',
    prevEl: '.home-social-swiper .social-text-next'
  },
  controller: {
    control: swiperSocial02
  }
})
