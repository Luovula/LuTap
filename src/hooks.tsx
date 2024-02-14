import React, { useEffect, useState } from "react";

interface WindowSize {
    width: number | 0;
    height: number | 0;
  }
  
  function useWindowSize(): WindowSize {
    // Initialize state with undefined to account for server-side rendering,
    // where window object is not available
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window size
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
  
      // Add event listener
      window.addEventListener("resize", handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }

  const useScrollPosition = (): number => {
    const [scrollTop, setScrollTop] = useState<number>(0);
  
    useEffect(() => {
      // Find the container element by its ID
      const element = document.getElementById("root");
  
      const handleScroll = () => {
        // Use element's scrollTop for scroll containers
        const scrollPosition = element ? element.scrollTop : 0;
        setScrollTop(scrollPosition);
        console.log(scrollPosition);
      };
  
      // Attach the event listener to the element instead of window
      element?.addEventListener("scroll", handleScroll);
  
      return () => element?.removeEventListener("scroll", handleScroll);
    }, []); // Empty array ensures that effect runs on mount and cleanup on unmount
  
    return scrollTop;
  };

  export {useWindowSize, useScrollPosition};