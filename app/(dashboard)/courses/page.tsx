import Swiper from "../../components/courses/swiper";
import Copyright from "../../components/copyright";
import Cardgrid from "../../components/courses/cardgrid";
export const metadata = {
  title: "Courses - OpenTube",
  description: "Open & Decentralized",
};
function courses() {
  return (
    <>
      <Swiper />

      <div className="full">
        <Cardgrid />
      </div>

      <Copyright />
    </>
  );
}

export default courses;
