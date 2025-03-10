import { FormEvent, useState } from "react";

export default function LandingPage() {
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");

  return (
    <div className="h-screen w-screen bg-gray-50 flex items-center">
      <div className="w-full p-8">
        <h1 className="font-black text-6xl">RideMix</h1>
        <h3 className="text-gray-500 text-md">Where are you going?</h3>

        <form className="flex flex-col mt-5" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Arrival Point"
            value={arrival}
            required
            onChange={(e) => setArrival(e.target.value)}
            className="px-4 py-3 border rounded-xl bg-white text-gray-500 border-gray-200"
          />
          <input
            type="text"
            placeholder="Departure Point"
            value={departure}
            required
            onChange={(e) => setDeparture(e.target.value)}
            className="mt-3 px-4 py-3 border rounded-xl bg-white text-gray-500 border-gray-200"
          />
          <button
            type="submit"
            className="text-white bg-gray-700 py-4 border rounded-xl mt-5 hover:bg-gray-800 active:bg-black"
          >
            See options
          </button>
        </form>
      </div>
    </div>
  );

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Send the user to the options page with the arrival and departure points
  }
}
