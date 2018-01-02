<template>
    <div class="test">
        <section>
            <label>Vendors:</label>
            <input id="vendor-selection-ddl" ref="input" class="form-control" type="text" placeholder="Type to search...">
            <typeahead v-model="selectedVendor" target="#vendor-selection-ddl" :data="vendors" item-key="name"/>
            <br/>
        </section>
        <section v-if="vendorContracts.length > 0">
            <label>{{selectedVendor.name}} Contracts:</label>
            <input id="vendor-contract-selection-ddl" ref="input" class="form-control" type="text" placeholder="Type to search...">
            <typeahead v-model="selectedVendorContract" target="#vendor-contract-selection-ddl" :data="vendorContracts" item-key="name"/>
            <br/>
        </section>
        <section v-if="vendorContractFilters.length > 0">
            <h5>{{selectedVendor.name}} Contracts : {{selectedVendorContract.name}} Filters</h5>
            <label>Filters:</label>
            <input id="vendor-contract-filter-ddl" ref="input" class="form-control" type="text" placeholder="Type to search...">
            <typeahead v-model="selectedVendorContractFilter" target="#vendor-contract-filter-ddl" :data="vendorContractFilters" item-key="name"/>
            <br/>
            <ul>
                    <li v-for="item in vendorContractFilters" :key=item.id>Name: {{item.name}} (ID: {{item.id}})</li>
            </ul>
        </section>
    </div>
    </template>



<script>

import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Test",
  components: {  },
  data() {
    return {
      selectedVendor: "",
      selectedVendorContract: "",
      selectedVendorContractFilter: "",
      //vendorContracts:[],
      //vendorContractFilters: []
    };
  },
  computed: mapGetters({
    vendors: 'allVendors',
    contracts: 'allContracts',
    contractFilters: 'allFilters',
    vendorContracts: 'allVendorContracts',
    vendorContractFilters: 'allVendorContractFilters'
  }),
  mounted() {
    this.target = this.$refs.input;
  },
  /*
  created: function() {
    this.vendors = DataService.data().vendors;
    this.contracts = DataService.data().contracts;
    this.contractFilters = DataService.data().contractFilters;
  },*/
  watch: {
    selectedVendor:  _.debounce( 
        function(selectedVendor) {
            this.selectedVendorContract = '';
            //this.vendorContracts  = this.getContracts(selectedVendor.id);
            this.selectVendor(selectedVendor);
            console.log('selectedVendor');
        },
      // This is the number of milliseconds we wait for the user to stop typing.
      250
    ),
    selectedVendorContract:  _.debounce( 
        function(selectedVendorContract) {
            //this.vendorContractFilters = this.getContractFilters(selectedVendorContract.id);
            this.selectContract(selectedVendorContract);
            console.log('selectedVendorContract, ID: ' + selectedVendorContract.id);
        },
      // This is the number of milliseconds we wait for the user to stop typing.
      250
    )
  },
  methods: mapActions([
    'selectVendor',
    'selectContract'
  ])
 };
</script>