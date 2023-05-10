
import FeatureImg2 from '../images/feature2.png';

function FeatureTwo() {
    return (
        <div className="font-mono mx-auto py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex items-center justify-center">
                        <img
                            className="w-full max-w-md"
                            src={FeatureImg2}
                            alt="Arweave logo"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start px-5">
                        <h1 className="text-4xl text-black bg-clip-text font-extrabold text-transparent mb-5 md:mb-5">
                            Chain-agnostic tech stack, secured by Arweave
                        </h1>
                        <div className="text-lg my-4">
                            ONSF is built on EXM - a smart contract L2 on Arweave, and everPay - a multichain L2 payment processor.
                            <div className='my-4'><p>
                                EXM contracts can be signed by all chains supported by molecule.sh: EVM, Arweave, Solana, Polkadot, Stacks, TON, and more.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureTwo;