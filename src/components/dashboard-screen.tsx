import MaxWidthWrapper from './max-width-wrapper';
import screen from '../assets/images/Dashboard.png';

const DashboardScreen = () => {
  return (
    <div className="bg-red-50/25">
      <MaxWidthWrapper>
        <div className="-mt-72 p-6 bg-blue-200/25 rounded-[68px]">
          <img src={screen} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default DashboardScreen;
