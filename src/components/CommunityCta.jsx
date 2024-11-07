
const CommunityCta = ({handleWaitlistModal}) => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col my-10">
      <h1 className="text-white font-[600] md:text-[36px] text-[22px]">Be a part of our community 🤗 </h1>
      <p className="text-white font-[400] opacity-60 max-w-xl text-center text-[15px] md:text-[18px]">
      Connect with the team, Unlock exclusive features, share your feedback, and innovate together in our Slack community.
      </p>
      <button onClick={handleWaitlistModal} className="text-[16px] fon-[600] text-black px-5 py-2.5 rounded-full"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)"
      }}
      >
        Join the waitlist
      </button>
    </div>
  )
}

export default CommunityCta
