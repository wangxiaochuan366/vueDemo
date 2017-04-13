
        /* 1、创建组件 */
        const Home = Vue.extend({
            template: '<div><h1>Home</h1><p>{{msg}}</p></div>',
            data: function() {
                return {
                    msg: 'Hello, vue router!'
                }
            },
            watch:{'$route'(to,from){
            		console.log("ss");
              }
            }
        });
        const About = Vue.extend({
            template: '<div><h1>About</h1><p>{{$route.params.grade}}--{{$route.params.number}}</p></div>'
        });

        // 2. 创建 router 实例，然后传 `routes`路由映射 配置
        const router = new VueRouter({
          routes: [
            { path: '/home', component: Home },
              { path: '/about/:grade/:number', component: About },
              { path: '/', component: Home } //设置默认路径
          ] 
        });


