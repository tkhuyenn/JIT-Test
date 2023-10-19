<template>
  <p class="mb-5">Payroll services in bank</p>
  <div>
    <el-form label-width="120" v-model="form">
      <div class="flex gap-5">
        <div class="flex-1">
          <el-form-item label="Request No">
            <el-input
              v-model="form.requestNo"
              placeholder="Enter request no"></el-input>
          </el-form-item>
          <el-form-item label="Debit account">
            <el-input
              v-model="form.debitAccount"
              placeholder="Enter debit account"></el-input>
          </el-form-item>
          <el-form-item label="Status">
            <el-select placeholder="Select" v-model="form.status" clearable>
              <el-option label="All" value="ALL"></el-option>
              <el-option label="Pending" value="PENDING"></el-option>
              <el-option label="Incompleted" value="INCOMPLETED"></el-option>
              <el-option label="Completed" value="COMPLETED"></el-option>
              <el-option label="Failed" value="FAILED"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="flex-1">
          <el-form-item label="Request Time">
            <el-input
              v-model="form.requestTime"
              placeholder="Enter request time"></el-input>
          </el-form-item>
          <el-form-item label="Approval date">
            <el-input
              v-model="form.approvalDate"
              placeholder="Enter approval date"></el-input>
          </el-form-item>
        </div>
        <div class="flex-1">
          <el-form-item label="Search">
            <el-input v-model="form.search" placeholder="Search"></el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>
  <div class="my-5 flex items-center justify-between">
    <!-- <el-upload
                v-model:file-list="fileList"
                action="#"
                :on-preview="handlePreview"
                :on-remove="handleRemove">
                <el-button>Upload file</el-button>
              </el-upload> -->
    <div class="flex justify-end">
      <el-button type="primary" :loading="isLoading" @click="emits('getData')"
        >Refresh</el-button
      >
    </div>
  </div>
  <div v-loading="isLoading">
    <el-table :data="dataTable" style="width: 100%">
      <el-table-column type="index" label="#" width="60" align="center">
      </el-table-column>
      <el-table-column prop="avatar" label="Avatar" width="80">
        <template #default="scope">
          <img :src="scope.row.avatar" alt="" class="h-10 w-10 object-cover" />
        </template>
      </el-table-column>
      <el-table-column prop="username" label="User name" width="180" />
      <el-table-column label="Full name" width="180">
        <template #default="scope">
          <span>{{ scope.row.first_name }} {{ scope.row.last_name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="Email" width="240" />
      <el-table-column prop="date_of_birth" label="Birthday" width="180" />
      <el-table-column prop="address" label="Address">
        <template #default="scope">
          <span>{{ scope.row.address?.city }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="mt-5"
      v-model:current-page="currPage"
      v-model:page-size="pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="sizes, prev, pager, next"
      :total="pageSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
  <div class="h-[200px] w-[600px] mx-auto">
    <el-carousel indicator-position="outside" class="" arrow="always">
      <el-carousel-item v-for="(item, index) in dataTable" :key="index">
        <div class="flex items-center gap-5 justify-center my-auto h-[inherit]">
          <img :src="item.avatar" alt="" class="w-20 h-20 object-cover" />
          <div>
            <p>Full Name: {{ item.first_name }} {{ item.last_name }}</p>
            <p>Birthday: {{ item.date_of_birth }}</p>
            <p>Address: {{ item.address.city }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    dataTable: Array<Record<string, any>>;
    isLoading: boolean;
  }>(),
  {
    dataTable: () => [],
    isLoading: false,
  },
);
const currPage = ref(1);
const pageSize = ref(20);
const form = ref({
  status: "",
  requestNo: "",
  debitAccount: "",
  requestTime: "",
  approvalDate: "",
  search: "",
});
const emits = defineEmits<{
  (e: "getData", size?: number): void;
}>();
const handleSizeChange = (value: number) => {
  pageSize.value = value;
  emits("getData", pageSize.value);
};
const handleCurrentChange = (value: number) => {
  currPage.value = value;
  emits("getData");
};
</script>
<style lang="scss" scoped>
.el-select {
  width: 100%;
}
</style>
