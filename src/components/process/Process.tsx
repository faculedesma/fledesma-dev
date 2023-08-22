import { useRef, useEffect, useState } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { ProcessStep } from './ProcessStep';
import SectionTitle from '@components/titles/SectionTitle';
import researchJSON from '@assets/animations/search.json';
import buildJSON from '@assets/animations/build.json';
import prototypeJSON from '@assets/animations/prototype.json';
import designJSON from '@assets/animations/design.json';
import { useIsOnTop } from '@components/hooks/useIsOnTop';
import './process.scss';

const processes = [
  {
    id: 'research',
    order: 1,
    label: 'Research',
    description:
      'Collecting data about your product and its objectives. Exploring your industry landscape and analyzing competitors.',
    lottieJSON: researchJSON
  },
  {
    id: 'prototype',
    order: 2,
    label: 'Prototype',
    description:
      'Transforming the research into a solution that aligns with your objectives and maximizes user efficiency.',
    lottieJSON: prototypeJSON
  },
  {
    id: 'design',
    order: 3,
    label: 'Design',
    description:
      'Integrating the form and the function to make sure your user have a delightful experience.',
    lottieJSON: designJSON
  },
  {
    id: 'build',
    order: 4,
    label: 'Build',
    description:
      'The planned web solution is created using coding and development, turning design and functionality into a fully functional digital reality.',
    lottieJSON: buildJSON
  }
];

const Process = () => {
  const [active, setActive] = useState<number>(1);

  const processRef = useRef<HTMLDivElement>(null);
  const stepperRef = useRef<HTMLDivElement>(null);

  const isOnTopStepper = useIsOnTop(stepperRef);
  const isInViewport = useIntersection(processRef);

  const activeProcess = processes.find(
    (p) => p.order === active
  );

  useEffect(() => {
    if (isInViewport) {
      const intervalId = setInterval(() => {
        handleUpdateActive();
      }, 1618 * 4);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [active, isInViewport]);

  useEffect(() => {
    if (isInViewport) {
      processRef.current?.classList.add('show-cards');
    }
  }, [isInViewport]);

  useEffect(() => {
    if (stepperRef.current) {
      const mouse = document.getElementById('mouse-follow');
      if (isOnTopStepper) {
        mouse?.classList.remove('point');
        mouse?.classList.add('hide');
      } else {
        mouse?.classList.add('point');
        mouse?.classList.remove('hide');
      }
    }
  }, [isOnTopStepper]);

  const handleUpdateActive = () => {
    const nextOrder =
      active === processes.length ? 1 : active + 1;
    setActive(nextOrder);
  };

  return (
    <div className="container">
      <section className="process">
        <div className="process-text">
          <div className="process-text--top">
            <SectionTitle text="My Process" />
          </div>
          <div className="process-text--bottom">
            <h2>Precision planning, elevated results.</h2>
            <p>
              Using the right tools with a well structured
              process leads to the collaboration’s success.
            </p>
          </div>
        </div>
        <div className="process-content">
          <div className="process-list" ref={processRef}>
            <ProcessStep
              key={activeProcess!.id}
              process={activeProcess!}
            />
          </div>
          <section
            className="process-list--mobile"
            ref={processRef}
          >
            <div className="process-list--mobile-container">
              {processes.map((process, index) => {
                return (
                  <ProcessStep
                    key={index}
                    process={process}
                  />
                );
              })}
            </div>
          </section>
          <div ref={stepperRef} className="process-stepper">
            {processes.map((p) => {
              return (
                <div
                  key={p.id}
                  onClick={() => setActive(p.order)}
                  className={`${
                    active === p.order ? 'active-step' : ''
                  }`}
                >
                  <div className="process-stepper--box"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
