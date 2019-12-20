import { appointmentService } from '../services'

const state = {
    all: {}
};

const actions = {
    getAll({ commit }) {
        commit('getAllRequest');

        appointmentService.getAll()
            .then(
                appointments => commit('getAllSuccess', appointments),
                error => commit('getAllFailure', error)
            );
    }
};

const mutations = {
    getAllRequest(state) {
        state.all = { loading: true };
    },
    getAllSuccess(state, appointments) {
        state.all = { items: appointments };
    },
    getAllFailure(state, error) {
        state.all = { error };
    }
};

export const appointments = {
    namespaced: true,
    state,
    actions,
    mutations
};
