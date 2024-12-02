// 获取所有具有类名 'summaryLestp' 的元素
const summaryLestpElements = document.querySelectorAll('.summaryBox .summaryLestp');

// 遍历所有 .summaryLestp 元素并设置它们的宽度
summaryLestpElements.forEach(summaryLestpElement => {
  const summaryLestpWidth = summaryLestpElement.offsetWidth;
  const summaryBoxElement = summaryLestpElement.closest('.summaryBox');
  if (summaryBoxElement) {
    const summaryBoxWidth = summaryBoxElement.offsetWidth;
    const foldLanElement = summaryLestpElement.nextElementSibling;
    if (foldLanElement && foldLanElement.classList.contains('foldLan')) {
      const foldLanWidth = summaryBoxWidth - summaryLestpWidth-80;
      foldLanElement.style.width = foldLanWidth + 'px';
    }
  }
});