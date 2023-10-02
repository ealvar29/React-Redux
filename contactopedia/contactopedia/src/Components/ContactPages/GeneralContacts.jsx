import Contact from "./Contact";

const GeneralContacts = (props) => {
  return (
    <div>
      <button className="btn btn-secondary form-control">
        {props.contacts.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </button>
    </div>
  );
};

export default GeneralContacts;
