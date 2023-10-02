import Contact from "./Contact";

const FavoriteContacts = (props) => {
  console.log(props);
  return (
    <div>
      {props.contacts.map((contact, index) => (
        <Contact contact={contact} key={index}></Contact>
      ))}
    </div>
  );
};

export default FavoriteContacts;
