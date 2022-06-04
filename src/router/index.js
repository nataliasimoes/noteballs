import NoteViews from '@/views/NoteViews.vue'
import NoteStats from '@/views/NoteStats.vue'
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
        path: '/stats',
        name: 'stats',
        component: NoteStats
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router