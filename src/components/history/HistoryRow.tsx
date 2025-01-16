import { useRef, useEffect } from 'react';
import { useIntersection } from '@components/hooks/useIntersection';

interface IJob {
  id: string;
  date: string;
  position: string;
  company: {
    name: string;
    url: string;
  };
}

interface IHistoryRowProps {
  job: IJob;
}

export const HistoryRow: React.FC<IHistoryRowProps> = ({ job }) => {
  const historyRef = useRef<HTMLDivElement>(null);
  const isInViewport = useIntersection(historyRef, -80);

  useEffect(() => {
    if (isInViewport) {
      historyRef.current?.classList.add('show-row');
    }
  }, [isInViewport]);

  const handleRowClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div ref={historyRef} className="history-list--row-container">
      <div className="container">
        <div onClick={() => handleRowClick(job.company.url)} className="history-list--row">
          <h3>{job.date}</h3>
          <div className="history-list--row-charge">
            <h3>{job.company.name}</h3>
            <a href={job.company.url} target="_blank">
              {job.position}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
