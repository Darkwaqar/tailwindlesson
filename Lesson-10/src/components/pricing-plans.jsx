import { pricingPlans } from "../data"

export default function PricingPlans() {
    return (
        <div className="relative">
            <div className="absolute inset-0 flex flex-col">
            <div className=" flex-1"></div>
            <div className="bg-slate-50 flex-1"></div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8  py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {pricingPlans.map(plan => (
                    <div className="flex flex-col relative border border-slate-200 shadow-lg p-8
                bg-white rounded-2xl">
                        <h3 className="text-lg font-semibold leading-5 ">
                            {plan.title}
                        </h3 >
                        {plan.mostPoplular && (
                            <p className="absolute top-0 transform -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm
                        font-semibold rounded-full shadow-md">Most popluar</p>
                        )}
                        <p className="mt-4 text-slate-700 text-sm leading-6">{plan.description}</p>
                        <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                            <p className="text-sm font-semibold text-slate-500 flex items-center">
                                <span>{plan.currency}</span>
                                <span className="text-4xl text-slate-500 ml-3">{plan.price}</span>
                                <span className="ml-1.5">{plan.frequency}</span>
                            </p>

                        </div>
                        {/* features */}
                        <ul className="mt-6 space-y-4 flex-1">
                            {plan.feature.map((feature) => (
                                <li key={feature} className="text-sm leading-6 text-slate-700 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-5 h-5 mr-4 text-cyan-500 shrink-0">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {/* Call to action */}
                        <a href="#" className={`mt-8 block px-6 py-4 text-sm font-semibold leading-4 text-center
                    rounded-lg
                    ${plan.mostPoplular
                                ? "text-white bg-cyan-500 hover:bg-cyan-400 shadow-md"
                                : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"
                            }
                    `}>
                            {plan.cta}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
