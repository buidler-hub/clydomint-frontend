import { DiscordIcon, GitHubIcon } from "./icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex justify-between absolute top-0 p-5">
      <Link href="/">
        <p className="text-xl hover:underline cursor-pointer">ClydoMint</p>
      </Link>
      <p className="text-xl hover:underline cursor-pointer mx-auto">
        Invite the bot
      </p>
      <div className="flex gap-4 items-center">
        <a
          title="GitHub"
          className="text-xl hover:underline cursor-pointer"
          href="https://github.com/buidler-hub/clydomint"
        >
          <GitHubIcon className="w-8 h-8" />
        </a>
        <a
          title="Join the Discord"
          className="text-xl hover:underline cursor-pointer"
          href="https://discord.gg/buidlers"
        >
          <DiscordIcon className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Header;
