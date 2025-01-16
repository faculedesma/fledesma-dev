import Lottie from 'lottie-react';

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

export const ProcessStep: React.FC<IProcessCardProps> = ({ process }) => {
  return (
    <section id={process.id} className="step">
      <div className="step-card">
        <div className="card-anim">
          <Lottie
            animationData={process.lottieJSON}
            loop={true}
            style={{ height: 125, width: 125 }}
          />
        </div>
        <div className="step-card-text">
          <div className="step-card-text--top">
            <h3>{process.order}.</h3>
            <h3>{process.label}</h3>
          </div>
          <p>{process.description}</p>
        </div>
      </div>
    </section>
  );
};
