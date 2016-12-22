import Home from '../components/Home'
import TimeEntries from '../components/TimeEntries.vue'
import LogTime from '../components/LogTime.vue'
import Doctors from '../components/Doctors.vue'
import TodoList from '../components/TodoList.vue'
import NotFound from '../components/404'

export default  {
  routes: [
    {
        path: '/',
        component: Home
    },{
        path: '/home',
        component: Home
    },{
         path: '/time-entries',
         component: TimeEntries,
         children: [{
            path: 'log-time',
            component: LogTime
         }]
    },{
      path: '/doctors',
      component : Doctors
    },{
      path: '/todoList',
      component: TodoList
    },{
      path : '*',
      component : NotFound
    }]
}

