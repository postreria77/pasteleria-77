import * as rive from "@rive-app/canvas-lite";
import gsap from "gsap";

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 640) {
    const layout = new rive.Layout({
      fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
      alignment: rive.Alignment.Center,
    });

    const r = new rive.Rive({
      src: "/menu.riv",
      canvas: document.getElementById("menuCanvas"),
      autoplay: true,
      stateMachines: "Toggle",
      layout: layout,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });

    const navLinks = document.getElementById("navMenu").children;

    const openMenu = gsap.timeline({ paused: true });

    openMenu.to('nav', {color: 'black'})
    openMenu.to("#menuCanvas", { filter: "invert(0)" }, "<");
    openMenu.fromTo(
      "#navMenu",
      {
        translateY: "-100%",
      },
      {
        translateY: 0,
        duration: 0.8,
        ease: "power4.out",
      }, "<"
    );
    openMenu.fromTo(
      navLinks,
      { opacity: 0 },
      { opacity: 1, stagger: 0.05 },
      ">-0.6",
    );

    const closeMenu = gsap.timeline({ paused: true });

    closeMenu.to('nav', {color: 'inherit'})
    closeMenu.fromTo(
      navLinks,
      { opacity: 1 },
      { opacity: 0, duration: 0.05, stagger: 0.05 },
    );
    closeMenu.to("#navMenu", {
      translateY: "-100%",
      duration: 0.5,
      ease: "power2.out",
    }, "<0.3");

    function onRiveEventReceived(riveEvent) {
      const eventData = riveEvent.data;

      if (eventData.name === "openMenu") {
        console.log("Menu is opening");
        openMenu.time(0).play();
      } else if (eventData.name === "closeMenu") {
        console.log("Menu is closing");
        closeMenu.time(0).play();
      }
    }
    // Add event listener and provide callback to handle Rive Event
    r.on(rive.EventType.RiveEvent, onRiveEventReceived);
  }
});

document.addEventListener("DOMContentLoaded", function () {});
