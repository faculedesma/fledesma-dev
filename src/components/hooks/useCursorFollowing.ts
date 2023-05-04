import { useEffect, useState, RefObject } from 'react';

interface CursorFollowingProps {
  targetRef: RefObject<HTMLElement>;
}

export const useCursorFollowing = ({
  targetRef
}: CursorFollowingProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!targetRef.current) return;

      const targetRect =
        targetRef.current.getBoundingClientRect();
      const isInsideTarget =
        event.clientX >= targetRect.left &&
        event.clientX <= targetRect.right &&
        event.clientY >= targetRect.top &&
        event.clientY <= targetRect.bottom;

      setIsFollowing(isInsideTarget);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () =>
      document.removeEventListener(
        'mousemove',
        handleMouseMove
      );
  }, [targetRef]);

  return isFollowing;
};
