import { Button } from "@/Components/ui/button";
import { GuestPageLayout } from "@/Layouts/GuestLayout";

function PaymentPage() {
    return (
        <GuestPageLayout title="Payment">
            <div className="flex justify-center">
                <div className="bg-white w-1/2 text-center rounded-md py-5 m-10">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                        Complete Your Payment
                    </h1>
                    <p className="text-gray-500">
                        Please complete your payment to proceed.
                    </p>
                    <div className="mt-4">
                        <Button>Pay Now</Button>
                    </div>
                </div>{" "}
            </div>
        </GuestPageLayout>
    );
}

export default PaymentPage;
