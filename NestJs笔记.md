### NestJS 请求生命周期

```
1. 收到请求

2. 全局绑定的中间件
3. 模块绑定的中间件

4. 全局守卫
5. 控制层守卫
6. 路由守卫

7. 全局拦截器（控制器之前）
8. 控制器层拦截器 （控制器之前）
9. 路由拦截器 （控制器之前）

10. 全局管道
11. 控制器管道
12. 路由管道
13. 路由参数管道

14. 控制器（方法处理器） 

15. 服务（如果有）

16. 路由拦截器（请求之后）
17. 控制器拦截器 （请求之后）
18. 全局拦截器 （请求之后）

19. 异常过滤器 （路由，之后是控制器，之后是全局）

20. 服务器响应
```

除了**异常过滤器和拦截器（请求后）**是由路由->控制器->全局

**中间间、守卫、拦截器（请求前）、管道**都是从全局->控制器->路由的顺序执行

