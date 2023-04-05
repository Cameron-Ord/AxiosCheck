
function successFunction(response){
let post_container = document.getElementById(`post_container`);
   
for(let counter = 0; counter<response[`data`].length; counter = counter +1){
post_container.insertAdjacentHTML(`beforeend`, `

<span>
<h3>${response[`data`][counter][`title`]}</h3>
<p>${response[`data`][counter][`body`]}</p>
</span>
`);

}


};


function failureFunction(fail_looper){
    let post_container = document.getElementById(`post_container`);
post_container.insertAdjacentHTML(`beforeend`, `<h1>something has gona wrong.</h1>`);

};


axios.request({

    url: `https://jsonplaceholder.typicode.com/posts`
}).then(successFunction).catch(failureFunction);



