import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './containers/TodoList'; 
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <TodoList />
            </div>
        )
    }
}
export default App;