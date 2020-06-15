<template>
  <div
    class="g-slider elem_no-scale"
    :class="['g-slider_'+sliderSize]"
  >
    <div class="g-slider-inner">
      <dm-scrollbar wrap-class="scrollbar-wrapper">
        <dm-menu
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item
            v-for="(route,index) in menus"
            :key="index"
            :uniq-index="index + ''"
            :item="route"
          />
        </dm-menu>
      </dm-scrollbar>
    </div>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    components: { SidebarItem },
    data() {
      return {
        // 可选值 large,small,hidden
        sliderSize:'large'
      }
    },
    computed:{
      menus(){
        const result = []
        // 获取左侧的菜单。只处理 root 路由配置下的 children
        const getLeftMenus = (menus = []) => {
          menus.forEach(menu => {
            if(menu.meta && menu.meta.placement === 'left') {
              result.push(menu)
            }
          })
        }
        this.$router.options.routes.forEach(item => {
          if(!item.meta || !item.meta.fullPage) {
            getLeftMenus(item.children)
          }
        })
        return result
      }
    }
  }
</script>

<style scoped>

</style>
