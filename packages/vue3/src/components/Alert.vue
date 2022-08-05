<template>
  <div
    class="flex items-center"
    :class="classes"
  >
    <div v-if="custom_icon">
    this
      <slot name="alert-icon"></slot>
    </div>
    <div v-else>
    </div>

    <div class=""> 
      <slot name="alert-content">
        <span class="font-medium"> {{ title }}</span>
        <span class="ml-1"> {{ description }} </span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
// import {SPACES, BOXMODEL, VARIANTS, EDGES } from '../helpers/Common';

export default {
  props: {
    
    custom_icon: {
      default: false,
    },

    title: {
      type: String
    },

    description: {
      type: String
    },

    // variant: {
    //   type: String,
    //   validator: (value) => {
    //     return Object.keys(VARIANTS).includes(value);
    //   },
    // },

    classes: {
      default: '',
      type: String
    },
  },

  computed: {
   
    // setVariant() {
    //   if (this.variant == "basic" || !this.variant) {
    //     return "";
    //   }
    //   return VARIANTS[this.variant];
    // },
  },
};
</script>
