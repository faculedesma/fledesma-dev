import Lottie from 'lottie-react';
import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';

interface IProcessStep {
  id: string;
  order: number;
  label: string;
  description: string;
  lottieJSON: any;
}

interface IProcessCardProps {
  process: IProcessStep;
}

export const ProcessStep: React.FC<IProcessCardProps> = ({
  process
}) => {
  const processRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(processRef, -100);

  useEffect(() => {
    if (isInViewport) {
      processRef.current?.classList.add('show-process');
    }
  }, [isInViewport]);

  return (
    <div
      id={process.id}
      ref={processRef}
      className="process-list--step"
    >
      <div className="process-list--step-card">
        <div className="process-list--step-card-order">
          <span>{process.order}</span>
        </div>
        <div className="process-list--step-card-anim">
          <Lottie
            animationData={process.lottieJSON}
            loop={true}
            style={{ height: 125, width: 125 }}
          />
        </div>
        <div className="process-list--step-card-text">
          <h3>{process.label}</h3>
          <p>{process.description}</p>
        </div>
      </div>
    </div>
  );
};
