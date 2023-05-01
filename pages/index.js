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
      parameters: [
        { name: "user", description: "*required* the id of the user" },
        { name: "name", description: "*required* the name of the trip" },
        {
          name: "start_date",
          description: "(optional) the starting date of the trip",
        },
        {
          name: "end_date",
          description: "(optional) the end date of the trip",
        },
      ],
    },
    {
      name: "GET /trips/:id",
      description: "Get the details of a specific trip",
      parameters: [
        {
          name: "id",
          description: "*required* the number that identifies the trip",
        },
      ],
      response: `

      `,
    },
    {
      name: "PUT /trips/:id",
      description: "Edit a trip",
      parameters: [
        {
          name: "id",
          description: "*required* the number that identifies the trip",
        },
        { name: "name", description: "(optional) the name of the trip" },
        {
          name: "start_date",
          description: "(optional) the starting date of the trip",
        },
        {
          name: "end_date",
          description: "(optional) the end date of the trip",
        },
      ],
    },
    {
      name: "DELETE /trips/:id",
      description: "Delete a specific trip",
      parameters: [
        {
          name: "id",
          description: "*required* the number that identifies the trip",
        },
      ],
    },
    {
      name: "POST /expenses",
      description: "Create a new expense",
      parameters: [
        {
          name: "trip",
          description: "*required* the number that identifies the trip",
        },
        { name: "name", description: "*required* the name of the expense" },
        { name: "date", description: "*required* the date of the expense" },
        { name: "amount", description: "*required* the amount of the expense" },
        {
          name: "currency",
          description: "*required* the currency of the expense",
        },
      ],
    },
    {
      name: "GET /expenses/:id",
      description: "Get the details of a specific expense",
      parameters: [
        {
          name: "id",
          description: "*required* the number that identifies the expense",
        },
      ],
    },
    {
      name: "PUT /expenses/:id",
      description: "Edit a specific expense",
      parameters: [
        {
          name: "id",
          description: "*required* the number that identifies the expense",
        },
        {
          name: "trip",
          description: "(optional) the number that identifies the trip",
        },
        { name: "name", description: "(optional) the name of the expense" },
        { name: "date", description: "(optional) the date of the expense" },
        { name: "amount", description: "(optional) the amount of the expense" },
        {
          name: "currency",
          description: "(optional) the currency of the amount expennse",
        },
      ],
    },
    {
      name: "DELETE /expense",
      description: "Delete a specific expense",
      parameters: [
        {
          name: "id",
          description:
            "*required* this is the number that identifies the expense",
        },
      ],
    },
  ];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between bg-white py-20 px-24 ${inter.className}`}
    >
      <div className="text-center pb-10">
        <p className="text-3xl pb-5 font-semibold">Trip Wallet API</p>
        <p className="pb-5">API Documentation</p>
      </div>

      <div className="card mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {endpoints.map((endpoint, index) => (
          <div
            className={`card group rounded-lg border-2 border-grey-100 px-5 py-4 m-4`}
            key={index}
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>{endpoint.name}</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {endpoint.description}
            </p>
            {endpoint.parameters && (
              <>
                <br />
                <p>Required parameters:</p>
                <ul className="">
                  {endpoint.parameters.map((parameter, parameterIndex) => (
                    <li key={parameterIndex}>
                      <b>{parameter.name}</b>: {parameter.description}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {endpoint.response && (
              <>
                <br />
                <p className="font-medium">Sample response:</p>
                <div className="bg-green-100 text-[14px] p-2 my-2 rounded">
                  <code>
                    <p> id: 1, </p>
                    <p>user: 7,</p>
                    <p>name: Maldives Trip,</p>
                    <p>start_date: 2023-02-15T11:20:15.000Z,</p>
                    <p>end_date: null</p>
                  </code>
                </div>

                <pre>
                  <code>{endpoint.response}</code>
                </pre>
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
