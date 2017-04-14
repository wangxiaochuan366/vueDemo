
        /* 1、创建组件 */
        const Home = Vue.extend({
            template: '<div><h1>Hello</h1><button v-on:click="greet">Greet</button></div>',
            data: function() {
                return {
                    msg: 'Hello, vue router!'
                }
            },
            methods:{
              greet:function(){
                router.push({ path: '/user/foo/posts' })
              }
            }
        })
        const User = Vue.extend({
            template: '<div class="user"><h2>about</h2><router-view></router-view></div>'
        })
        const UserHome = { template: '<div>UserHome</div>' }
        const UserProfile = { template: '<div>UserProfile</div>' }
        const UserPosts = { template: '<div>UserPosts</div>' }

        // 2. 创建 router 实例，然后传 `routes` 路由映射 配置
        const router = new VueRouter({
          routes: [
              { path: '/home',name: 'home', component: Home },
              {  path: '/user/:userId',name: 'user',component: User,
                 children: [
                    { path: '', component: UserHome },
                    { path: 'profile', component: UserProfile },
                    { path: 'posts', component: UserPosts }
                  ]
              },
              { path: '/', component: Home } //设置默认路径
          ] 
        });


