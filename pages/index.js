import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const endpoints = [
    {
      name: "GET /trips",
      description: "List all the trips",
    },
    {
      name: "POST /trips",
      description: "Create a new trip",
    },
    {
      name: "GET /trips/:id",
      description: "Get the details of a specific trip",
    },
    {
      name: "PUT /trips/:id",
      description: "Edit a trip",
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="text-center">
        <p className="text-3xl pb-5 font-semibold">Trip Wallet API</p>
        <p className="pb-5">API Documentation</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>GET /trips </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            List all the trips for a user
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>GET /trips</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Get the details of a specific trip
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>POST /trip</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Create a new trip
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>PUT /trip</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Edit a specific trip
          </p>
        </a>
      </div>
    </main>
  );
}
