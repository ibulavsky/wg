import './App.css';
import {Form} from "./tasks/1-Form/Form";
import {List} from "./tasks/2-List/List";
import {Article} from "./tasks/3-Article/Article";
import {Widget} from "./tasks/4-Widget/components/Widget";

function App() {
    return (
        <div className="App">
            <header className="App-header">Wargaming task</header>
            <Form text={"Найти"} styleType={'flex'}/>
            <Form text={"Go"} styleType={'flex'}/>

            <Form text={"Попробуй найти"} styleType={'grid'}/>
            <Form text={"Go"} styleType={'grid'}/>

            <Form text={"Попробуй найти"} styleType={'table'}/>
            <Form text={"Go"} styleType={'table'}/>

            <List/>
            <Article/>
            <Widget/>
        </div>
    );
}

export default App;
