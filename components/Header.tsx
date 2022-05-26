import { FiGithub } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const Header = () => {
    return (
        <div className="font-redHat h-20 px-8 py-6 w-full flex flex-row justify-between fixed top-0 z-50">
            <p className="text-2xl hidden md:flex">
                CLYDO
                <span className="font-semibold">MINT</span>
            </p>

            <div className="flex flex-row items-center gap-x-4 justify-center mx-auto md:mx-0">
                <a
                    href="https://discord.com/api/oauth2/authorize?client_id=977579405163520082&permissions=8&scope=bot"
                    className="text-lg md:text-white text-black grid place-items-center px-8 py-2 rounded-full border-2 border-black md:border-gray-50 hover:scale-90 transition-all duration-100"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Invite Bot
                </a>

                <a
                    href="https://github.com/buidler-hub/clydomint"
                    className="h-12 w-12 rounded-full grid place-items-center bg-[#DAFD01] hover:scale-95 transition-all duration-100"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FiGithub size={22} />
                </a>

                <a
                    href="https://discord.gg/buidlershub/"
                    className="h-12 w-12 rounded-full grid place-items-center bg-[#DAFD01] hover:scale-95 transition-all duration-100"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiDiscord size={22} />
                </a>
            </div>
        </div>
    );
};

export default Header;
