const loadUser = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
    .then(data =>displayUsers(data))
}
loadUser();

const displayUsers = (data) => {
    console.log(data);
    const buddies = data.results;
    const userContainer = document.getElementById('user-container');
    for (const buddy of buddies) { 
        const {title,first,last} = buddy.name;
        const div = document.createElement('div');
        div.innerHTML = ` <h1> Name : ${title} ${first} ${last}</h1>
        
        `
        userContainer.appendChild(div)
    }
         
    
}