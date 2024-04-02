import { useEffect, useState } from "react";
import { Heart } from "react-feather";
import PropTypes from "prop-types";
const StarRating = ({ onSetRating, color = "pink", max = 0, size = 5 }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleClick = (item) => {
    setRating(item);
  };
  useEffect(() => {
    onSetRating(rating);
  }, [onSetRating, rating]);
  return (
    <>
      <div className="flex gap-1">
        {Array.from({ length: max }, (_, i) => (
          <Star
            key={i}
            handleClick={() => handleClick(i + 1)}
            onHover={() => setTempRating(i + 1)}
            onHoverEnd={() => setTempRating(0)}
            fill={tempRating ? tempRating >= i + 1 : rating >= i + 1 || ""}
            color={color}
            size={size}
          />
        ))}
        <div>{tempRating || rating || ""}</div>
      </div>
    </>
  );
};

const Star = ({ handleClick, fill, onHover, onHoverEnd, color }) => {
  return (
    <div
      className="flex"
      onClick={handleClick}
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
    >
      {fill ? <Heart fill="pink" color={color} /> : <Heart color={color} />}
    </div>
  );
};

Star.propTypes = {
  handleClick: PropTypes.func,
  fill: PropTypes.any,
  onHover: PropTypes.func,
  onHoverEnd: PropTypes.func,
  color: PropTypes.string,
};

export default StarRating;
