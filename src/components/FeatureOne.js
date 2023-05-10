import FeatureImg1 from '../images/feature1.png';

function FeatureOne() {
    return (
        <div className="p-8 font-mono flex md:min-h-screen h-full bg-gray-100">
            <div className="max-w-7xl mx-auto self-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="ml-8 flex flex-col justify-center items-start px-5">
                        <h1 className="text-4xl text-black bg-clip-text font-extrabold text-transparent mb-5 md:mb-5">
                            Spin up an identity system for your DAO, protocol, dApp or chain.
                        </h1>
                        <div className="text-lg my-4">
                            ONSF is a chain-agnostic (yet on-chain) stack to deploy custom name services. All deployments are cross-indexed, building a web of interoperable identities.
                            <div className='my-4'><p>
                                Features customizable minting site, marketplace, APIs, dev tooling and full dashboard web app.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            className="w-full max-w-md"
                            src={FeatureImg1}
                            alt="feature 1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureOne;
