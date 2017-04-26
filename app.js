const Foo = { template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}
const UserHome = {template:'<div>UserHome</div>'}
const UserPosts = {template:'<div>UserPosts</div>'}
const UserProfile = {template:'<div>UserProfile</div>'}
const User = {template:'<div>User</div>'}
/*const User = {
  template: `
    <div class="user">
      <h2>User {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
}*/
const routes =[
   {path:'/foo',component:Foo,name:'foo'},
   {path:'/bar',component:Bar,name:'bar'},
/*   {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: '', component: UserHome },
        { path: 'profile', component:UserPosts,name:'profile'},
        { path: 'posts', component:UserProfile,name:'posts'}
      ]
    }*/
      {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})