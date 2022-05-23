import { useMetamask } from "@thirdweb-dev/react";

const ConnectWallet = () => {
  const authenticateMetamask = useMetamask();

  return (
    <button
      onClick={authenticateMetamask}
      className="md rounded bg-blue-500 px-5 py-3 text-lg text-white transition-all hover:bg-blue-600"
    >
      Sign in with Metamask
    </button>
  );
};

export default ConnectWallet;
