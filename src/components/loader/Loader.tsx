import './loader.scss';

interface ILoaderProps {
  width?: number;
  height?: number;
}

export const Loader = ({
  width = 50,
  height = 50
}: ILoaderProps) => {
  return (
    <div className="loader" style={{ width, height }}></div>
  );
};
