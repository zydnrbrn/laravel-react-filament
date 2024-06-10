import { MinusIcon, PlusIcon, ShoppingCartIcon } from "lucide-react";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import { getCart } from "@/Utils/cart";

function BadgeCart() {
    let [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }
    function CartModal() {
        const listProductsCart = getCart();
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
                                <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl text-black shadow-md mt-10">
                                    <DialogTitle
                                        as="h3"
                                        className="text-base/7 font-medium"
                                    >
                                        My Cart
                                    </DialogTitle>
                                    <div className="mt-4">
                                        {listProductsCart.map((product) => (
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
                                                    <button className="text-gray-500">
                                                        <PlusIcon className="h-4 w-4" />
                                                    </button>
                                                    <span className="text-sm/6 font-semibold">
                                                        {product.quantity}
                                                    </span>
                                                    <button className="text-gray-500">
                                                        <MinusIcon className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4">
                                        <Button
                                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                            onClick={close}
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
            <button
                onClick={open}
                className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800"
            >
                {getCart().length}
                <ShoppingCartIcon className="ml-0.5 h-4 w-4" />
            </button>
            <CartModal />
        </>
    );
}

export default BadgeCart;
