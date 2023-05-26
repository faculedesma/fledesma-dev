import { useEffect, useRef } from 'react';

interface UseMagnetOptions {
  timingDelay?: number;
}

export const useMagnet = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  options: UseMagnetOptions = {}
) => {
  const { timingDelay = 0 } = options;
  const containerRef = useRef<T | null>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    const element = ref.current;

    if (!containerElement || !element) return;

    const handleMouseMove = (event: MouseEvent) => {
      const containerRect =
        containerElement.getBoundingClientRect();
      const x =
        event.clientX -
        containerRect.left -
        element.offsetWidth / 2;
      const y =
        event.clientY -
        containerRect.top -
        element.offsetHeight / 2;

      if (animationRef.current) {
        animationRef.current.cancel();
      }

      animationRef.current = element.animate(
        [{ transform: `translate(${x}px, ${y}px)` }],
        {
          duration: timingDelay,
          fill: 'forwards'
        }
      );
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }

      animationRef.current = element.animate(
        [
          { transform: element.style.transform },
          { transform: '' }
        ],
        {
          duration: timingDelay,
          fill: 'forwards'
        }
      );
    };

    containerElement.addEventListener(
      'mousemove',
      handleMouseMove
    );
    containerElement.addEventListener(
      'mouseleave',
      handleMouseLeave
    );

    return () => {
      containerElement.removeEventListener(
        'mousemove',
        handleMouseMove
      );
      containerElement.removeEventListener(
        'mouseleave',
        handleMouseLeave
      );
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [ref, timingDelay]);

  return containerRef;
};
