import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';

import './titles.scss';
import { useMouseFollow } from '@components/hooks/useMouseFollow';

const SectionTitle = ({ text }: { text: string }) => {
  const isMobile = window.innerWidth > 320 && window.innerWidth < 480;
  const sectionTitleRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(sectionTitleRef, isMobile ? 50 : 100);

  useEffect(() => {
    if (isInViewport) {
      sectionTitleRef.current?.classList.add('show-section-title');
    }
  }, [isInViewport]);

  useMouseFollow(sectionTitleRef);

  return (
    <h6 className="section-title" ref={sectionTitleRef}>
      {text}
    </h6>
  );
};

export default SectionTitle;
