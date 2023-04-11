function Hero() {
    return (
        <section class="bg-gray-900 text-white">
            <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
            >
                <div class="mx-auto max-w-3xl text-center">
                    <h1
                        class="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                    >
                        Permaweb Wizards

                        <span class="sm:block">  </span>
                    </h1>

                    <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        a 6-week global online event where developers of
                        all experience levels come to learn and build on Arweave
                    </p>

                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            class="block w-full rounded bg-gradient-to-r from-pink-400 to-yellow-400 px-12 py-3 text-sm font-medium text-gray-900 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                            href="/get-started"
                        >
                            Register
                        </a>

                        <a
                            class="block w-full rounded border border-yellow-500 px-12 py-3 text-sm font-medium text-yellow-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="/about"
                        >
                            See Tracks
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Hero;
