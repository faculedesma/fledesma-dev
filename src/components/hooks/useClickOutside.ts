import { useState, useEffect, RefObject } from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void, toggleRef: RefObject<HTMLElement>) {
  useEffect(() => {
    // Handler to check if the click is outside the referenced element and toggle element
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    // Add event listener for clicks outside the element
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, toggleRef]); // Re-run effect if ref, callback, or toggleRef changes
}

export default useClickOutside;
