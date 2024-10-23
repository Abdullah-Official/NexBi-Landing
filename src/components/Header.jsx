import NexbiLogo from "../assets/nexbi_logo.png";

const Header = () => {
  return (
    <header
      className="fixed top-6 left-1/2 transform -translate-x-1/2 max-w-4xl w-full flex justify-between items-center px-4 py-2.5 text-white rounded-full border border-[#FFFFFF08]"
      style={{
        background: "linear-gradient(90.29deg, rgba(9, 10, 12, 0.02) 11.9%, rgba(7, 7, 9, 0.02) 76.85%)",
      }}
    >
      <img src={NexbiLogo} alt="nexbi_logo" className="object-contain" />
      <nav className="space-x-12 items-center hidden md:flex">
        <a href="#" className="hover:text-gray-400">Home</a>
        <a href="#" className="text-[#F7F8F8] opacity-[0.45]">How it works</a>
        <a href="#" className="text-[#F7F8F8] opacity-[0.45]">Roadmap</a>
      </nav>
      <button className="bg-[#FFFFFF1A] text-md px-5 py-2.5 rounded-full">
        Join the waitlist
      </button>
    </header>
  );
};

export default Header;