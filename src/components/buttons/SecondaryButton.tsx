import { ReactNode } from "react";
import { ArrowRight } from "@assets/svgs/ArrowRight";
import "./secondary-button.scss";

type SecondaryButtonProps = {
  label?: string | ReactNode;
  onClick?: () => void;
};

export const SecondaryButton = ({
  label = "",
  onClick = () => null,
}: SecondaryButtonProps) => {
  return (
    <button className="secondary-button" onClick={onClick}>
      {label}
      <ArrowRight />
    </button>
  );
};
