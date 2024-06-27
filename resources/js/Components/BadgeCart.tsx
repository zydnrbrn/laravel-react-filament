import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { getCart, setCart } from "@/Utils/cart";
import { Button } from "./ui/button";
import { router } from "@inertiajs/react";
import { ProductProps } from "@/types/products";

function BadgeCart() {
    let [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    function CartModal() {
        const [ChoosedProducts, setChoosedProducts] = useState<ProductProps[]>(
            getCart()
        );

        const addQuantity = (product: ProductProps) => {
            const newProducts = ChoosedProducts.map((p) => {
                if (p.id === product.id) {
                    return { ...p, quantity: p.quantity + 1 };
                }
                return p;
            });
            setChoosedProducts(newProducts);
        };

        const reduceQuantity = (product: ProductProps) => {
            const newProducts = ChoosedProducts.map((p) => {
                if (p.id === product.id) {
                    // Ensure quantity does not go below 0
                    const newQuantity = p.quantity > 0 ? p.quantity - 1 : 0;
                    return { ...p, quantity: newQuantity };
                }
                return p;
            });
            setChoosedProducts(newProducts);
        };

        return (
            <Transition appear show={isOpen}>
                <Dialog
                    as="div"
                    className="relative z-10 focus:outline-none"
                    onClose={close}
                    __demoMode
                >
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-start justify-end p-4">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 transform-[scale(95%)]"
                                enterTo="opacity-100 transform-[scale(100%)]"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 transform-[scale(100%)]"
                                leaveTo="opacity-0 transform-[scale(95%)]"
                            >
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl text-black shadow-md mt-16">
                                    <DialogTitle
                                        as="h3"
                                        className="text-base/7 font-medium"
                                    >
                                        My Cart
                                    </DialogTitle>
                                    <div className="mt-4">
                                        {ChoosedProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className="flex items-center justify-between gap-4"
                                            >
                                                <div className="flex w-full items-center gap-2 flex-row">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-10 w-10 object-cover rounded-lg text-xs"
                                                    />
                                                    <div>
                                                        <h4 className="text-sm/6 font-semibold">
                                                            {product.name}
                                                        </h4>
                                                        <p className="text-gray-500 text-xs/6">
                                                            IDR {product.price}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() =>
                                                            addQuantity(product)
                                                        }
                                                        className="text-gray-500"
                                                    >
                                                        <PlusIcon className="h-4 w-4" />
                                                    </button>
                                                    <span className="text-sm/6 font-semibold">
                                                        {product.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() =>
                                                            reduceQuantity(
                                                                product
                                                            )
                                                        }
                                                        className="text-gray-500"
                                                    >
                                                        <MinusIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={() => {
                                                router.get(
                                                    route("products.pay")
                                                );
                                                setCart(ChoosedProducts);
                                                close();
                                            }}
                                        >
                                            Checkout
                                        </Button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        );
    }
    return (
        <>
            <Button
                onClick={open}
                className="rounded-md px-2 text-xs font-medium"
            >
                {getCart().length}
                <ShoppingCartIcon className="ml-0.5 h-4 w-4" />
            </Button>
            <CartModal />
        </>
    );
}

export default BadgeCart;
