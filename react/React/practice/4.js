import { Component } from "react";
import ScrollBox from "./ScrollBox";

class App extends Component{
  render(){
    return(
      <div>
        <ScrollBox ref={(ref)=> this.scrollBox=ref}/>
        <button onClick={()=> this.scrollBox.ScrollBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;