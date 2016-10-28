import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class TodoInput extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { title: ''}

    }
    titleChanged(e) {
        this.setState({title: e.target.value})
    }
    submit(e) {
        this.props.onSubmit(this.state.title);
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.title} onChange={this.titleChanged.bind(this)} name='title' />
                <button onClick={this.submit.bind(this)} type='submit'>Create</button>
            </div>
        )
    }
}