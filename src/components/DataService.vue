<template>
</template>

<script>
export default{
    name: 'DataService',
    data(){
        return{
            vendors:[
                {id: 1, name: "Acme"},
                {id: 2, name: "Brutus"},
                {id: 3, name: "Salt Lick"},
                {id: 4, name: "Turd Mount"},
                {id: 5, name: "Freebase"}
            ],
            contracts:[
                {vendorId:1, id:1, name: "Acme Auto"},
                {vendorId:1, id:2, name: "Acme Health"},
                {vendorId:1, id:3, name: "Acme Home"},
                {vendorId:2, id:4, name: "Brutus Life"},
                {vendorId:2, id:5, name: "Brutus Auto Exclusive"},
                {vendorId:2, id:6, name: "Brutus Pet"},
                {vendorId:3, id:7, name: "Salt Lick Mortgage 1"},
                {vendorId:3, id:8, name: "Salt Lick Mortgage 2"},
                {vendorId:3, id:9, name: "Salt Lick Mortgage 3"},
                {vendorId:3, id:10, name: "Salt Lick Mortgage 4"},
                {vendorId:4, id:11, name: "Acmorgolie Auto"},
                {vendorId:4, id:12, name: "Acmorgolie Life"},
                {vendorId:5, id:13, name: "ActOne Auto"},
                {vendorId:5, id:14, name: "ActOne Life"},
                {vendorId:5, id:15, name: "ActOne Renter"},
                {vendorId:5, id:16, name: "ActOne Home"}
            ],
            contractFilters:[
                {id:100, contractId:1, name: "Acme Auto Filter 1", type:"AAA"},
                {id:101, contractId:1, name: "Acme Auto Filter 2", type:"Ex"},
                {id:102, contractId:2, name: "Acme Health Filter 1", type:"Wsdfhf"},
                {id:103, contractId:2, name: "Acme Health Filter WWW", type:"TeaPot Splat"},
                {id:104, contractId:3, name: "Acme Home Filter 1", type:"OM Nom Nom"},
                {id:105, contractId:3, name: "Acme Home Filter XXX", type:"booop"},
                {id:121, contractId:4, name: "Brutus Life A", type:"narwhal"},
                {id:122, contractId:5, name: "Brutus Auto Exclusive FilterGasm", type:"splooge"},
                {id:123, contractId:6, name: "Brutus Pet Stain", type:"xxxx"},
                {id:124, contractId:7, name: "Salt Lick Universal", type:"tre"},
                {id:125, contractId:8, name: "Salt Lick Galactic", type:"brfghtydhdu"},
                {id:126, contractId:9, name: "Salt Lick Planetary", type:"sprght"},
                {id:127, contractId:10, name: "Salt Lick centimeter", type:"cm"},
                {id:128, contractId:10, name: "Salt Lick millimeter", type:"mm"}
            ]
        }
    },
    methods:{
            getVendors(){
                return this.vendors; //this.vendors;
            },
            getContracts(vendorId){
                var contracts = [];
                for(var i=0; i < this.contracts.length; i++){
                    if(this.contracts[i].vendorId == vendorId){
                        contracts.push(contracts[i]);
                    }
                }
                return contracts;
            },
            getContractFilters(contractId){
                var filters = [];
                for(var i=0; i < this.contractFilters.length; i++){
                    if(this.contractFilters[i].contractId == contractId){
                        filters.push(this.contractFilters[i]);
                    }
                }
                return filters;
            }
    }
}
</script>