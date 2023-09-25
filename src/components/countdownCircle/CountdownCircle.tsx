import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { CountdownCircleNumber } from "./CountdownCircleStyles";

interface CountdownCircleProps {
  secondNumber: string;
  repeatAnimationDelay: number;
  isPlay: boolean;
}

const CountdownCircle: React.FC<CountdownCircleProps> = ({
  secondNumber = "02",
  isPlay = false,
  repeatAnimationDelay = 0,
}) => {
  const children = () => {
    const seconds = secondNumber;

    return <CountdownCircleNumber>{seconds}</CountdownCircleNumber>;
  };

  return (
    <CountdownCircleTimer
      isPlaying={isPlay}
      duration={5}
      colors={["#27d0a5", "#27d0a5"]}
      colorsTime={[2, 2]}
      size={35}
      strokeWidth={3}
      isGrowing={true}
      trailStrokeWidth={0}
      trailColor={"#e0e0e0"}
      onComplete={() => {
        return { shouldRepeat: true, delay: repeatAnimationDelay };
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownCircle;
