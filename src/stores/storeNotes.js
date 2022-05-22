import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
                {
                    id: '1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neiaculis mauris.'
                },
                {
                    id: '2',
                    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
                }
            ]
        }
    },
    actions: {
        addNote(newNoteContent) {
            let currentTime = new Date().getTime(),
                id = currentTime.toString()

            let note = {
                id,
                content: newNoteContent
            }

            this.notes.unshift(note)
        },
        deleteNote(idToDelete){
            this.notes = this.notes.filter(note => note.id !== idToDelete)
        }
    }
})