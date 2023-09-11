import { useState } from "react";
import Star from "./Star";

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 28,
  className = "",
  message = [],
  defaultRating=0,
  setUserRating=0
}) {
  const style = {
    width: `${size}px`,
    heigth: `${size}px`,
  };

  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState(0);

  const handleClick = (rated) => {
    setRating(rated);
    setUserRating(rated)
  };

  const handleHover = (hover) => {
    setTempRating(hover);
  };

  return (
    <div className={`w-min flex space-x-2 items-center ${className}`}>
      <div className="flex cursor-pointer">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            styleStar={style}
            onRate={() => handleClick(i + 1)}
            onHover={() => handleHover(i + 1)}
            onLeave={() => handleHover(0)}
            // full={rating >= i + 1 ? true : false}
            full={
              tempRating
                ? tempRating >= i + 1
                  ? true
                  : false
                : rating >= i + 1
                ? true
                : false
            }
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={{ color }} className="">
        {message.length === maxRating
          ? tempRating
            ? message[tempRating - 1]
            : message[rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
