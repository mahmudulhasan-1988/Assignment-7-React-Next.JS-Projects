import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#244D3F] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
         {/* KeenKeeper */}
          <div className="text-center">
            <div className="">
              <h2 className="text-5xl font-bold text-white">KeenKeeper
              </h2>
            </div>

            <p className=" text-center text-zinc-400 text-lg mt-4">
              Your personal shelf of meaningful connections. <br /> Browse, tend, and nurture the relationships that matter most.
            </p>

          </div>
          
        </div>

      {/* Social Links */}
        <div>
              <div className="items-center text-center mt-10">
            <h3 className="text-white font-bold mb-6 text-2xl">Social Links</h3>
            <div className="flex gap-4 text-zinc-400 items-center justify-center">
              <a href="https://www.facebook.com/groups/webdevelopment.ph" target="_blank" className="hover:text-white transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/ProgrammingHero" target="_blank" className="hover:text-white transition">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/programminghero/" target="_blank" className="hover:text-white transition">
                <FaInstagram size={20} />
              </a>
            </div>

          </div>
        </div>

      {/* All rights reserved */}
        <div className="mt-16 pt-8 border-t border-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© {new Date().getFullYear()} © 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-red-400 transition">
              <p>Privacy Policy</p>
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <p>Terms of Service</p>
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <p>Cookies</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;