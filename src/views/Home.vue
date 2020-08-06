<template>
  <div class="home">
    <div class="show">
      <h2>原生组件获取数据展示测试</h2>
      <a-button type="default" class="getBtn" @click="getUserListRequest"
        >获取数据</a-button
      >
      <a-button type="default" class="getBtn" @click="resetData"
        >隐藏数据</a-button
      >
      <table :userList="userList" class="originTable">
        <tr>
          <th>userid</th>
          <th>username</th>
          <th>pwd</th>
        </tr>
        <tr v-for="(item, i) in userList" :key="i">
          <td>{{ item.userid }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.pwd }}</td>
        </tr>
      </table>
    </div>
    <div class="delete">
      <h2>删除用户测试</h2>
      <template>
        <a-table :columns="columns" rowKey="userid" :data-source="userList">
          <a-button
            type="default"
            slot="action"
            slot-scope="record"
            @click="delUserRequest(record.userid)"
          >
            Delete
          </a-button>
        </a-table>
      </template>
    </div>
    <div class="add">
      <h2>新增用户测试</h2>
      <a-form-model :model="form" class="formModel">
        <a-form-model-item label="username">
          <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="password">
          <a-input v-model="form.pwd" />
        </a-form-model-item>
        <a-button type="primary" @click="addUserRequest(form)">
          Submit
        </a-button>
      </a-form-model>
    </div>
    <div class="update">
      <h2>更新用户测试</h2>
      <a-form-model :model="updateform" class="formModel">
        <a-form-model-item label="userid">
          <a-input v-model="updateform.userid" />
        </a-form-model-item>
        <a-form-model-item label="username">
          <a-input v-model="updateform.username" />
        </a-form-model-item>
        <a-button type="primary" @click="updateUserRequest(updateform)">
          Submit
        </a-button>
      </a-form-model>
    </div>
  </div>
</template>

<script>
const columns = [
  { title: "Userid", dataIndex: "userid", key: "userid" },
  { title: "Username", dataIndex: "username", key: "username" },
  { title: "Password", dataIndex: "pwd", key: "pwd" },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    scopedSlots: { customRender: "action" }
  }
];
import api from "@/api/test/test";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      columns,
      userList: [],
      form: {
        username: "",
        pwd: ""
      },
      updateform: {
        username: "",
        userid: ""
      }
    };
  },
  methods: {
    updateUserRequest(params) {
      api
        .updateUser(params)
        .then(() => {
          this.$message.success("修改成功");
          setTimeout(() => {
            this.getUserListRequest();
          }, 100);
        })
        .catch(err => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("update");
        });
    },
    addUserRequest(params) {
      api
        .addUser(params)
        .then(() => {
          this.$message.success("新增成功");
          setTimeout(() => {
            this.getUserListRequest();
          }, 100);
        })
        .catch(err => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("add");
        });
    },
    getUserListRequest() {
      api
        .getUserList()
        .then(res => {
          this.userList = res.userlist;
        })
        .catch(err => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("over");
        });
    },
    getUserListByIdRequest(id) {
      let params = {
        userid: id
      };
      api
        .getUserListId(params)
        .then(res => {
          this.updateform.username = res.username;
          this.updateform.pwd = res.pwd;
        })
        .catch(err => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("get update over");
        });
    },
    delUserRequest(id) {
      let params = {
        userid: id
      };
      api
        .deleteUser(params)
        .then(() => {
          this.$message.success("删除成功！");
          this.getUserListRequest();
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    delUser(record) {
      const _this = this;
      this.$confirm({
        title: `确认删除该用户? `,
        content: "删除后将不可恢复",
        okText: "确认",
        cancelText: "取消",
        onOk() {
          _this.delUserRequest(record.userid);
        }
      });
    },
    resetData() {
      this.userList = [];
    }
  }
};
</script>
<style scoped>
.add {
  border: 2px solid grey;
  margin: 0 auto 50px auto;
  width: 500px;
  height: 400px;
}
.delete {
  border: 2px solid grey;
  margin: 0 auto 50px auto;
  width: 500px;
  height: 400px;
}
.getBtn {
  margin: 10px;
}
.show {
  border: 2px solid grey;
  margin: 50px auto 50px auto;
  width: 500px;
  height: 400px;
}
.update {
  border: 2px solid grey;
  margin: 0 auto 50px auto;
  width: 500px;
  height: 400px;
}
.formModel {
  margin: auto;
  width: 200px;
  height: 400px;
}
.originTable {
  margin: auto;
  width: 400px;
}
</style>
