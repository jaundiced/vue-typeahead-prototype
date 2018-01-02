import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import DataService from "@/components/DataService"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// initial state
const state = {
    selectedVendor: null,
    selectedVendorContract: null,
    selectedVendorContractFilter: null,
    selectedVendorContracts: [],
    selectedVendorContractFilters: [],
    viewedVendors: [],
    vendors: DataService.data().vendors,
    contracts: DataService.data().contracts,
    contractFilters: DataService.data().contractFilters
}

// getters
const getters = {
    allVendors: state => state.vendors,
    allContracts: state => state.contracts,
    allFilters: state => state.contractFilters,
    allVendorContracts: state => state.selectedVendorContracts,
    allVendorContractFilters: state => state.selectedVendorContractFilters
}

// actions
const actions = {
    selectVendor({ commit }, vendor) {
        commit(types.VENDOR_SELECTED, { vendor: vendor }
        )
    },
    selectContract({commit}, contract){
        commit(types.CONTRACT_SELECTED, {contract: contract})
    }
}

// mutations
const mutations = {
    [types.VENDOR_SELECTED](state, { vendor }) {
        state.selectedVendorContracts = [];
        //state.selectedVendorContract = '';
        for (var i = 0; i < state.contracts.length; i++) {
            if (state.contracts[i].vendorId == vendor.id) {
                state.selectedVendorContracts.push(state.contracts[i]);
            }
        }
    },
    [types.CONTRACT_SELECTED](state, { contract }) {
        state.selectedVendorContractFilters = [];
        //state.selectedVendorContract = '';
        for (var i = 0; i < state.contractFilters.length; i++) {
            if (state.contractFilters[i].contractId == contract.id) {
                state.selectedVendorContractFilters.push(state.contractFilters[i]);
            }
        }
    }
}

// one store for entire application
export default new Vuex.Store({
    state,
    strict: debug,
    getters,
    actions,
    mutations
})