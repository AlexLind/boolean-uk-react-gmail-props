import Email from "./Email";
import React from "react";
export default function Emails({
  filteredEmails,
  setSeeEmail,
  setCurrentEmail,
  setEmails
}) {
  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <Email
            index={index}
            toggleRead={toggleRead}
            email={email}
            toggleStar={toggleStar}
            setSeeEmail={setSeeEmail}
            setCurrentEmail={setCurrentEmail}
          />
        ))}
      </ul>
    </main>
  );
}
