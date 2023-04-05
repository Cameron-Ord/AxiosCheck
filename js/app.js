
function successFunction(success_looper){




};


function failureFunction(fail_looper){


    
}


axios.request({

    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);