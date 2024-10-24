const ReviewSection = () => {
  return (
    <section className="space-y-3">
      <h1 className="hero_heading text-center py-4 text-xl md:text-2xl lg:text-3xl font-[600]">
        SEO Performance Analysis & Growth Opportunities
      </h1>
      <div className="p-[1px] backdrop-blur-[200px] rounded-[36px] shadow-md border border-transparent bg-gradient-to-r from-[#33D3FF] via-[#9F31FF] to-[#FF33C5]">
        <div
          style={{
            background:
              "linear-gradient(90.29deg, #0E0F11 11.9%, #0B0C0E 86.39%)",
          }}
          className="rounded-[36px] p-6 opacity-95 border-2 border-transparent bg-clip-padding"
        >
          <h3 className="text-[22px] font-semibold text-white mb-4">
            Here’s our expert review
          </h3>
          <p className="text-[16px] text-[#FFFFFFBF] font-light opacity-95">
            Your business's SEO performance has experienced a significant
            decline in traffic and impressions from May to October 2024,
            primarily due to a reduction in first-page keyword rankings and
            increased competition. Despite this downturn, your robust backlink
            profile with over 300k backlinks from diverse domains provides a
            strong foundation, though the presence of broken links and limited
            platform diversity indicates areas for improvement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
