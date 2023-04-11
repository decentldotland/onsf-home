import DecentLand from '../images/decentland.png'
import EXM from '../images/exm.png'
import EverFinance from '../images/everfinance.png'
import EverLand from '../images/4everland.png'
import Meson from '../images/meson.png'
import PermawebNews from '../images/permawebnews.png'

function Logos() {
    return (

        <div class="mx-auto text-center p-5 bg-white">
            <div class="text-4xl">
                <h1
                    class="pt-10 text-black bg-clip-text font-extrabold text-transparent"
                >
                    $20,000 in prizes
                </h1>
                <h1
                    class="mb-5 text-black bg-clip-text text-xl font-extrabold text-transparent"
                >
                    Get paid to learn Arweave tooling
                </h1>
            </div>
            <div>
                <div className="mx-auto max-w-7xl py-16 px-6 sm:py-4 lg:px-6">

                    <div className="mt-8 grid grid-cols-2 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6">
                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img width={48} height={48} src={DecentLand} alt="decent.land logo" />
                            <div class="text-sm mt-3 mb-5 text-gray-500">decent.land</div>

                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img width={48} height={48} src={EXM} alt="EXM logo" />
                            <div class="text-sm mt-3 mb-5 text-gray-500">EXM</div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img
                                width={48}
                                height={48}
                                src={EverFinance}
                                alt="everfinance logo"
                            />
                            <div class="text-sm mt-3 mb-5 text-gray-500">everFinance</div>
                        </div>

                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img
                                width={48}
                                height={48}
                                src={EverLand}
                                alt="4EVERLAND Logo"
                            />
                            <div class="text-sm mt-3 mb-5 text-gray-500">4EVERLAND</div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img
                                width={48}
                                height={48}
                                src={Meson}
                                alt="Meson Network Logo"
                            />
                            <div class="text-sm mt-3 mb-5 text-gray-500">Meson</div>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
                            <img
                                width={48}
                                height={48}
                                src={PermawebNews}
                                alt="permaweb.news logo"
                            />
                            <div class="text-sm mt-3 mb-5 text-gray-500">permaweb.news</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Logos;
