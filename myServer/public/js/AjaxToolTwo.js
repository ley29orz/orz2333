(function (window) {
    function AjaxTool() {

    }

    AjaxTool.ajaxRequest=function(param,successCallback,failedCallback) {
        //1.获取参数
        var requestType = param['requestType'] || 'get';//请求方式
        var url =  param['url'];//请求的路径
        var paramObj =  param['paramObj'];
        var timeOut = param['timeOut'];

        //2.发送请求
        var xhr = new XMLHttpRequest();
        //判断
        if(requestType.toLowerCase() === 'get'){
            //get请求
            var codeURL = encodeURI(url+'?'+getStrWithObject(paramObj));
            xhr.open('get',codeURL,true);
            xhr.send();
        }else if (requestType.toLowerCase() === 'post') {
            //post请求
            var codeParam = encodeURI(getStrWithObject(paramObj));
            xhr.open('post',url,true);
            /*设置请求头*/
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(codeParam);
        }
        //监听服务器响应
        xhr.addEventListener('readystatechange',function (ev2) {
            /*console.log(xhr.readyState);*/
            if (xhr.readyState ===4){
                /*alert(xhr.status);*/
                if (xhr.status===200){
                    //请求成功
                    successCallback && successCallback(xhr);
                    clearTimeout(timer);
                }else{
                    //请求失败
                    failedCallback && failedCallback(xhr);
                }
            }

        });

        /*0代表不限制请求时间*/
        var timer =null;
        if(timeOut>0){
            timer =setTimeout(function () {
                //取消请求
                xhr.abort();
            },timeOut)
        }

        /* {
             name:"张三",
             age:18
         }
         name="张三"&age=18
         */
        /*把对象转成拼接字符串*/
        function getStrWithObject(paramObj) {
            let resArr =[];
            //1. 转化对象
            for ( let key in paramObj){
                let str =key+'='+paramObj[key];
                resArr.push(str);
            }
            //2.拼接时间戳
            resArr.push('random='+getRandomStr());
            //3.数组转成字符串
            return resArr.join('&');
        }

        /*获得随机时间戳*/
        function getRandomStr() {
            return Math.random()+(new Date().getTime());
        }

    }
    window.AjaxTool=AjaxTool;
})(window);