function SkeletonProductCard({ times }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {Array.from({ length: times }).map((_, i) => (
                        <article key={i} className="group animate-pulse">
                            <div className="aspect-square w-full rounded-lg bg-gray-200 group-hover:opacity-75 xl:aspect-[7/8]">
                                <div className="bg-gray-300 h-full w-full rounded-lg" />
                            </div>
                            <div className="mt-4">
                                <div className="h-4 bg-gray-300 rounded w-2/3 mb-2" />
                                <div className="h-6 bg-gray-300 rounded w-1/3" />
                            </div>
                        </article>

                    ))}
                </div>

            </div>
        </div>

    );
}

export default SkeletonProductCard;