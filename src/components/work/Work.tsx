import DaniloBG from '@assets/images/danilo-red.webp';
import NamewizBG from '@assets/images/namewiz-bg.webp';
import SpiralSVG from '@assets/images/espiral.svg';
import SectionTitle from '@components/titles/SectionTitle';
import WorkCard from './WorkCard';
import './work.scss';

const works = [
  {
    id: 'art',
    title: 'Journey of selfknowledge',
    type: 'Art Concept',
    image: SpiralSVG,
    link: 'https://facundo-ledesma.me/'
  },
  {
    id: 'danilo',
    title: 'New goals, new website',
    type: 'Danilo Andrade',
    image: DaniloBG,
    link: 'https://danilo-andrade.com/'
  },
  {
    id: 'namewiz',
    title: 'Build it fast, test & iterate',
    type: 'Namewiz',
    image: NamewizBG,
    link: 'https://faculedesma.github.io/namewiz-fe/'
  }
];

const Work = () => {
  return (
    <div className="container">
      <section id="work" className="work">
        <SectionTitle text="Projects" />
        <div className="work-list">
          {works.map((work) => {
            return <WorkCard key={work.id} work={work} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Work;
