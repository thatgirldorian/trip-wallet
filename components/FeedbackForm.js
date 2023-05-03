import { useState } from "react";

export default function FeedbackForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/form", {
      body: JSON.stringify({
        username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="border-2 rounded py-5">
      Username:
      <input
        className="border-[1px] rounded"
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </form>
  );
}
