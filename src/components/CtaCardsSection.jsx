import CtaCard from './CtaCard'

const CtaCardsSection = ({businessResponse}) => {
  return (
    <>
    <div className="flex justify-center">
    <h1 className="text-md md:text-2xl lg:text-3xl max-w-lg text-center text-white  font-[600] mb-5 md:mb-8">
      Personalized insights tailored to help you meet your business goals
      </h1>
    </div>
    {
      !businessResponse ? (
         <div className="block md:hidden">
    <CtaCard />
    </div>
      ) : null
    }
    <section className="space-y-7 md:max-h-[600px] hidden md:block overflow-y-auto relative scrollbar-hide">
    {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 pointer-events-none backdrop-blur-[0.8px] z-5"></div> */}
    {
      !businessResponse ? (
         <div className="absolute inset-0 w-full h-[600px]">
         <div className="absolute top-[39%] left-[34%] w-[330px]">
              <CtaCard />
              </div>
         <div className="absolute top-0 left-0 w-full h-1/4 bg-[#060809] opacity-70 blur-lg"></div>
         <div className="absolute top-0 left-0 w-1/4 h-full bg-[#060809] opacity-50 blur-lg"></div>
         <div className="absolute bottom-0 left-0 w-full h-1/4 bg-[#060809] opacity-50 blur-lg"></div>
         <div className="absolute top-0 right-0 w-1/4 h-full bg-[#060809] opacity-50 blur-lg"></div>
       </div>
      ) : null
    }
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex flex-col gap-4">
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {" However, broken links require immediate maintenance, and there is an opportunity to diversify backlink sources beyond 'unknown' and 'cms' platforms. Additionally, optimizing top-ranking pages to better capture search intent and improve click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth."}
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {" However, broken links require immediate maintenance, and there is an opportunity to diversify backlink sources beyond 'unknown' and 'cms' platforms. Additionally, optimizing top-ranking pages to better capture search intent and improve click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth."}
            </p>
         </div>
        </div>
        <div className="flex flex-col gap-4">
        <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            However, broken links require immediate maintenance, and prove click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth.
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            mmediate maintenance,gh rmmediate maintenance, and prove click-through r However, broken links require immediate maintenance, and prove click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth.
            </p>
         </div>
         
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            However, broken links require immediate maintenance, and there is an opportunity to divek integrity can drive immediate growth.
            </p>
         </div>
        </div>
        <div className="flex flex-col gap-4">
        <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
            {"However, broken links require immediate maintenance, and there is an opportunity to diversify backlink sources beyond 'unknown' and 'cms' platforms. Additionally, optimizing top-ranking pages to better capture search intent and improve click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth."}
            </p>
         </div>
         <div className='bg-[#FFFFFF0D] rounded-3xl hidden md:flex p-6'>
            <p className='text-white text-sm text-opacity-60'>
           {" However, broken links require immediate maintenance, and there is an opportunity to diversify backlink sources beyond 'unknown' and 'cms' platforms. Additionally, optimizing top-ranking pages to better capture search intent and improve click-through rates could leverage existing strong standings for increased traffic. Focusing on enhancing second and third-page keyword rankings and addressing backlink integrity can drive immediate growth."}
            </p>
         </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default CtaCardsSection
