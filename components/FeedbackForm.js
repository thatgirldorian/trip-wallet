import { use, useState } from "react";

export default function FeedbackForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      Username:
      <input
        type="text"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </form>
  );
}
