import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';

const Header = () => {
    return (
        <div className="font-redHat h-20 px-8 py-6 w-full flex flex-row justify-between fixed top-0 z-50">
            <p className="text-2xl">
                CLYDO
                <span className="font-semibold">MINT</span>
            </p>

            <p className="flex flex-row items-center gap-x-4">
                <Link
                    href="https://discord.com/api/oauth2/authorize?client_id=977579405163520082&permissions=8&scope=bot"
                    passHref
                >
                    <a
                        className="text-lg text-white grid place-items-center px-8 py-2 rounded-full border-2 border-gray-50 hover:scale-90 transition-all duration-100"
                        target="_blank"
                        rel="noopener"
                    >
                        Invite Bot
                    </a>
                </Link>

                <Link href="https://github.com/buidler-hub/clydomint" passHref>
                    <a
                        className="h-12 w-12 rounded-full grid place-items-center bg-[#DAFD01] hover:scale-95 transition-all duration-100"
                        target="_blank"
                        rel="noopener"
                    >
                        <FiGithub size={22} />
                    </a>
                </Link>

                <Link href="https://discord.gg/buidlershub/" passHref>
                    <a
                        className="h-12 w-12 rounded-full grid place-items-center bg-[#DAFD01] hover:scale-95 transition-all duration-100"
                        target="_blank"
                        rel="noopener"
                    >
                        <SiDiscord size={22} />
                    </a>
                </Link>
            </p>
        </div>
    );
};

export default Header;
