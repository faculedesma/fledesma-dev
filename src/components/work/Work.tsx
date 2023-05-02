import DaniloBG from "@assets/images/danilo-red.png";
import NamewizBG from "@assets/images/namewiz-bg.png";
import NinaBG from "@assets/images/nina-bg.png";
import LampBG from "@assets/images/lamp-bg.png";
import "./work.scss";

const works = [
  {
    id: "danilo",
    title: "New goals, new website",
    type: "Danilo Andrade",
    image: DaniloBG,
    link: "https://danilo-andrade.com/",
  },
  {
    id: "namewiz",
    title: "Build it fast, test & iterate",
    type: "Namewiz",
    image: NamewizBG,
    link: "https://faculedesma.github.io/namewiz-fe/",
  },
  {
    id: "art",
    title: "Journey of selfknowledge",
    type: "Art Portfolio",
    image: LampBG,
    link: "https://facundo-ledesma.me/",
  },
  {
    id: "nina",
    title: "Let's sell it online",
    type: "Nina Style",
    image: NinaBG,
    link: "https://www.instagram.com/shopninastyle/",
  },
];

const Work = () => {
  const handleCardClick = (link: string) => window.open(link, "_blank");

  return (
    <div className="container">
      <div id="work" className="work">
        <h3>Work</h3>
        <div className="work-list">
          {works.map((work) => {
            return (
              <div
                key={work.id}
                className={`work-list-${work.id}`}
                onClick={() => handleCardClick(work.link)}
              >
                <h2>{work.title}</h2>
                <h2>{work.type}</h2>
                <img src={work.image} alt="work-image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
