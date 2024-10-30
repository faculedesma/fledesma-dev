import { HistoryRow } from './HistoryRow';
import SectionTitle from '@components/titles/SectionTitle';
import './history.scss';

const jobsHistory = [
  {
    id: 'bask',
    date: 'Now',
    position: 'UX Engineer',
    company: {
      name: 'Bask Health, Inc.',
      url: 'https://bask.health'
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
  return (
    <div className="container">
      <section className="history">
        <SectionTitle text="History" />
        <div className="history-list">
          {jobsHistory.map((job) => {
            return <HistoryRow key={job.id} job={job} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default History;
