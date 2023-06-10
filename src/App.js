//import React from 'react';
//import ChildComponent from './ChildComponent';

//class pComponent extends React.Component {
//render() {
//const data = "Hello World!";
//return (
//<div>
//<ChildComponent message={data} />
//</div>
//);
//}
//}

//export default pComponent;



//import React from 'react';

//class ChildComponent extends React.Component {
//render() {
//return (
//   <div>
//     <h1>{this.props.message}</h1>
//     </div>
//    );
//}
//}

//export default ChildComponent;













import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  handleClick = () => {
    console.log("Кликнули на кнопку в родительском компоненте");
  }

  render() {
    return (
      <div>
        <ChildComponent handleClick={this.handleClick} />
      </div>
    );
  }
}






class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>Нажми на меня</button>
      </div>
    );
  }
}

export default ParentComponent;

