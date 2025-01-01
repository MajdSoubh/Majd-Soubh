import { useTypeWriter } from "../hooks/useTypeWriter";

const Typewriter = ({ texts, speed = 200, infinity = false, loop = false }) => {
  const displayText = useTypeWriter(texts, speed, infinity, loop);

  return <p>{displayText}</p>;
};

export default Typewriter;
