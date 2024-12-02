/**
 *  @class
 *  @function MediaWithTabs
 */
if (!customElements.get("media-with-tabs")) {
  class MediaWithTabs extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.buttons = Array.from(
        this.querySelectorAll(".media-with-tabs--button")
      );
      this.slider = this.querySelector("slide-show");
      this.buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
          this.buttonClick(button, i);
        });
      });
    }
    buttonClick(button, i) {
        if (button.parentElement.classList.contains("active")) {
            button.parentElement.classList.remove("active");
            button.setAttribute("aria-expanded", "false");
          } else {
            let flkty = Flickity.data(this.slider);
            [].forEach.call(this.buttons, function (el) {
              el.parentElement.classList.remove("active");
              el.setAttribute("aria-expanded", "false");
            });
    
            button.parentElement.classList.add("active");
            button.setAttribute("aria-expanded", "true");
            flkty.select(i);
          }
    }
  }
  customElements.define("media-with-tabs", MediaWithTabs);
}

function toggleDivVisibility() {
  const narrowScreenDiv = document.querySelector(".div-for-narrow-screen");
  const wideScreenDiv = document.querySelector(".div-for-wide-screen");

  if (window.innerWidth <= 768) {
    narrowScreenDiv.style.display = "block";
    wideScreenDiv.style.display = "none";
  } else {
    narrowScreenDiv.style.display = "none";
    wideScreenDiv.style.display = "block";
  }
}

// 在窗口大小发生变化时更新可见性
window.addEventListener("resize", toggleDivVisibility);

// 页面加载时进行一次初始设置
toggleDivVisibility();
