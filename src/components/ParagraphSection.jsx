import Word from "./Word"

const ParagraphSection = () => {
    const para = `Running a business is about growth 💹 and not getting lost in data. \n\n NexBI gathers data from the real-time feed generated from multiple integrations your online business is connected to. We turn this stream of complex data into actionable insights and present super-relevant opportunities that are otherwise missed — keeping your at the forefront in your industry \n\n Let us transform confusion into clarity and guide your growth. Welcome to the future of business Intelligence
    `
  return (
    <div className="max-w-[570px] scroll-reveal">
      <Word value={para} />
      {/* <p
      style={{
        whiteSpace: "pre-line"
    }}
      >
        <span>
        {para}
        </span>
      </p> */}
    </div>
  )
}

export default ParagraphSection
