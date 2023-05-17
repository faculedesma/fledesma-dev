import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';
import { HistoryRow } from './HistoryRow';
import './history.scss';

const jobsHistory = [
  {
    id: 'freelance',
    date: 'Now',
    position: 'Freelancer',
    company: {
      name: 'Self-taught designer',
      url: 'https://www.linkedin.com/in/facundo-ledesma/'
    }
  },
  {
    id: 'soft-one',
    date: '2020',
    position: 'Software Engineer',
    company: {
      name: 'Leniolabs_ LLC',
      url: 'https://www.leniolabs.com/'
    }
  },
  {
    id: 'soft-two',
    date: '2020',
    position: 'Software Engineer',
    company: {
      name: 'ICE Mortgage Technology, Inc.',
      url: 'https://www.icemortgagetechnology.com/'
    }
  },
  {
    id: 'soft-three',
    date: '2018',
    position: 'Software Engineer',
    company: {
      name: 'Sovos Compliance, LLC',
      url: 'https://sovos.com/'
    }
  }
];

const History = () => {
  const isMobile =
    window.innerWidth > 320 && window.innerWidth < 480;
  const historyRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(
    historyRef,
    isMobile ? -50 : -300
  );

  useEffect(() => {
    if (isInViewport) {
      historyRef.current?.classList.add(
        'show-section-title'
      );
    }
  }, [isInViewport]);

  return (
    <div className="container">
      <div ref={historyRef} className="history">
        <h3>History</h3>
        <div className="history-list">
          {jobsHistory.map((job) => {
            return <HistoryRow key={job.id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default History;
