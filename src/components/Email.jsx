import React from "react";
export default function Email({
  index,
  toggleRead,
  email,
  toggleStar,
  setSeeEmail,
  setCurrentEmail
})

{
  return <li key={`email: ${index}`} className={`email ${email.read ? 'read' : 'unread'}`} onClick={() => {setSeeEmail(true); setCurrentEmail(email)}}>
              <div className="select">
                <input className="select-checkbox" type="checkbox" checked={email.read} onChange={() => toggleRead(email)} />
              </div>
              <div className="star">
                <input className="star-checkbox" type="checkbox" checked={email.starred} onChange={() => toggleStar(email)} />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>;
}
  