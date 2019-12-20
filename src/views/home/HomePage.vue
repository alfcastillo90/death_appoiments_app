<template>
    <div>
        <h1>Hi {{account.user.data.name}}!</h1>
        <p>You're logged in with Vue + Vuex & Laravel passport!!</p>
        <h3>Appointments from secure api end point:</h3>
        <em v-if="appointments.loading">Loading appointments...</em>
        <span v-if="appointments.error" class="text-danger">ERROR: {{appointments.error}}</span>
        <ul v-if="appointments">
            <li v-for="appointment in appointments.items" :key="appointment.id">
                {{appointment.id + ' ' + appointment.victim.name + ' ' + appointment.appointed_at}}
            </li>
        </ul>
        <p>
            <router-link to="/login">Logout</router-link>
        </p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        ...mapState({
            account: state => state.account,
            appointments: state => state.appointments.all
        })
    },
    created () {
        this.getAllAppointments();
    },
    methods: {
        ...mapActions('appointments', {
            getAllAppointments: 'getAll'
        })
    }
};
</script>