<template>
  <div class="section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认插槽内容</h3>
      </slot>
    </div>
    <div class="footer">
      <div class="more">{{ moreText }} ></div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'DetailSection'
})

defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  moreText: {
    type: String,
    default: '查看'
  }
})
</script>

<style lang="scss" scoped>
.section {
  padding: 10px 16px;

  .header {
    margin-bottom: 20px;
    .title {
      color: #333;
      font-size: 22px;
    }
  }

  .content {
    padding: 10px 5px;
  }

  .footer {
    display: flex;
    justify-content: end;
    padding: 10px 0;
    border-bottom: 2px solid #f3f4f5;

    .more {
      color: var(--primary-color);
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>
