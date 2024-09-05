import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import TabCategory from "../components/TabCategory";
export const Home = () => {
  const jobs = useLoaderData();
  console.log("TabCategory job", jobs);
  return (
    <div>
      <Carousel />
      <TabCategory jobs={jobs} />
    </div>
  );
};
