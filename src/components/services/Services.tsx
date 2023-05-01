import { SecondaryButton } from "@components/buttons/SecondaryButton";
import { Chart } from "@assets/svgs/Chart";
import { Processor } from "@assets/svgs/Processor";
import { Diamond } from "@assets/svgs/Diamond";
import "./services.scss";

const servicesProvided = [
  {
    id: "design",
    label: "Design",
    description:
      "Enhance your brand with modern and innovative design solutions.",
    icon: <Chart />,
  },
  {
    id: "development",
    label: "Development",
    description:
      "Build robust and functional websites and applications for your business needs.",
    icon: <Processor />,
  },
  {
    id: "conversion",
    label: "Conversion",
    description:
      "Turn website visitors into customers with effective SEO, CRO and user testing.",
    icon: <Diamond />,
  },
];

const Services = () => {
  return (
    <div className="container">
      <div className="services">
        <h3>What I do</h3>
        <div className="services-list">
          {servicesProvided.map((service) => {
            return (
              <div key={service.id} className="services-list--card">
                <div className="services-list--card-top">
                  {service.icon}
                  <h2>{service.label}</h2>
                </div>
                <div className="services-list--card-bottom">
                  <p>{service.description}</p>
                  <SecondaryButton label="Get started" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
