import {nextTick, onMounted} from "vue";

// @ts-ignore
import gsap from "../static/libs/gsap/gsap.min.js";
// @ts-ignore
import ScrollTrigger from "../static/libs/gsap/ScrollTrigger.min.js";

export default function useScrollTrigger() {
  onMounted(() => {
    if (ScrollTrigger.isTouch === 1) return;

    nextTick(() => {
      let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

      itemsL.forEach((item: HTMLElement) => {
        gsap.fromTo(item, {opacity: 0, x: -50}, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-100',
            scrub: true
          }
        })
      })

      let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

      itemsR.forEach((item: HTMLElement) => {
        gsap.fromTo(item, {opacity: 0, x: 50}, {
          opacity: 1, x: 0,
          scrollTrigger: {
            trigger: item,
            start: '-750',
            end: 'top',
            scrub: true
          }
        })
      });
    });
  })
}
