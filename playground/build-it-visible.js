//Visibility toggle -render, constructor, handleToggleVisibility
//visibility -> false

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        };

    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            if (prevState.visible == true) {
                return {
                    visible: false
                }
            } else {
                return {
                    visible: true
                }
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>{this.state.visible ? 'hide' : 'show'} </button>
                {this.state.visible && (
                    <div> 
                        <p>Hey here is some text </p>
                    </div>)}
            </div>
        )
    }
}
ReactDOM.render(<Visibility/>, document.getElementById('app'));




// const object = {
//     title: 'Visibility Toggle', 
// };
// const appRoot = document.getElementById('app');

// const renderShow = () => {
//     const template2 = (
//         <div>
//             <h1> {object.title} </h1>
//             <button onClick = {renderHide}> Hide Details </button>
//             <p> blah blah </p>
//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// }

// const renderHide = () => {
//     const template = (
//         <div>
//             <h1> {object.title} </h1>
//             <button onClick = {renderShow} > Show details </button>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderHide();