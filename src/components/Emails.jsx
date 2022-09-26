import Email from './Email';
import React from "react";
export default function Emails({
  toggleRead,
  toggleStar,
  filteredEmails
}) {
  return <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => <Email   index={index} toggleRead={toggleRead} email={email} toggleStar={toggleStar}  />)}
        </ul>
      </main>;
}
  