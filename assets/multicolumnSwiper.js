      const elements = document.querySelectorAll('.multicolumnSwiperreview');

      let maxHeight = 0;
      elements.forEach(element => {
        const elementHeight = element.clientHeight;
        maxHeight = Math.max(maxHeight, elementHeight);
      });

      elements.forEach(element => {
        element.style.height = maxHeight +15+ 'px';
      });