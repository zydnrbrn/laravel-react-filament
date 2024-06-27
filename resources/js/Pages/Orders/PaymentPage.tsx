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

        products.forEach((product) => {
            const priceWithoutSymbols = parseFloat(
                product.price.toString().replace(/[,.]/g, "")
            );
            const productTotal = priceWithoutSymbols * product.quantity;

            message += `- ${product.name} (${product.quantity} x ${product.price}) = ${productTotal}\n`;
        });

        message += `\nTotal Amount: ${calculateTotalAmount()}`;

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

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        const feePerItem = parseFloat("3000.00"); // Parse the fee per item as 3,000.00
        ChoosedProducts.forEach((product) => {
            // Correctly interpret "25.000.00" as 25,000.00
            const priceString = product.price.toString().replace(/\./g, ""); // Remove all dots
            const priceWithoutSymbols = parseFloat(priceString) / 100; // Adjust for correct value interpretation
            const productTotal =
                (priceWithoutSymbols + feePerItem) * product.quantity; // Add fee per item
            totalAmount += productTotal;
        });
        // Correctly format the total amount
        let formattedTotalAmount = Math.round(totalAmount).toFixed(2); // Round to nearest whole number and format
        formattedTotalAmount = formattedTotalAmount.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            "."
        ); // Add dot as thousand separator
        return formattedTotalAmount;
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
                    <div className="m-10">
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
                    <div className="flex justify-between m-10">
                        <p className="text-gray-500 font-semibold">
                            Total Amount: IDR{" " + calculateTotalAmount()}
                        </p>
                        <p className="text-sm text-gray-600">
                            Note: An additional IDR 3,000.0s0 is required for
                            shipping.
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
