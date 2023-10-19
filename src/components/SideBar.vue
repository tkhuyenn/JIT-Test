<template>
  <el-menu
    class="el-menu-vertical-demo !border-r-0"
    @open="handleOpen"
    @close="handleClose"
    v-for="(item, index) in menu"
    :key="index">
    <el-sub-menu v-if="item.children" :index="`${index}`">
      <template #title>
        <span>{{ item.name }}</span>
      </template>
      <div v-for="(subMenu, indexSub) in item.children" :key="indexSub">
        <el-sub-menu v-if="subMenu.children" :index="`${index}-${indexSub}`">
          <template #title>{{ subMenu.name }}</template>
          <el-menu-item
            :index="`${index}-${indexSub}-${indexSecond}`"
            v-for="(secondSubMenu, indexSecond) in subMenu.children"
            :key="indexSecond">
            {{ secondSubMenu.name }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else>{{ subMenu.name }}</el-menu-item>
      </div>
    </el-sub-menu>
    <el-menu-item v-else>{{ item.name }}</el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { ref } from "vue";
interface IMenu {
  name: string;
  children?: IMenu[];
}
const menu = ref<IMenu[]>([
  {
    name: "Home",
  },
  {
    name: "Contract",
    children: [
      { name: "Contract list" },
      { name: "Create new contract" },
      { name: "Approve contract" },
      { name: "Approve user" },
      { name: "Unblock contract" },
      { name: "Unblock user" },
      { name: "Reset pin/ password" },
    ],
  },
  {
    name: "Fee management",
    children: [
      { name: "Set fee" },
      {
        name: "Transaction fee",
        children: [
          { name: "Product fee" },
          { name: "Contract fee" },
          { name: "OTC fee" },
        ],
      },
      { name: "Set fee share" },
    ],
  },
  {
    name: "Limit management",
    children: [
      { name: "Product limit" },
      { name: "Contract limit" },
      { name: "Wallet balance limit" },
    ],
  },
  {
    name: "Transaction",
    children: [
      { name: "Transaction history" },
      { name: "Top Up to E-wallet" },
      { name: "Withdrawal from E-wallet" },
      { name: "Cash back " },
      { name: "Payroll" },
      { name: "Admin transaction" },
      { name: "Reversal transaction" },
    ],
  },
  {
    name: "System",
    children: [
      { name: "Group management" },
      { name: "User management" },
      { name: "System parameter" },
    ],
  },
  {
    name: "Report",
    children: [{ name: "Report list" }],
  },
]);

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style lang="scss" scoped>
.scroll-bar-hidden {
  &::-webkit-scrollbar {
    // visibility: hidden;
    display: none;
  }
}
</style>
