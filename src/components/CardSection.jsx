import { FaPlus } from "react-icons/fa";

const CardSection = ({positives, opportunities}) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-6">
      <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
        <div
          style={{
            background:
              "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
          }}
          className="rounded-[36px] h-full !bg-[#060809] p-6 border-2 border-transparent opacity-95  bg-clip-padding"
        >
          <h3 className="text-[22px] font-semibold text-white mb-4">
            Growth Drivers 🚀
          </h3>
          <p className="text-[15px]  opacity-75 text-[#FFFFFFBF] font-[400] pb-3">
            {positives || ""}
          </p>
          
          <button className="flex items-center gap-1.5 font-[600] text-[#1482FF]">
            <p>Learn More</p>
            <FaPlus size={13} color={"#1482FF"} />
          </button>
        </div>
      </div>
      <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
        <div
          style={{
            background:
              "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
          }}
          className="rounded-[36px] !bg-[#060809] h-full p-6 border-2 border-transparent opacity-95  bg-clip-padding"
        >
          <h3 className="text-[22px] font-semibold text-white mb-4">
            Opportunities 🚀
          </h3>
          <p className="text-[15px] line-clamp-6 opacity-75 text-[#FFFFFFBF] font-[400] mb-4">
            {opportunities || ""}
          </p>
          <button className="flex items-center gap-1.5 font-[600] text-[#1482FF]">
            <p>Learn More</p>
            <FaPlus size={13} color={"#1482FF"} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
