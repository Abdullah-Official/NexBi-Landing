import React, { useEffect, useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const TopPageCard = ({data: pageData, selectorType}) => {
  const {topPageTraffic, topPageKeywords} = pageData;
  const [data, setData] = useState(topPageTraffic)

  useEffect(() => {
    if(selectorType === "traffic"){
      setData(topPageTraffic)
    }else{
      setData(topPageKeywords)
    }
  },[selectorType, topPageTraffic, topPageKeywords])
  
  const headers = data?.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="py-[0.3px] backdrop-blur-[100px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-br from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.03)]">
      <div
        style={{
          background:
            "linear-gradient(90.29deg, rgba(13, 15, 18, 0.5) 33.92%, rgba(11, 12, 15, 0.5) 88.83%)",
        }}
        className="rounded-[36px] h-full w-full !bg-[#060809] px-5 py-5 border-2 border-transparent opacity-95 bg-clip-padding"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[18px] text-[#fff] font-[550] truncate capitalize">
            Top Page by {selectorType}
          </h2>
          <AiOutlineQuestionCircle color="#fff" size={20} />
        </div>
        <div className="mt-5  overflow-y-auto max-h-[210px]">
          {/* Header row */}
          <div className={`grid ${headers?.length === 2 ? "grid-cols-2" : "grid-cols-3"} text-gray-400 uppercase text-xs font-semibold mb-2`}>
            {headers.map((header, index) => (
              <span key={index} className="text-center">
                {header.replace(/_/g, ' ')}
              </span>
            ))}
          </div>
          {/* Data rows */}
          {data && data?.map((item, index) => (
            <div
              key={index}
              className={`grid ${headers?.length === 2 ? "grid-cols-2" : "grid-cols-3"} text-white py-3 border-b border-[#161618B2] text-sm`}
            >
              {headers.map((key, subIndex) => (
                <span
                  key={subIndex}
                  className={subIndex === 1 ? 'text-center !truncate' : 'text-left truncate'}
                >
                  {typeof item[key] === 'number'
                    ? item[key].toFixed(2)
                    : item[key]}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPageCard;
