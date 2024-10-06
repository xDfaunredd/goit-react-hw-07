import { useSelector } from "react-redux";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
import { selectError, selectLoading } from "../../redux/selects";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && !error && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
