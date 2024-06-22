import { GuestPageLayout } from "@/Layouts/GuestLayout";
import { addToCart } from "@/Utils/cart";
import { PageProps } from "@/types";
import { ProductProps } from "@/types/products";
import { ShoppingCartIcon } from "lucide-react";

export default function Detail({
    product,
}: PageProps & { product: ProductProps }) {
    return (
        <GuestPageLayout title={"Detail"}>
            <div className="my-10">
                <div className="pt-6">
                    {/* Image gallery */}
                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                {product.name}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">
                                IDR {product.price}
                            </p>
                            <button
                                onClick={() => addToCart(product.id)}
                                className="mt-10 flex gap-2 w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                {<ShoppingCartIcon />} Add to cart
                            </button>
                            <p>Stock: {product.stock}</p>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">
                                        {product.description}
                                    </p>
                                </div>
                            </div>

                            {/* <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Highlights
                                </h3>

                                <div className="mt-4">
                                    <ul
                                        role="list"
                                        className="list-disc space-y-2 pl-4 text-sm"
                                    >
                                        {product.highlights.map((highlight) => (
                                            <li
                                                key={highlight}
                                                className="text-gray-400"
                                            >
                                                <span className="text-gray-600">
                                                    {highlight}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">
                                    Details
                                </h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">
                                        {product.details}
                                    </p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </GuestPageLayout>
    );
}
