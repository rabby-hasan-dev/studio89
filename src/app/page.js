import Clender from "@/components/Clender/Clender";
import CommonSlide from "@/components/CommonSlide/CommonSlide";
import OfficeView from "@/components/OfficeView/OfficeView";
import Slider from "@/components/Slider/Slider";


const  page = () => {
  return (
    <div>
    <Slider></Slider>
    <div className="divider"></div> 
    <CommonSlide></CommonSlide>
    <div className="divider"></div> 
    <Clender></Clender>
    <div className="divider"></div> 
    <CommonSlide></CommonSlide>
    <div className="divider"></div> 
    <OfficeView></OfficeView>

    </div>
  );
};

export default  page;