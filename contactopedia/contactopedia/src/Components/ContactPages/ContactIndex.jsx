import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContact from "./RemoveAllContact";
import AddContact from "./AddContact";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Ben Parker",
          phone: "666-666-7770",
          email: "test@gmail.com",
          isFavorite: true,
        },
        {
          id: 2,
          name: "Peter Parker",
          phone: "666-666-7770",
          email: "test@gmail.com",
          isFavorite: true,
        },
        {
          id: 3,
          name: "May Parker",
          phone: "666-666-7770",
          email: "test@gmail.com",
          isFavorite: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2">
              <AddRandomContact />
            </div>
            <div className="col-4">
              <RemoveAllContact />
            </div>
            <div className="row py-2">
              <AddContact />
            </div>
            <div className="row py-2">
              <FavoriteContacts
                contacts={this.state.contactList.filter((x) => x.isFavorite)}
              />
            </div>
            <div className="row py-2">
              <GeneralContacts
                contacts={this.state.contactList.filter(
                  (x) => x.isFavorite == false
                )}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
