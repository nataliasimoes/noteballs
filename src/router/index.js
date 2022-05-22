import NoteViews from '@/views/NoteViews.vue'
import NoteStarts from '@/views/NoteStarts.vue'
import NoteEdit from '@/views/NoteEdit.vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes =  [
    {
        path: '/',
        name: 'notes',
        component: NoteViews
    },
    {
        path: '/noteEdit/:id',
        name: 'noteEdit',
        component: NoteEdit
    },
    {
        path: '/starts',
        name: 'starts',
        component: NoteStarts
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router