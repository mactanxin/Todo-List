import React, {Component} from 'react'

class AddTodo extends Component{
    state= {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);

    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add Task</label>
                    <input type="text" onChange={this.handleChange}></input><button className="waves-effect waves-light btn-small">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo