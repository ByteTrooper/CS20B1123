import Image from "next/image";

const getTrains = async () => {
  const response = await fetch("http://localhost:3001/trains");
  const { result } = await response.json();
  return result;
};

export default async function Home() {
  const trains = await getTrains();
  return (
    <main class="p-10 bg-white">
      <h1 class="text-center mb-5 font-mono font-bold text-lg bg-gray-100 border p-1 border-black">
        Affordmed - Train Central Assignment
      </h1>
      <div class="relative flex flex-wrap gap-5 items-center justify-center">
        {trains.map((train, index) => {
          return (
            <a
              class=" p-6 h-64 w-72 bg-gray-200 border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
              key={index}
              href={`/${train.trainNumber}`}
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {train.trainName}
              </h5>
              <p>Number: {train.trainNumber}</p>
              <p>
                Departure Time:{" "}
                {`${train.departureTime.Hours}:${train.departureTime.Minutes}:${train.departureTime.Seconds}`}
              </p>
              <p>
                Seats Available:{" "}
                {`Sleeper: ${train.seatsAvailable.sleeper}, AC: ${train.seatsAvailable.AC}`}
              </p>
              <p>
                Price:{" "}
                {`Sleeper: ${train.price.sleeper}, AC: ${train.price.AC}`}
              </p>
              <p>Delayed By: {train.delayedBy}</p>
            </a>
          );
        })}
      </div>
    </main>
  );
}
