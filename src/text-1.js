import Todos from "./interactive";

const addTask = (task)=> {
    
    const input= global.document.getElementById('text')
    const button = global.document.getElementById('add')
    input.innerText= task
    button.addEventListener('click', () => {
        const ul = global.document.getElementById('list-todos')
        ul.innerHTML = `
        <li>${input.value}</li>
        `
      
      });

    }


    export default addTask