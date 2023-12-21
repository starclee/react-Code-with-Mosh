import { useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";

interface props {
  onClick: () => void;
}

const Like = ({ onClick }: props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <GoHeartFill color="#ff6b81" size="30" onClick={toggle} />;
  return <GoHeart size="30" onClick={toggle} />;
};

export default Like;
