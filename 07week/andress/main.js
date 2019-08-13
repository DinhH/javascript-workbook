'use strict';

let nextBtn = document.getElementById('next').addEventListener('click', getContact)
let display = document.getElementById('display')

function catchError(res){
    if(!res.status == 404){
        throw Error(res)
    }
    return res
}

function getContact(){
    fetch('https://randomr.me/api/?results=5')
    .then(catchError)
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data.results)
        let output = ''
        data.results.forEach((contact)=> {
            output += `
            <ul>
                <img src='${contact.picture.large}'> 
                <li> Name: ${contact.name.first} ${contact.name.last} </li>
                <li> City: ${contact.location.city} </li>
                <li> Number ${contact.phone} </li>
            </ul>
            `
        })
        display.innerHTML = output;
    }).catch(err => {
        console.log('caught it!',err)
     })
}