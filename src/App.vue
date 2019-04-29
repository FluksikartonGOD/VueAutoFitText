<template>
  <div id="app">
    <div class="test-container">
      <vue-auto-fit-text
        :value="autoFitText.toString()"
        :observe-visibility="null"
      ></vue-auto-fit-text>
    </div>
    <div class="test-container">
      <vue-auto-truncate-text
        :value="truncateTest.toString()"
      ></vue-auto-truncate-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      autoFitText: '1',
      truncateTest: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi excepturi amet eaque sint sunt quasi assumenda similique esse sed totam. Quod nam beatae omnis voluptatum nobis modi explicabo autem, nesciunt commodi rem pariatur eius repellendus et dolor inventore incidunt ex natus reprehenderit, eaque temporibus recusandae illum, consectetur exercitationem! Iste nihil dolore quaerat error sapiente expedita autem nam tempore impedit magnam itaque, praesentium illum asperiores ratione voluptatem neque laborum nesciunt cum. Praesentium quas inventore, vel neque commodi labore repellat modi quis dolorum soluta iste quasi nulla impedit temporibus explicabo provident at sapiente id distinctio molestias doloremque quidem voluptates? Maiores, dolorum molestiae blanditiis pariatur quisquam, dicta facere qui quo, inventore ex debitis sit officiis nostrum possimus quas asperiores deserunt labore iure iusto accusamus impedit! Veniam quia excepturi tempora ea odio ex hic vero ut iste blanditiis quas ducimus qui, voluptatibus molestias animi, cumque nihil magnam. Doloremque illo qui illum. Possimus, error temporibus sunt eligendi unde quibusdam inventore perspiciatis nemo similique ullam tempore iusto enim veritatis ab minima? Id rem optio aut perferendis repellendus molestias, dolorem magni minima similique nam, illum distinctio aspernatur et totam ab dolore quisquam in unde alias sit delectus sequi, nihil neque explicabo? Facilis, dolorum! Repudiandae exercitationem esse eaque!'
    }
  },
  // mounted() {
  //   setInterval(() => {
  //     this.testValue += '1'
  //   }, 500)
  // },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.test-container {
  width: 100%;
  max-width: 400px;
  height: 100px;
}
</style>
