import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const TopPageCard = () => {
    const data = [
        { page: '/database', traffic: 287.96, keywords: 20 },
        { page: '/database', traffic: 287.96, keywords: 20 },
        { page: '/database', traffic: 287.96, keywords: 20 },
        { page: '/database', traffic: 287.96, keywords: 20 },
      ];
  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className=" rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95  bg-clip-padding"
      >
         <div className="flex justify-between items-center mb-4">
         <h2 className="text-[18px] text-[#fff] font-[550] truncate">Top Page by Keywords</h2>
        <AiOutlineQuestionCircle color="#fff" size={20} />
      </div>
      <div className="mt-5 px-2 overflow-y-auto max-h-[210px]">
      <div className="grid grid-cols-3 text-gray-400 uppercase text-xs font-semibold mb-2">
        <span>Page</span>
        <span className="text-center">Traffic</span>
        <span className="text-right">Keywords</span>
      </div>
      {data.map((item, index) => (
        <div key={index} className="grid grid-cols-3 text-white py-3 border-b border-[#161618B2] text-sm">
          <span>{item.page}</span>
          <span className="text-center">{item.traffic.toFixed(2)}</span>
          <span className="text-right">{item.keywords}</span>
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default TopPageCard
