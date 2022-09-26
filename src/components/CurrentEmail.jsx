import React from "react";
export default function CurrentEmail({
  setSeeEmail,
  currentEmail
}) {
  return <ul>
          <h1>{currentEmail.sender}</h1>
          <p>{currentEmail.title}</p>
          <button onClick={() => setSeeEmail(false)}>Back to inbox</button>
        </ul>;
}
  