import { FaPlus } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const ActionableSteps = () => {
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className="rounded-[36px] h-full !bg-[#060809] p-6 border-2 border-transparent opacity-95  bg-clip-padding"
      >
        <div className="flex justify-between items-center gap-5">
          <h3 className="text-[22px] font-[600] text-white">
            Actionable Steps
          </h3>
          <button className="flex items-center gap-1.5 font-[600] text-[#1482FF]">
            <p>Learn More</p>
            <FaPlus size={13} color={"#1482FF"} />
          </button>
        </div>
        <div
          className="flex flex-col md:flex-row gap-1 items-center justify-around pt-10"
        >
          {[
            "Broken Link Audit",
            "Enhance Top Pages",
            "Expand Backlink Sources",
          ].map((v, i) => (
            <div key={i}>
                <div className="bg-[#FFFFFF0D] mb-2 w-[57px] h-[55px] flex items-center justify-center rounded-xl">
                    <FiLink color={"#FFFFFFBF"} size={28} />
                </div>
              <p className="text-md md:text-lg text-white font-[500] mb-1">
                {v}
              </p>
              <p className="text-[14px] opacity-75 text-[#FFFFFFBF] font-[400] pb-3">
                Conduct a comprehensive audit to fix broken backlinks and pages,
                e.g., redirecting broken URLs to relevant content
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionableSteps;