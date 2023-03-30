import { useState } from "react";

import "./App.css";
import PricingPlans from "./components/pricing-plans";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mx-auto max-w-7xl bg-white px-4 pt-8 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-black sm:text-5xl sm:leading-tight
    sm:tracking-tight"
        >
          Pricing plans for teams of all sizes
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-500">
          Choose an afforabe plan that's packed with the best features for
          engaging your audience, creating customer layalty, and drive sales.
        </p>
      </div>
      <PricingPlans />
    </>
  );
}

export default App;
