import { useEffect, useRef } from 'react';
import { HTML } from '@assets/svgs/techs/HTML';
import { Javascript } from '@assets/svgs/techs/Javascript';
import { React } from '@assets/svgs/techs/React';
import { CSS } from '@assets/svgs/techs/CSS';
import { Typescript } from '@assets/svgs/techs/Typescript';
import { NodeJS } from '@assets/svgs/techs/NodeJS';
import { Git } from '@assets/svgs/techs/Git';
import { Figma } from '@assets/svgs/techs/Figma';
import { useIntersection } from '@components/hooks/useIntersection';

interface ITechnologiesProps {
  isMobile: boolean;
}

export const Technologies: React.FC<ITechnologiesProps> = ({
  isMobile
}) => {
  const technologiesRef = useRef<HTMLDivElement>(null);

  const isInViewport = useIntersection(
    technologiesRef,
    isMobile ? -50 : -150
  );

  useEffect(() => {
    if (isInViewport) {
      technologiesRef.current?.classList.add(
        'show-technologies'
      );
    }
  }, [isInViewport]);

  return (
    <div ref={technologiesRef} className="technologies">
      <React />
      <Javascript />
      <HTML />
      <CSS />
      <Typescript />
      <NodeJS />
      <Git />
      <Figma />
    </div>
  );
};
