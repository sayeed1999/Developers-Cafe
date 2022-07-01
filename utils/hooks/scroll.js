import { useEffect } from "react";

/// 'useScroll': use this hook to scroll the page at the lastly scrolled previous location in screen if any
export const useScroll = () => {
  useEffect(() => {
    const posY = sessionStorage.getItem(window.location.pathname) ?? 0;
    scroll(0, posY);
  }); // -> no dependency array - runs on every render.
};

/// 'useScrollHandler': use this hook to execute some method when the user scrolls nearly at the bottom of a page
export const useScrollHandler = (execute) => {
  let onSleep = true;
  setTimeout(() => (onSleep = false), 500); // give him some time!

  useEffect(() => {
    addEventListener("scroll", scrollHandler);
    return () => {
      removeEventListener("scroll", scrollHandler);
    };
  });

  const scrollHandler = () => {
    if (
      window.innerHeight + window.scrollY + 50 >=
      document.body.offsetHeight
    ) {
      if (!onSleep) {
        execute();
        onSleep = true;
        setTimeout(() => (onSleep = false), 2000);
      }
    }
  }; // -> scroll handler not working with [] empty dependency array!
};
