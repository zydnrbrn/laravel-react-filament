import { Button } from "@/Components/ui/button";
import { GuestPageLayout } from "@/Layouts/GuestLayout";
import { getCart, saveProductsToStorage } from "@/Utils/cart";
import { ProductProps } from "@/types/products";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

function PaymentPage() {
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
                return { ...p, quantity: p.quantity - 1 };
            }
            return p;
        });
        setChoosedProducts(newProducts);
    };

    const formatWhatsAppMessage = (products: ProductProps[]) => {
        let message =
            "Hello, I would like to proceed with the payment for the following items:\n\n";
        let totalAmount = 0;

        products.forEach((product) => {
            const productTotal = product.price * product.quantity;
            totalAmount += productTotal;
            message += `- ${product.name} (IDR ${product.price}) x ${product.quantity} = IDR ${productTotal}\n`;
        });

        message += `\nTotal Amount: IDR ${totalAmount}\n`;
        message += "\nThank you!";
        return message;
    };

    const handleProcessNowClick = () => {
        const message = formatWhatsAppMessage(ChoosedProducts);
        const phoneNumber = "+6287895889737";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;
        window.location.href = whatsappURL;
    };

    return (
        <GuestPageLayout title="Payment">
            <div className="flex justify-center">
                <div className="bg-white w-1/2 text-center rounded-lg py-5 m-10">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Complete Your Payment
                    </h1>
                    <div className="m-4">
                        <p className="text-gray-500">
                            Please complete your payment to proceed.
                        </p>
                        <p className="text-gray-500 font-semibold">
                            After you click process now button, you will be
                            redirected to our WhatsApp, and then complete the
                            payment there.
                        </p>
                    </div>
                    <div className="m-4">
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
                                        onClick={() => addQuantity(product)}
                                        className="text-gray-500"
                                    >
                                        <PlusIcon className="h-4 w-4" />
                                    </button>
                                    <span className="text-sm/6 font-semibold">
                                        {product.quantity}
                                    </span>
                                    <button
                                        onClick={() => reduceQuantity(product)}
                                        className="text-gray-500"
                                    >
                                        <MinusIcon className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <p className="text-gray-500 font-semibold">
                            Total Amount: IDR{" "}
                            {ChoosedProducts.reduce(
                                (acc, product) =>
                                    acc + product.price * product.quantity,
                                0
                            )}
                        </p>
                    </div>
                    <div className="mt-4">
                        <Button
                            onClick={() => {
                                handleProcessNowClick();
                                saveProductsToStorage(ChoosedProducts);
                            }}
                        >
                            Process Now
                        </Button>
                    </div>
                </div>
            </div>
        </GuestPageLayout>
    );
}

export default PaymentPage;
