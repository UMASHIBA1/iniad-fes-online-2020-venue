export interface AnimationPropsType {
  duration: number;
  delay: number;
}

const calcPreviousTime = ({ duration, delay }: AnimationPropsType) => {
  return duration + delay;
};

export default calcPreviousTime;
