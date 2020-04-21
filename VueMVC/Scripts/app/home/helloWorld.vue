<template>
    <div class="container">
        <h1>{{ msg }}</h1>
        <button>Edit Customer Hardware Information</button>
        <button>View Customer Hardware Information</button>
        <button>Generate Customer Harware Info. Report</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .container {
        color: white;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15%;
        width: 50%;
        height: 175px;
        text-align: center;
        background-color: #5F90BA;
    }

    button {
        color: black;
        font-size: 17px;
        height: 80px;
        width: 160px;
    }
</style>