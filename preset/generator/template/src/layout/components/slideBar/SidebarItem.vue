<template>
  <div class="menu-wrapper">
    <template v-if="!item.children || item.children.length < 1 || noShowingChildren(item.children)">
      <app-link
        :to="resolvePath(basePath,item.path)"
        class="menu-link"
      >
        <dm-menu-item
          :class="{'submenu-title-noDropdown':!isNest}"
          :index="uniqIndex"
          :data-uniq-index="uniqIndex"
        >
          <item
            :icon="item.meta&&item.meta.icon"
            :title="item.meta.menuName"
          />
        </dm-menu-item>
      </app-link>
    </template>

    <dm-submenu
      v-else
      ref="subMenu"
      :index="uniqIndex"
      :data-uniq-index="uniqIndex"
      popper-append-to-body
    >
      <template slot="title">
        <item
          :icon="item.meta && item.meta.icon"
          :title="item.meta.menuName"
        />
      </template>
      <sidebar-item
        v-for="(child,i) in item.children"
        :key="i"
        :is-nest="true"
        :item="child"
        :uniq-index="uniqIndex + '-' + i"
        :base-path="resolvePath(basePath,item.path)"
        class="nest-menu"
      />
    </dm-submenu>
  </div>
</template>

<script>
import { resolvePath } from '@/lib/menu'
import Item from './Item'
import AppLink from './Link'

export default {
  name: 'SidebarItem',
  components: { Item, AppLink },
  props: {
    // menu object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    uniqIndex:{
      type:String,
      default:'0'
    },
    basePath: {
      type: String,
      default: '/'
    }
  },
  data() {
    return {}
  },
  methods: {
    resolvePath(basePath,routePath) {
      return resolvePath(basePath,routePath)
    },
    noShowingChildren(children){
      return children.every(route => {
        const meta = route.meta || {}

        return !!meta.hidden
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .menu-link{
    text-decoration: none;
  }
</style>
