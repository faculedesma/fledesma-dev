import { useEffect } from 'react';

export function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  onClickOutside: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    );
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [ref, onClickOutside]);
}
