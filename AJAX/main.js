// document.addEventListener('DOMContentLoaded', function (e) {
//     e.preventDefault();
//     const name = document.getElementById('name');
//     const userName = document.getElementById('userName');
//     const avatar = document.getElementById('avatar');
//     const respositories = document.getElementById('respositories');
//     const followers = document.getElementById('followers');
//     const following = document.getElementById('following');
//     const linkGitHub = document.getElementById('linkGitHub');

//     // Fazer o fetch com o endpoint/api 
//     fetch('https://api.github.com/users/DiasSergio')
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (json) {
//             console.log(json)
//             avatar.src = json.avatar_url;
//             name.innerHTML = json.name;
//             linkGitHub.href = json.html_url;
//             following.innerText = json.following;
//             respositories.innerText = json.public_repos;
//             followers.innerHTML = json.followers;
//             userName.innerText = json.login;
//         })
// })

$(document).ready(function () {
    const name = document.querySelector('#name');
    const userName = document.querySelector('#userName');
    const avatar = document.querySelector('#avatar');
    const respositories = document.querySelector('#respositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const linkGitHub = document.querySelector('#linkGitHub');
    console.log(name)

    fetch('https://api.github.com/users/DiasSergio')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            avatar.src = json.avatar_url;
            name.innerHTML = json.name;
            linkGitHub.href = json.html_url;
            following.innerText = json.following;
            respositories.innerText = json.public_repos;
            followers.innerHTML = json.followers;
            userName.innerText = json.login;
        })
        .catch(function (err) {
            alert('User not found.')
        })
})