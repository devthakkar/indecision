
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({
                    options
                }));
            }

        } catch (e) {

        }
        
        
    };
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)            
        }
    }
    componentWillUnmount() {
        console.log('componentwillunmount')
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })

        }));
    }
    

    handlePick() {
        this.setState((prevState) => {
            const numOptions = prevState.options.length;
            const randomNum = Math.floor(Math.random() * numOptions);
            alert(prevState.options[randomNum]);
        })

    }
    handleAddOption(option) {
        if (!option) {
            return 'enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists'

        }
        this.setState((prevState) => {
            return {
               options: prevState.options.concat(option)
            }
        })
    }
    
    render() {
        const title = "Indecision";
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle = {subtitle} />
                <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}
                />
                <AddOption
                handleAddOption = {this.handleAddOption}
                />
                <Options 
                options = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
}

Header.defaultProps = {
    title: 'Indecision'
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
const Action = (props) => {
        return (
            <div>
                <button onClick = {props.handlePick} 
                disabled = {!props.hasOptions}>What should I do?</button>
            </div>
        )
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.props.handlePick} 
//                 disabled = {!this.props.hasOptions}>What should I do?</button>
//             </div>
//         )
//     }
// }
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {
                error: error
            }
        })
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            
            <div>
                {this.state.error && <p> {this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type = "text" name = "option"/>
                    <button> add option </button>
                </form>
            
            </div>
        )
        
    }
}
const Options = (props) => {
    
       return (
           <div>
            <button onClick = {props.handleDeleteOptions}> Remove All </button>
            {props.option.length === 0 && <p> please enter options</p>}
            {
                props.options.map((option)  => <Option 
                key = {option} 
                optionText = {option}
                handleDeleteOption = {props.handleDeleteOption}
                
                />)

            }

           </div>
       )
}

// class Options extends React.Component {
    
//     render() {
//        return (
//            <div>
//             <button onClick = {this.props.handleDeleteOptions}> Remove All </button>
//             {
//                 this.props.options.map((option)  => <Option key = {option} optionText = {option}/>)

//             }
            


//            </div>
//        )
//    }
// }
const Option = (props) => {
    
        return (
             <div> 
                {props.optionText} 
                <button onClick = {(e) => {props.handleDeleteOption(props.optionText)}}>remove </button>

             </div>
        );
    }

// class Option extends React.Component {
//     render() {
//         return (
//              <div> {this.props.optionText} </div>
//         );
//     }
// }
// const User = (props) => {
//     return (
//         <div> 
//             <p> Name: {props.name}</p>
//             <p> Age: </p>
            
//         </div>
//     )

// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));