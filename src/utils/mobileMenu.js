import * as rive from "@rive-app/canvas-lite";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function() {
  if (window.innerWidth < 640) {
    const layout = new rive.Layout({
      fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: rive.Alignment.Center,
    });

    const r = new rive.Rive({
      src: "/menu.riv",
      canvas: document.getElementById("mobileMenu"),
      autoplay: true,
      stateMachines: "Toggle",
      layout: layout,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        console.log(r);
      },
    });
  }
});

//document.addEventListener("DOMContentLoaded", function() {
//  const menuTl = gsap.timeline();

  //menuTl.from(".mobileMenu", {
//});
