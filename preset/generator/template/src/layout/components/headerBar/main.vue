<template>
  <div class="g-header elem_no-scale">
    <div class="header-main elem_1x">
      <div class="logo elem_no-scale">
        <div class="logo__img">
          {{ projectName }}
        </div>
      </div>
      <!-- nav -->
      <ul class="nav-box elem_1x">
        <li
          v-for="(navItem,key) in data"
          :key="key"
          class="nav-box__nav"
          :class="{'nav-box__nav_active':activeTopNav === key}"
          @click="handleChangeNav(key)"
        >
          {{ navItem.name }}
        </li>
      </ul>
    </div>
    <v-account />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import vAccount from './account'

  export default {
    components:{ vAccount },
    data() {
        return {
          data:[],
          projectName:process.env.VUE_APP_PROJECT_NAME
        }
    },
    computed:{
      ...mapState({
        activeTopNav:state => state.menu.activeTopNav,
      })
    },
    methods:{
      handleChangeNav(index) {
        this.$store.commit('menu/SET_ACTIVE_TOP_NAV', index)
      }
    }
  }
</script>

<style scoped>

</style>
