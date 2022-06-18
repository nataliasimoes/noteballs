import { defineStore } from 'pinia'
import { collection, onSnapshot, doc, addDoc,  deleteDoc, updateDoc, query, orderBy } from 'firebase/firestore'
import { db } from '../js/firebase'
const notesCollectionRef = collection(db, "notes")
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));


export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        return {
            notes: [
            ]
        }
    },
    actions: {
        async getNotes() {
            onSnapshot(notesCollectionQuery , (querySnapshot) => {
                let notes = []
                querySnapshot.forEach((doc) => {
                    let note = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    }
                    notes.push(note)
                })
                this.notes = notes
            })
        },
        async addNote(newNoteContent) {
            let currentTime = new Date().getTime(),
                date = currentTime.toString()

            await addDoc(notesCollectionRef, {
                content: newNoteContent,
                date
              });
        },
        async deleteNote(idToDelete) {
            await deleteDoc(doc(notesCollectionRef, idToDelete));
        },
        async updateNote(id, content) {
            await updateDoc(doc(notesCollectionRef, id), {
                content
            });
        }
    },
    getters: {
        getNoteContent: (state) => {
            return (id) => {
                return state.notes.filter(note => {
                    return note.id === id
                })[0].content
            }
        },
        totalNotesCount: (state) => {
            return state.notes.length
        },
        totalLengthCharacters: (state) => {
            let count = 0
            state.notes.forEach(note => {
                count += note.content.length
            })
            return count
        }
    }
})