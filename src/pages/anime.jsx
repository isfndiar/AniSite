import { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
const Anime = () => {
  const [data, setData] = useState([]);
  const [istest, setIsTest] = useState(
    Array(20)
      .fill()
      .map((_, i) => i + 1)
  );

  return (
    <div className="md:flex items-start  md:px-3 px-3   mt-10   ">
      <div className="flex md:gap-7 gap-y-4 flex-wrap justify-around mt-10 ">
        {istest.map((_, i) => (
          <Link key={i + crypto.randomUUID()} to={`/anime/${i}`}>
            <Card id={i} src={"./src/assets/bgAuth.png"} alt={"sfsa"} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Anime;
