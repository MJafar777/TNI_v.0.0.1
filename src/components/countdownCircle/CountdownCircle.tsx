import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CountdownCircleNumber } from "./CountdownCircleStyles";

interface CountdownCircleProps {
  secondNumber: string;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({
  secondNumber = "02",
}) => {
  const children = () => {
    const seconds = secondNumber;

    return <CountdownCircleNumber>{seconds}</CountdownCircleNumber>;
  };

  return (
    <CountdownCircleTimer
      isPlaying
      duration={5}
      colors={["#27d0a5", "#27d0a5"]}
      colorsTime={[2, 2]}
      size={35}
      strokeWidth={3}
      isGrowing={true}
      trailStrokeWidth={0}
      trailColor={"#e0e0e0"}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownCircle;
