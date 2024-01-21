<template>
  <div>
    <div id="log-btn" class="frosted-glass" @click="showModal">
      <i class="iconfont icon-rizhi" id="log-icon"></i>
    </div>

    <Teleport to="body">
      <a-modal v-model:open="open" width="600px" title="更新日志" :footer="null" centered>
        <div v-for="logItem in logs.reverse()" id="log-container">
          <div id="log-version">{{ "V " + logItem.version }}</div>
          <div id="log-data">{{ logItem.data }}</div>
          <ul id="log-content">
            <li v-for="logContent in logItem.content">
              {{ logContent }}
            </li>
          </ul>
        </div>
      </a-modal>
    </Teleport>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import logs from '../../MyLogs/log'

const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

</script>

<style scoped>
#log-btn {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
}

#log-icon {
  /* color: var(--primary-color); */
  font-size: 20px;
  margin: auto;
}

#log-icon:hover {
  color: var(--primary-color);
}

#log-container {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 10px;
  margin: 50px;
  border-radius: 10px;
  background-color: var(--second-color);
  user-select: none;
}

#log-version {
  font-size: 25px;
  font: bold;
  margin: 5px;
}

#log-data {
  font-size: 10px;
  margin: 5px;
}

#log-content {
  text-align: left;
}
</style>