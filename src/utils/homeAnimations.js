import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
gsap.to("nav", {position: "fixed"})

const navTl = gsap.timeline({
    scrollTrigger: {
      trigger: "header",
      start: "10% top",
      end: "12% top",
      scrub: 1,
    },
});

navTl.from("#menuCanvas", { filter: "invert(1)" });
navTl.from("nav", { backgroundColor: "rgba(0, 0, 0, 0)", color: "white", paddingTop: "3rem" }, "<");
navTl.from("#navLogo", { scale: 1.25 })
});
