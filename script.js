//text

function getText(){
    fetch('msg.txt').then(response => {
        return response.text();
    }).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    })
}

getText();


//json

function getJSON(){
    fetch('msg.JSON').then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(err => { 
        console.log(err);
    })
}

getJSON();


//external api

function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then(response => {
        return response.json();
    }).then(users => {
        console.log(users.results); //arr
        users.results.forEach(user => {
            var html = `
            <div>
                <img src="${user.picture.medium}" alt="">
            </div>
            <div>
                ${user.name.title}
                ${user.name.first}
                ${user.name.last}
            </div>`
            document.querySelector('#users').innerHTML += html;
        });
    }).catch(err => {
        console.log(err);
    })
}

getExternalApi();



function postExternalApi(){
    
    const url = 'https://jsonplaceholder.typicode.com/todos/';

    var data = {
        method:'POST',
        body: JSON.stringify({
            userId:1,
            title:"new title",
            body:"new body"
        }),
        header: new Headers({
            'content-type':'application/json'
        })
    }

    fetch(url).then(res => {
        console.log(res);
    })

}

postExternalApi();