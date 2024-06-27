import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";

export function Faq() {
    return (
        <Accordion type="single" collapsible className="w-1/2">
            <AccordionItem value="item-1">
                <AccordionTrigger>Are the products authentic?</AccordionTrigger>
                <AccordionContent>
                    Yes, all our products are sourced directly from artisans and
                    craftsmen in Indonesia, ensuring their authenticity.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, we ship our products worldwide. Shipping fees and
                    delivery times may vary based on the destination.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                    We offer a 30-day return policy for undamaged and unused
                    products. Please refer to our return policy page for more
                    details.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>How can I track my order?</AccordionTrigger>
                <AccordionContent>
                    Once your order is shipped, we will send you a tracking
                    number via email. You can use this number to track your
                    order on our website or the carrier’s website.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer gift wrapping?</AccordionTrigger>
                <AccordionContent>
                    Yes, we offer gift wrapping services for an additional fee.
                    You can select this option at checkout.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>
                    Are there any care instructions for the products?
                </AccordionTrigger>
                <AccordionContent>
                    Yes, each product comes with specific care instructions to
                    ensure its longevity and preservation. Please refer to the
                    product page for detailed information.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
