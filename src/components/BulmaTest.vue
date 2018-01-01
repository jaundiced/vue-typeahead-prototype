<template>
  <div id="demo">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Vue Bulma Typeahead Demo
          </h1>
        </div>
      </div>
    </section>

    <div class="container">

      <div class="columns">
        <div class="column is-4 is-offset-4">
          <label class="label">U.S. State</label>
          <p class="control has-icons-left">
            <!-- Start Typeahead Component -->
            <typeahead :source="vendors" :onSelect="onSelect" :onChange="onChange" :limit="5" id="vendorListTypeahead" item-key="id"></typeahead>
            <!-- End Typeahead Component -->
            <span class="icon is-small is-left">
              <i class="fa fa-magic"></i>
            </span>
          </p>
        </div>
      </div>

      <div class="columns">
        <div class="column is-4 is-offset-4">
          You are searching for '{{ value }}'
        </div>
      </div>

    </div>
     <data-service />
  </div>
</template>
  

<script>
import Typeahead from './Typeahead.vue'
import DataService from "@/components/DataService"

export default {
  name: 'BulmaTest',
  components: { Typeahead, DataService },
  data () {
    return {
      vendors: [],
      contract: [],
      contractFilters: [],
      value: ''
    }
  },
  methods: {
    onSelect (value) {
      console.log(`'${value}' was selected.`)
      this.value = value
    },
    onChange (value) {
      console.log(`Value changed to ${value}.`)
      this.value = value
    }
  },
  created: function() {
    this.vendors = DataService.data().vendors;
    this.contracts = DataService.data().contracts;
    this.contractFilters = DataService.data().contractFilters;
  }
}
</script>

<style scoped>
.hero {
  margin-bottom: 35px;
}
</style>