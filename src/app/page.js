import Clender from "@/components/Clender/Clender";
import OfficeView from "@/components/OfficeView/OfficeView";
import PackageSlider from "@/components/PackageSlider/PackageSlider";
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";


const page = () => {
  return (
    <div>
      <ServiceSlider></ServiceSlider>
      <div className="divider divider-info"></div>
      <Clender></Clender>
      <div className="divider divider-info"></div>
      <PackageSlider></PackageSlider>
      <div className="divider divider-info"></div>
      <OfficeView></OfficeView>

    </div>
  );
};

export default page;