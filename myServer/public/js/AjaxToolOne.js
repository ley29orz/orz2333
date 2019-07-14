(function (window) {
    function AjaxTool() {

    }

    AjaxTool.ajaxRequest=function(url,paramObj,timeOut,successCallback,failedCallback) {
        var xhr = new XMLHttpRequest();
        xhr.open('get',url+'?'+getStrWithObject(paramObj),true);
        xhr.send();
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