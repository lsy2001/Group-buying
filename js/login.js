var loginSubmit = document.getElementById("submit");

//获取地址栏
var str = location.href;
console.log(str);
//获取注册页面传值过来的注册信息
function getParamByUrl(url) {
    var theRequest = new Object(); //创建一个对象
    var index = url.indexOf("?"); //?所出现的位置
    console.log(index)
    if (index != -1) {
        var str = url.substr(index + 1); //从？后一个开始截取
        strs = str.split("&"); //以&进行拆分
        for (var i = 0; i < strs.length; i++) {
            //将信息以键值对的形式存放
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
//调用函数
var params = getParamByUrl(str);
console.log(params);

//判断用户和密码是否匹配
var userName = document.getElementById("username");
var userPass = document.getElementById("userpass");

//获得焦点函数
userName.onfocus = function() {
        userPass.className = "display-none";
    }
    //失去焦点函数
userName.onblur = function() {
        //判断重复密码是否正确
        if (userName.value != params["phone"]) {
            userPass.className = "display-inline icon-times-circle";
            userPass.innerHTML = "手机号码不正确！";
            loginSubmit.setAttribute("disabled", true);

        } else {
            userPass.className = "display-inline icon-check-circle";
            userPass.innerHTML = "手机号码正确！";
            loginSubmit.removeAttribute('disabled');
        }
    }
    //密码是否匹配
var password = document.getElementById("password");
var passTo = document.getElementById("passto");
//获得焦点函数
password.onfocus = function() {
        passTo.className = "display-none";
    }
    //失去焦点函数
password.onblur = function() {
    //判断重复密码是否正确
    if (password.value != params["pass"]) {
        passTo.className = "display-inline icon-times-circle";
        passTo.innerHTML = "密码不正确！";
        loginSubmit.setAttribute("disabled", true);
    } else {
        passTo.className = "display-inline icon-check-circle";
        passTo.innerHTML = "密码正确！";
        loginSubmit.removeAttribute('disabled');
    }
}

//点击后提交数据到index.html
loginSubmit.onclick = function() {
    //alert(1);
    if (password.value == "" || userName.value == "") {
        alert("请填写信息后登录");
    } else {
        //跳转页面
        window.location.href = "./index.html?username=" + userName.value;
    }
}