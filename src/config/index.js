/**
 * Created by Administrator on 2017/3/7.
 */
const base = 'http://m1backapi_t.m1world.com';

let API = {
    //dashboard 新增用户
    DASH_NEW_USER: base + '/newuser/statistics',
    //dashboard 用户登录次数
    DASH_USER_LOGIN: base + '/login/statistics',
    //dashboard 新增page
    DASH_NEW_PAGE: base + '/newpage/statistics'
};

window.API = API;
