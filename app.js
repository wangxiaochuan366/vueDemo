const Foo = { template:'<div>foo</div>'}
const Bar = {template:'<div>bar</div>'}
const Baz = {template:'<div>baz</div>'}
const User = {template:'<div>user{{$route.query}}</div>'}
const UserHome = {template:'<div>UserHome</div>'}
const UserPosts = {template:'<div>UserPosts</div>'}
const UserProfile = {template:'<div>UserProfile</div>'}
const NotFoundComponent = {template:'<div>NotFoundComponent</div>'}

const routes =[
   {path:'/user/:userId',component:User,name:'user'},
   {path:'/foo',component:Foo},
   {path:'/bar',component:Bar},
]


// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  /*hash模式  URL改变时，页面不会重新加载
  通过history完成 URL 跳转而无须重新加载页面。
  */
  /* mode:'history',*/
   routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})

/* 编程式的导航
mode:  hash模式  默认
mode:  history模式
router.push(location)  history中会有记录
router.replace(location)  hisstory中不会有记录
router.go(n)   在history中向前跳转或者向后跳转

param   #/user/123
query   #/?userid=123
*/

/*
命名视图
就是一个页面可以有多个视图，
一个视图对应一个组件。一个路由，
n个视图n个组件，
相当于一次路由展示了多个组件。
*/