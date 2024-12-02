function updateBaseWidth () {
  const width = window.innerWidth
  // 根据视口宽度动态设置基准宽度
  if (width <= 768) {
    document.documentElement.style.setProperty('--base-width', 375)
  } else if (width <= 1200) {
    document.documentElement.style.setProperty('--base-width', 1200)
  } else if (width <= 1500) {
    document.documentElement.style.setProperty('--base-width', 1440)
  } else if (width <= 1700) {
    document.documentElement.style.setProperty('--base-width', 1800)
  } else if (width <= 1920) {
    document.documentElement.style.setProperty('--base-width', 2000)
  } else {
    document.documentElement.style.setProperty('--base-width', 1920)
  }
  // 根据视口宽度动态设置基准宽度 第二种
  if (width > 1700) {
    document.documentElement.style.setProperty('--base-size', 1920);
  } else if (width > 1500) {
    document.documentElement.style.setProperty('--base-size', 1700);
  } else if (width > 1400) {
    document.documentElement.style.setProperty('--base-size', 1440);
  } else if (width > 1200) {
    document.documentElement.style.setProperty('--base-size', 1350);
  }else if (width > 1024) {
    document.documentElement.style.setProperty('--base-size', 1250);
  } else if (width > 768) {
    document.documentElement.style.setProperty('--base-size', 1050);
  } else if (width > 680) {
    document.documentElement.style.setProperty('--base-size', 950);
  }
  else {
    document.documentElement.style.setProperty('--base-size', 750);
  }
  // if (width > 1700) {
  //   baseWidth = 1700
  //   document.documentElement.style.setProperty('--base-width', 1700)
  // } else if (width > 1500) {
  //   baseWidth = 1600
  //   document.documentElement.style.setProperty('--base-width', 1600)
  // } else if (width > 1400) {
  //   baseWidth = 1440
  //   document.documentElement.style.setProperty('--base-width', 1440)
  // } else if (width > 1200) {
  //   baseWidth = 1300
  //   document.documentElement.style.setProperty('--base-width', 1350)
  // } else if (width > 1024) {
  //   baseWidth = 1250
  //   document.documentElement.style.setProperty('--base-width', 1250)
  // } else if (width > 768) {
  //   baseWidth = 1000
  //   document.documentElement.style.setProperty('--base-width', 1050)
  // } else if (width > 680) {
  //   baseWidth = 1000
  //   document.documentElement.style.setProperty('--base-width', 950)
  // } else {
  //   baseWidth = 750
  //   document.documentElement.style.setProperty('--base-width', 750)
  // }
}
updateBaseWidth()
window.addEventListener('resize', updateBaseWidth)
