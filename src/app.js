import CurrentEmail from "./components/CurrentEmail";
import Emails from "./components/Emails";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/app.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [seeEmail, setSeeEmail] = useState(false);
  const [currentEmail, setCurrentEmail] = useState({});

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header />
      <LeftMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        emails={emails}
      />
      {seeEmail ? (
        <CurrentEmail currentEmail={currentEmail} setSeeEmail={setSeeEmail} />
      ) : (
        <Emails
          filteredEmails={filteredEmails}
          setSeeEmail={setSeeEmail}
          setCurrentEmail={setCurrentEmail}
        />
      )}
    </div>
  );
}

export default App;
