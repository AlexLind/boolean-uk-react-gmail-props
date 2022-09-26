import CurrentEmail from "./components/CurrentEmail";
import Emails from "./components/Emails";
import LeftMenu from "./components/LeftMenu";
import Header from "./components/Header";
import { useState } from "react";

import initialEmails from "./data/emails";

import "./styles/app.css";

const getReadEmails = (emails) => emails.filter((email) => !email.read);

const getStarredEmails = (emails) => emails.filter((email) => email.starred);

const getSearchedEmails = (emails, searchString) => emails.filter((email) => email.title.toLowerCase().includes(searchString));

function App() {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [seeEmail, setSeeEmail] = useState(false);
  const [currentEmail, setCurrentEmail] = useState({});
  const [searchString, setSearchString] = useState('');

  let filteredEmails = emails;

  if (hideRead) filteredEmails = getReadEmails(filteredEmails);

  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  if (searchString)  {
    filteredEmails = getSearchedEmails(filteredEmails, searchString);
    console.log(searchString);
  }

  return (
    <div className="app">
      <Header filteredEmails={filteredEmails} setSearchString={setSearchString} />
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
          setEmails={setEmails}
        />
      )}
    </div>
  );
}

export default App;
