import {
    Select,
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectGroup,
    SelectContent,
    SelectLabel,
} from "@/Components/ui/select";
import { Skeleton } from "@/Components/ui/skeleton";
import { GuestPageLayout } from "@/Layouts/GuestLayout";
import { saveProductsToStorage } from "@/Utils/cart";
import { ProductCategorieProps } from "@/types/product-categories";
import { ProductProps } from "@/types/products";
import { Link, router } from "@inertiajs/react";
import { Suspense } from "react";

export default function Index({
    products,
    productCategories,
}: {
    products: ProductProps[];
    productCategories: ProductCategorieProps[];
}) {
    saveProductsToStorage(products);
    const sortedProducts = [...products].sort((a, b) => a.stock - b.stock);
    return (
        <GuestPageLayout title="Products">
            <ListProducts
                products={products}
                productCategories={productCategories}
            />
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Customers also purchased
                    </h2>
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {sortedProducts.slice(0, 4).map((product) => (
                            <Link
                                key={product.id}
                                href={route("products.detail", product.id)}
                                className="group"
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
                                    IDR {product.price}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </GuestPageLayout>
    );
}

function ListProducts({
    products,
    productCategories,
}: {
    products: ProductProps[];
    productCategories: ProductCategorieProps[];
}) {
    // This value is just receive category_id
    const handleChangeCategory = (value: string) => {
        router.get(
            route("products.index"),
            { category_id: value },
            {
                preserveState: true,
            }
        );
    };
    return (
        <div>
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="flex justify-between my-4">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Our Products
                    </h2>
                    <Select onValueChange={handleChangeCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Category</SelectLabel>
                                {productCategories.map((category) => (
                                    <SelectItem
                                        key={category.id}
                                        value={category.id.toString()}
                                    >
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    <Suspense fallback={<Skeleton className="h-20 w-20" />}>
                        {products.map((product) => (
                            <Link
                                key={product.id}
                                href={route("products.detail", product.id)}
                                className="group"
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
                                    IDR {product.price}
                                </p>
                            </Link>
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
