import { useMetamask } from '@thirdweb-dev/react';

const ConnectWallet = () => {
    const authenticateMetamask = useMetamask();

    return (
        <button
            onClick={authenticateMetamask}
            className="mt-10 font-montserrat text-lg px-6 py-2 bg-black text-white font-medium rounded-sm hover:scale-95 transition-all duration-100"
        >
            CONNECT WALLET
        </button>
    );
};

export default ConnectWallet;
