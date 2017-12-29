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
        <data-service />
    </div>
    </template>



<script>
import DataService from "@/components/DataService";
export default {
  name: "Test",
  components: { DataService },
  data() {
    return {
      selectedVendor: "",
      selectedVendorContract: "",
      selectedVendorContractFilter: "",
      vendors: [],
      contracts: [],
      contractFilters: [],
      vendorContracts:[],
      vendorContractFilters: []
    };
  },
  mounted() {
    this.target = this.$refs.input;
  },
  created: function() {
    this.vendors = DataService.data().vendors;
    this.contracts = DataService.data().contracts;
    this.contractFilters = DataService.data().contractFilters;
  },
  watch: {
    selectedVendor:  _.debounce( 
        function(selectedVendor) {
            this.selectedVendorContract = '';
            this.vendorContracts  = this.getContracts(selectedVendor.id);
            console.log('selectedVendor');
        },
      // This is the number of milliseconds we wait for the user to stop typing.
      250
    ),
    selectedVendorContract:  _.debounce( 
        function(selectedVendorContract) {
            this.vendorContractFilters = this.getContractFilters(selectedVendorContract.id);
            console.log('selectedVendorContract, ID: ' + selectedVendorContract.id);
        },
      // This is the number of milliseconds we wait for the user to stop typing.
      250
    )
  },
  methods: {
    getContracts: function(vendorId) {
        var vc = [];
                for(var i=0; i < this.contracts.length; i++){
                    if(this.contracts[i].vendorId == vendorId){
                        vc.push(this.contracts[i]);
                    }
                }
                console.log("Vendor ID: " + vendorId + " = " + vc.length + " vendor contracts")
                return vc;
      },
      getContractFilters: function(contractId){
                var cf = [];
                for(var i=0; i < this.contractFilters.length; i++){
                    if(this.contractFilters[i].contractId == contractId){
                        cf.push(this.contractFilters[i]);
                    }
                }
                return cf;
      }
  }
};
</script>