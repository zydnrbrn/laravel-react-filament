import { Button } from "@/Components/ui/button";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { ProductProps } from "@/types/products";

function ListProducts({ products }: { products: ProductProps[] }) {
    return (
        <div>
            <div className="flex justify-between">
                <p className="text-sm text-gray-800 font-light">
                    Add or Update Products here.
                </p>
                <Button>Add Product</Button>
            </div>
            <div className="mx-auto py-10 lg:max-w-7xl ">
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <a
                            key={product.id}
                            href={"#"}
                            className="group shadow rounded-md p-5"
                        >
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">
                                {product.name}
                            </h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">
                                {product.price}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

function Index({
    auth,
    products,
}: {
    auth: PageProps["auth"];
    products: ProductProps[];
}) {
    return (
        <Authenticated user={auth.user} title="Manage Products">
            <ListProducts products={products} />
        </Authenticated>
    );
}

export default Index;
