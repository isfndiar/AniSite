import { Card } from "flowbite-react";
import * as Icon from "react-feather";
const CardVideo = (props) => {
  const { img, title, episodes } = props;
  return (
    <Card
      className="w-full lg:max-w-sm  text-white hover:rounded-none rounded-lg relative sm:bg-gray-800 bg-transparent dark:bg-transparent sm:dark:bg-gray-800 sm:border border-none"
      imgAlt={img}
      imgSrc={img}
    >
      <Icon.PlayCircle
        size={40}
        color="white"
        className="absolute  left-0 right-0 -top-32 bottom-0 m-auto  "
      />
      <h5 className=" text-lg  font-semibold line-clamp-2 tracking-tight text-white dark:text-white">
        {title}
      </h5>
      <P>Episode {episodes}</P>
    </Card>
  );
};

const P = ({ children }) => (
  <p className="font-normal  text-gray-400 hover:bg-slate-700">{children}</p>
);

export default CardVideo;
