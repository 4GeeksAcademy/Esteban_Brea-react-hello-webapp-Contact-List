const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],

      contacts: [],
      selectedContact: null,
    },
    actions: {
      // Use getActions to call a function within a function

      getContacts: async () => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/esteban"
          );
          if (response.ok) {
            const data = await response.json();
            setStore({ contacts: data.contacts });
          }
        } catch (err) {
        }
      },

      addContact: async (newContact) => {
        try {
          const response = await fetch(
            "https://playground.4geeks.com/contact/agendas/esteban/contacts",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...newContact, agenda_slug: "esteban" }),
            }
          );

          if (response.ok) {
            const addedContact = await response.json();
            const store = getStore();
            setStore({ contacts: [...store.contacts, addedContact] });
          }
        } catch (err) {
        }
      },

      deleteContact: async (contactId) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/esteban/contacts/${contactId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            const store = getStore();
            const updatedContacts = store.contacts.filter(
              (contact) => contact.id !== contactId
            );
            setStore({ contacts: updatedContacts });
          }
        } catch (err) {
        }
      },

      editContact: async (updatedContact) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/esteban/contacts/${updatedContact.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedContact),
            }
          );
      
          if (response.ok) {
            const store = getStore();
            const contacts = store.contacts.map((contact) =>
              contact.id === updatedContact.id ? updatedContact : contact
            );
            setStore({ contacts });
          }
        } catch (err) {
        }
      },

      createUserButton: async () => {
        try {
          const response = await fetch("https://playground.4geeks.com/contact/agendas/esteban", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: "esteban" }),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);
          }
        } catch (err) {
        }
      },

      setSelectedContact: (contact) => {
        setStore({ selectedContact: contact });
      },

      // Use getActions to call a function within a function
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {
        /**
         * fetch().then().then(data => setStore({ "foo": data.bar }))
         */
      },

      changeColor: (index, color) => {
        // get the store
        const store = getStore();

        // we have to loop the entire demo array to look for the respective index
        // and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        // reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
