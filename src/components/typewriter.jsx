import { useState, useEffect } from 'react';

const Typewriter = ({ toRotate, period}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200 - Math.random() * 100);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      if (isDeleting) {
        setText(fullTxt.substring(0, text.length - 1));
      } else {
        setText(fullTxt.substring(0, text.length + 1));
      }

      if (!isDeleting && text === fullTxt) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text.length === 1) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(50);
      }
    };

    const ticker = setTimeout(handleType, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, delta, toRotate, period]);

  return (
    <span className="typewrite">
      <span className="wrap">{text}</span>
    </span>
  );
};

export default Typewriter;
