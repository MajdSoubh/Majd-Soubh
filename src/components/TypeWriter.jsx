import { useTypeWriter } from "../hooks/useTypeWriter";

const Typewriter = ({
  texts,
  speed = 200,
  infinity = false,
  loop = false,
  render = null,
}) => {
  const displayText = useTypeWriter(texts, speed, infinity, loop);

  return (render && render(displayText)) || <p>{displayText}</p>;
};

export default Typewriter;
