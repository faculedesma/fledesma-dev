import { useEffect } from 'react';
import { useIsOnTop } from '@components/hooks/useIsOnTop';

export function useMouseFollow(
  ref: React.RefObject<HTMLElement>,
  classname: string = 'point',
  hide: boolean = true
) {
  const isOnTop = useIsOnTop(ref);

  useEffect(() => {
    const mouse = document.getElementById('mouse-follow');
    if (!mouse) return;

    if (isOnTop) {
      // When the element is on top, apply the custom classname and hide if needed
      mouse.classList.remove('point'); // Remove default class
      mouse.classList.add(classname);
      if (hide) {
        mouse.classList.add('hide');
      } else {
        mouse.classList.remove('hide');
      }
    } else {
      // When the element is not on top, reset to the default 'point' class
      mouse.classList.remove(classname); // Remove custom classname
      mouse.classList.remove('hide'); // Ensure it's not hidden
      mouse.classList.add('point'); // Apply default class
    }
  }, [isOnTop, classname, hide]);
}
