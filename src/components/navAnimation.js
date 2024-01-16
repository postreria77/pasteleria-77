import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let navAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-outline",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

navAnimation
  .to("#main-title", {
    opacity: 0,
    display: "none",
    duration: 0.15,
    ease: "none",
  })
  .to(".nav", { backgroundColor: "hsl(0, 0%, 0%)" }, "<")
  .to(
    ".nav-container",
    {
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      paddingLeft: "var(--page-padding)",
      paddingRight: "var(--page-padding)",
    },
    "<"
  )
  .to(".logo", { width: "10rem" }, "<");

gsap.from(".header-image", { opacity: 0, duration: 1 });
