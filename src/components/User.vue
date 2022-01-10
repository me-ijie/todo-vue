<template>
  <div class="hello">
    <el-form ref="form" :model="form" label-suffix="：" :rules="rules">
      <el-form-item prop="name" label="昵称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input type="number" v-model="form.mobile" />
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input type="password" v-model="form.pwd" />
      </el-form-item>
    </el-form>
    <el-button @click="submit">修改资料</el-button>
  </div>
</template>

<script>
import userApi from '../api/user.js'
export default {
  name: 'userInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      type: 'register',
      form: {
        name: '',
        mobile: '',
        pwd: '',
      }
    }
  },
  computed: {
    rules () {
      return {
        name: [
          { required: this.type === 'register', message: '请输入', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      try {
        this.$refs.form.validate(async valid => {
          if (valid) {
            let { name, mobile, pwd } = this.form
            let data = {
              mobile, 
              pwd
            }
            this.type === 'register' && (data.name = name)
            userApitg[this.type](data)
          }
        })
      } catch (e) {
        console.warn(e)
      }
    },
    getInfo () {
      let id = this.$route.params.id
      userApi.info(id)
    }
  },
  created () {
    this.getInfo()
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
</style>
