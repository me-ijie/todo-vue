<template>
  <div class="hello">
    <el-radio-group v-model="type">
      <el-radio value="注册" label="register"></el-radio>
      <el-radio value="登录" label="login"></el-radio>
    </el-radio-group>
    <el-form ref="form" :model="form" label-suffix="：" :rules="rules">
      <el-form-item prop="name" label="昵称">
        <el-input v-model="form.name" :disabled="type === 'login'" />
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input type="number" v-model="form.mobile" />
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input type="password" v-model="form.pwd" />
      </el-form-item>
    </el-form>
    <el-button v-if="type==='register'" @click="submit">注册</el-button>
    <el-button v-else @click="login">登录</el-button>
  </div>
</template>

<script>
import userApi from '../api/user.js'
export default {
  name: 'login',
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
        mobile: [
          { required: true, message: '请输入', trigger: 'blur' }
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
            const res = userApi[this.type](this.form)
            if (!res) return
            this.$message.success('注册成功！')
          }
        })
      } catch (e) {
        console.warn(e)
      }
    },
    async login () {
      try {
        this.$refs.form.validate(async valid => {
          if (valid) {
            const res = await userApi[this.type](this.form)
            if (!res) return
            this.$message({
              message: '登录成功！',
              type: 'success'
            })
            this.$router.push({name: 'userInfo', params: {id: res}})
          }
        })
      } catch (e) {
        console.warn(e)
      }
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
</style>
