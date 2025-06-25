// AboutSectio

// aboutAnimation.js
import { useEffect, useRef } from 'react';

export const useAboutAnimation = () => {
  const aboutSectionRef = useRef(null);
  const lastScroll = useRef(0);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutSectionRef.current) return;

      const section = aboutSectionRef.current;
      const overlay = section.querySelector('.overlay-left');
      const image = section.querySelector('.image-side');
      const texts = section.querySelectorAll('.overlay-left h1, .overlay-left p');

      // Get scroll position relative to section
      const rect = section.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = rect.top + scrollY;
      const sectionHeight = section.offsetHeight;
      const scrollProgress = (scrollY - sectionTop) / sectionHeight;

      // Calculate movement offset
      const scrollOffset = (scrollY - lastScroll.current) * 0.15;

      // Apply transformations
      if (overlay) {
        overlay.style.transform = `translateY(${scrollOffset}px)`;
      }
      
      if (image) {
        image.style.transform = `translateY(${scrollOffset * 0.5}px) scale(${
          1 + scrollProgress * 0.05
        })`;
      }

      texts.forEach(text => {
        text.style.transform = `translateY(${scrollOffset * 1.2}px)`;
      });

      lastScroll.current = scrollY;
      animationFrameId.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set up animation
    animationFrameId.current = requestAnimationFrame(handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return aboutSectionRef;
};