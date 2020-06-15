<template>
  <div class="account-box elem_no-scale">
    <dm-dropdown @command="handleDropdown">
      <span class="account-box__link link-text">
        {{ name || '未知用户' }}
        <i class="el-icon-arrow-down el-icon--right" />
      </span>
      <dm-dropdown-menu slot="dropdown">
        <dm-dropdown-item command="modifyPw">
          修改密码
        </dm-dropdown-item>
        <dm-dropdown-item command="logout">
          退出登录
        </dm-dropdown-item>
      </dm-dropdown-menu>
    </dm-dropdown>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { logout } from "@/lib/account";

  export default {
    data() {
      return {

      }
    },
    computed:{
      ...mapGetters([
        'name'
      ])
    },
    methods:{
      handleDropdown(command) {
        if(command === 'logout') {
          logout()
        } else if(command === 'modifyPw') {
          this.$message.info('修改密码')
        }
      }
    }
  }

</script>

<style scoped lang="less">
  .account-box__link{
    color: #ffffff;
  }
</style>
