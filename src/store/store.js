import { defineStore } from 'pinia'

export const contactsManagementStore = defineStore('store', {
  state: () => {
    return {
      currentContact: 0,
      contacts: [
        {
          id: 0,
          name: 'Simone',
          image: 'https://picsum.photos/id/277/50/50',
          chat: [
            {
              user: 'Simone',
              message: 'Ue che dici?',
              date: ''
            },
            {
              user: 'Pasquale',
              message: 'tutt apposto tu?',
              date: ''
            },
            {
              user: 'Simone',
              message: 'bene bene',
              date: ''
            }
          ]
        },
        {
          id: 1,
          name: 'Leonardo',
          image: 'https://picsum.photos/id/337/50/50',
          chat: [
            {
              user: 'Leonardo',
              message: 'Sono LEo?',
              date: ''
            },
            {
              user: 'Pasquale',
              message: 'tutt apposto tu?',
              date: ''
            },
            {
              user: 'Leonardo',
              message: 'bene bene',
              date: ''
            }
          ]
        },
        {
          id: 2,
          name: 'Francesco',
          image: 'https://picsum.photos/id/217/50/50',
          chat: [
            {
              user: 'Francesco',
              message: 'Sono Franscesco, che fai?',
              date: ''
            },
            {
              user: 'Pasquale',
              message: 'lavoro tu?',
              date: ''
            },
            {
              user: 'Francesco',
              message: 'gioco',
              date: ''
            }
          ]
        },
        {
          id: 3,
          name: 'Umberto',
          image: 'https://picsum.photos/id/235/50/50',
          chat: [
            {
              user: 'Francesco',
              message: 'Sono Franscesco, che fai?',
              date: ''
            },
            {
              user: 'Pasquale',
              message: 'lavoro tu?',
              date: ''
            },
            {
              user: 'Francesco',
              message: 'gioco',
              date: ''
            }
          ]
        },
        {
          id: 4,
          name: 'Donatella',
          image: 'https://picsum.photos/id/230/50/50',
          chat: new Array()
        },
        {
          id: 5,
          name: 'Giovanni',
          image: 'https://picsum.photos/id/170/50/50',
          chat: new Array()
        },
        {
          id: 6,
          name: 'Gerardo',
          image: 'https://picsum.photos/id/123/50/50',
          chat: new Array()
        },
        {
          id: 7,
          name: 'Roberto',
          image: 'https://picsum.photos/id/158/50/50',
          chat: new Array()
        },
        {
          id: 8,
          name: 'Vincenzo',
          image: 'https://picsum.photos/id/140/50/50',
          chat: new Array()
        }
      ]
    }
  },
  actions: {
    changeCurrentContact(currentContact) {
      this.currentContact = currentContact
    },

    addNewMessage(message) {
      this.contacts.push(message)
    }
  }
})
