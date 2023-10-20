import "./style.css";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Init Lenis
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Hero transition
const heroContainer = document.querySelector(".hero");
const heroMedia = heroContainer.querySelector(".media");
const heroTitle = heroContainer.querySelector(".hero__title");

gsap.to(heroMedia, {
  y: "10vh",
  scale: 1,
  scrollTrigger: {
    start: 0,
    end: window.innerHeight,
    scrub: true,
  },
});

gsap.to(heroTitle, {
  y: "7vh",
  scrollTrigger: {
    start: 0,
    end: window.innerHeight,
    scrub: true,
  },
});

// Scale Grid transition
const scaleGridContainer = document.querySelector(".scaling-grid");
const scaleGridContent = scaleGridContainer.querySelector(
  ".scaling-grid__content"
);
const scaleGridMedia = scaleGridContainer.querySelectorAll(".media");
const scaleGridMainMedia = scaleGridContainer.querySelector(
  ".scaling-grid__item--main"
);
const scale =
  Math.round((window.innerWidth / scaleGridMainMedia.offsetWidth) * 10) / 10;

gsap.to(scaleGridContent, {
  scale: scale,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(scaleGridMedia, {
  scale: 2,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(scaleGridContent.querySelector(".scaling-grid__item:first-child"), {
  y: -100,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(scaleGridContent.querySelector(".scaling-grid__item:nth-child(2)"), {
  x: -100,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(scaleGridContent.querySelector(".scaling-grid__item:nth-child(4)"), {
  x: 100,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

gsap.to(scaleGridContent.querySelector(".scaling-grid__item:nth-child(5)"), {
  y: 100,
  ease: "power3.inOut",
  scrollTrigger: {
    trigger: scaleGridContainer,
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

// Animate in content blocks
const animateBlocks = document.querySelectorAll(".animate-block");

animateBlocks.forEach((block) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: block,
      start: "top bottom-=300px",
    },
  });

  tl.fromTo(
    block,
    {
      y: 30,
      opacity: 0,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }
  );
});
