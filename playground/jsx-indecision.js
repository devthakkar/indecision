console.log('its running');

const appRoot = document.getElementById('app');

 const userName = 'Dev';

 const newObject = {
    title: 'Indecision App', 
    subtitle: 'Put your hands in the life of a computer',
    options: []
 };
 const onFormSubmit = (e) => {
     e.preventDefault();
     const option = e.target.elements.option.value;
     if (option) {
        newObject.options.push(option);
        e.target.elements.option.value = '';
     }
     renderAgain();
 };
 const removeAll = () => {
     newObject.options = [];
     renderAgain();
 };

 const makeDecision = () => {
     const len = newObject.options.length;
     const randomNum = Math.floor(Math.random() * len);
     const option = newObject.options[randomNum];
     alert(option);
 };

 function renderAgain () {
    const newTemplate = (
        <div>
            <h1>
                {newObject.title}
            </h1>
            
            {newObject.subtitle && <p> {newObject.subtitle} </p>}
           
            <p>
                {newObject.options.length > 0 ? 'you have options' : 'you have no options'}
            </p>
            <button onClick = {removeAll}> Remove all </button>
            <button disabled = {newObject.options.length > 0 ? false : true} onClick = {makeDecision}> What should I do? </button>
            

            <ol>
                {
                    newObject.options.map((option) => {
                        return <li key = {option}> Option: {option} </li>
                    })
                }  
            </ol>

            <form onSubmit = {onFormSubmit}> 
               <input type = "text" name = "option" />
               <button> Add Option </button>
            </form>
        </div>
    );
   
    ReactDOM.render(newTemplate, appRoot);
 }

 renderAgain();

// let count = 0;
// const addOne = () => {
//     console.log('addOne');
//     count += 1;
//     renderCounter();
// }
// const minusOne = () => {
//     console.log ('minusOne');
//     count -= 1;
//     renderCounter();
// }

// const reset = () => {
//     console.log ('reset');
//     count = 0;
//     renderCounter();
// }

// const templateTwo = (
//     <div>
//         <h1> Count: {count} </h1>
//         <button onClick = {addOne}> +1 </button>
//         <button onClick = {minusOne}> -1 </button>
//         <button onClick = {reset}> reset </button>

//     </div>
// );

// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count} </h1>
//             <button onClick = {addOne}> +1 </button>
//             <button onClick = {minusOne}> -1 </button>
//             <button onClick = {reset}> reset </button>
    
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

