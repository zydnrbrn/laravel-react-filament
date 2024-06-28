import { Faq } from "@/Components/Faq";
import { HeroParallax } from "@/Components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/Components/ui/infinite-moving-cards";
import { GuestPageLayout } from "@/Layouts/GuestLayout";
import { LeafIcon, ScissorsIcon, Utensils } from "lucide-react";

const features = [
    {
        name: "Authentic Cuisine",
        description:
            "Our store offers a wide range of authentic dishes from various cultures. Each dish is prepared with traditional recipes and fresh ingredients to ensure a genuine taste.",
        icon: Utensils,
    },
    {
        name: "Handmade Crafts",
        description:
            "We sell a variety of handmade crafts sourced directly from artisans. Each item is unique and carries the cultural significance of its origin.",
        icon: ScissorsIcon,
    },
    {
        name: "Organic Produce",
        description:
            "Our store provides organic produce sourced from local farms. We believe in promoting healthy and sustainable living.",
        icon: LeafIcon,
    },
];

export default function Index() {
    const products = [
        {
            title: "Cooking Food",
            link: "",
            thumbnail: "/assets/images/header/sddefault.jpg",
        },
        {
            title: "Cafe",
            link: "",
            thumbnail: "/assets/images/header/cafe.jpg",
        },
        {
            title: "Rattan Weaving",
            link: "",
            thumbnail: "/assets/images/header/rattan-weaving.jpg",
        },
        {
            title: "Modern Food",
            link: "",
            thumbnail: "/assets/images/header/food-street.jpg",
        },
        {
            title: "Wood Weaving",
            link: "",
            thumbnail: "/assets/images/header/wood-weaving.jpg",
        },
        {
            title: "Cooking Food",
            link: "",
            thumbnail: "/assets/images/header/sddefault.jpg",
        },
        {
            title: "Cafe",
            link: "",
            thumbnail: "/assets/images/header/cafe.jpg",
        },
        {
            title: "Rattan Weaving",
            link: "",
            thumbnail: "/assets/images/header/rattan-weaving.jpg",
        },
        {
            title: "Modern Food",
            link: "",
            thumbnail: "/assets/images/header/food-street.jpg",
        },
        {
            title: "Wood Weaving",
            link: "",
            thumbnail: "/assets/images/header/wood-weaving.jpg",
        },
        {
            title: "Cooking Food",
            link: "",
            thumbnail: "/assets/images/header/sddefault.jpg",
        },
        {
            title: "Cafe",
            link: "",
            thumbnail: "/assets/images/header/cafe.jpg",
        },
        {
            title: "Rattan Weaving",
            link: "",
            thumbnail: "/assets/images/header/rattan-weaving.jpg",
        },
        {
            title: "Modern Food",
            link: "",
            thumbnail: "/assets/images/header/food-street.jpg",
        },
        {
            title: "Wood Weaving",
            link: "https://editrix.ai",
            thumbnail: "/assets/images/header/wood-weaving.jpg",
        },
    ];

    const testimonials = [
        {
            quote: "The handcrafted batik shirt I purchased is absolutely beautiful and authentic. You can see the attention to detail and craftsmanship in every stitch.",
            name: "Samantha Lee",
            title: "Satisfied Customer",
        },
        {
            quote: "I bought a wooden carving from this store, and it is a true piece of art. It arrived quickly and was even more stunning in person.",
            name: "John Doe",
            title: "Art Enthusiast",
        },
        {
            quote: "The jewelry here is exquisite. Each piece tells a story and is crafted with such care. I will definitely be buying more!",
            name: "Maria Gonzalez",
            title: "Happy Shopper",
        },
        {
            quote: "I was looking for authentic Indonesian textiles, and this store did not disappoint. The quality is top-notch, and the designs are unique and vibrant.",
            name: "Alex Johnson",
            title: "Textile Collector",
        },
        {
            quote: "Excellent customer service and high-quality products. The rattan bag I ordered was exactly as described and beautifully made.",
            name: "Linda Smith",
            title: "Fashion Lover",
        },
    ];

    return (
        <GuestPageLayout title="Let's Bring Our Authentic Thing's to World">
            <HeroParallax products={products} />
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
            <div className="overflow-hidden py-24 sm:py-32">
                <div className="mx-auto px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                                    Authentic Experience
                                </h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Discover Genuine Products
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Explore our store filled with authentic food
                                    and handcrafted items. Each product is
                                    carefully selected to ensure it represents
                                    its cultural heritage. Experience the
                                    richness of diverse cultures through our
                                    unique collection.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div
                                            key={feature.name}
                                            className="relative pl-9"
                                        >
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon
                                                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                                {feature.name}
                                            </dt>{" "}
                                            <dd className="inline">
                                                {feature.description}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src="/assets/images/loki-santo.jpg"
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                        Trusted by the world’s most innovative teams
                    </h2>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
            <div className="my-24 sm:my-32">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    What Our Customers Say
                </h2>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="my-24 sm:my-32">
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                    Frequently Asked Question
                </h2>
                <div className="flex w-full gap-10 justify-between my-5">
                    <Faq />
                    <img
                        className="w-[400px] h-[400px]"
                        src="/assets/illustrations/questing.svg"
                        alt="Faq"
                    />
                </div>
            </div>
        </GuestPageLayout>
    );
}
