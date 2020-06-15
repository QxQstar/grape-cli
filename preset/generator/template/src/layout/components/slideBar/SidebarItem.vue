<template>
  <div class="menu-wrapper">
    <template v-if="!item.list || item.list.length < 1">
      <app-link :to="resolvePath(item.path,item.belong)">
        <dm-menu-item
          :class="{'submenu-title-noDropdown':!isNest}"
          :index="uniqIndex"
          :data-uniq-index="uniqIndex"
        >
          <item
            :icon="item.meta&&item.meta.icon"
            :title="item.name"
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
          :title="item.name"
        />
      </template>
      <sidebar-item
        v-for="(child,i) in item.list"
        :key="i"
        :is-nest="true"
        :item="child"
        :uniq-index="uniqIndex + '-' + i"
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
    }
  },
  data() {
    return {}
  },
  methods: {
    resolvePath(routePath,belong) {
      return resolvePath(routePath,belong)
    }
  }
}
</script>
