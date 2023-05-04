import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';

interface IJobProps {
  id: string;
  date: string;
  position: string;
  company: {
    name: string;
    url: string;
  };
}

export const HistoryRow: React.FC<IJobProps> = ({
  job
}) => {
  const historyRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(historyRef, -100);

  useEffect(() => {
    if (isInViewport) {
      historyRef.current?.classList.add('show-row');
    }
  }, [isInViewport]);

  const handleRowClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div
      key={job.id}
      ref={historyRef}
      className="history-list--row-container"
    >
      <div
        onClick={() => handleRowClick(job.company.url)}
        className="history-list--row"
      >
        <h3>{job.date}</h3>
        <div className="history-list--row-charge">
          <h3>{job.position}</h3>
          <a href={job.company.url} target="_blank">
            {job.company.name}
          </a>
        </div>
      </div>
    </div>
  );
};
