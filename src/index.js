import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import name, {favprog, myName} from './App';
//import * as ques from './App';

import App from './App';

 

//import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//   <div>
//     <h1>Hellow world</h1>
//     <p>Mar jao</p>
//   </div>, document.getElementById('root')
// )

// ReactDOM.render(
//   [
//     <h1>Hellow world</h1>,
//     <p>Mar jao</p>
//   ], document.getElementById('root')
// )

// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello world</h1>
//     <p>Hi like share</p>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <h1>Hello world</h1>
//     <p>Hi lisske share</p>
//   </>,
//   document.getElementById('root')
// );

//const flname = "aniket shivam";

// ReactDOM.render( 
//   <h1> my name is  {flname} and {flname}</h1>, 
//   document.getElementById('root')
// )

// const Fname = 'aniket';
// const Lname = 'tiwari';

// ReactDOM.render(
//   <>
//   <h1>My first name is {`${Fname} and
//     my last name ${Lname}`}</h1>
//   <p>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</p>
//   </>,
//   document.getElementById('root')
// )

// const fname = "aniket";
// const img1 = "https://picsum.photos/id/1/200/300";
// const img2 = "https://picsum.photos/id/1/250/300";
// const img3 = "https://picsum.photos/id/1/300/300";

// const heading = {
//   color: '#fa91fa',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   fontFamily: "'Josefin Sans', sans-serif",
//   textShadow: '0 2px 4px #ffe9c5',
//   margin: '100px 0'
// };

// ReactDOM.render(
//   <>
//     {/*<h1 contentEditable="true">My name is {fname}</h1>*/}
//     <h1 style={heading}>My name is {fname}</h1>
//     <div className="img_div">
//       <img src={img1} alt="randomimages"/>
//       <img src={img2} alt="randomimages"/>
//       <a href="www.google.com" target="_blank">  
//         <img src={img3} alt="randomimages"/>
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// )

// let currdate = new Date();
// currdate = currdate.getHours();
// let gretting = '';
// let cssstyle = {};

// if(currdate >=1 && currdate < 12){
//   gretting = 'Good Morning';
//   cssstyle.color = "green";
// }else if(currdate >= 12 && currdate < 19){
//   gretting = 'Good Evening';
//   cssstyle.color = "orange";
// }else{
//   gretting = 'Good Night';
//   cssstyle.color = "black";
// }


// ReactDOM.render(
//   <>  
//     <div>
//       <h1>Hello Sir, <span style={cssstyle}>{gretting}</span></h1>
//     </div>
//   </>,
//   document.getElementById('root')
// )

//component////////////////////////


// ReactDOM.render(
//   <>
//     <Heading></Heading>
//     <Paragraph></Paragraph>
//     <List/>
//   </>,
//   document.getElementById('root')
// )

// ReactDOM.render( <App/>, document.getElementById('root'))

// ReactDOM.render(
//   <>
//     <ol>
//       <li>aniket</li>
//       <li>{name}</li>
//       <li>{favprog}</li>
//       <li>{myName()}</li>
//     </ol>
//   </>
// ,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <>
//     <ol>
//       <li>{ques.default}</li>
//       <li>{ques.favprog}</li>
//       <li>{ques.myName()}</li>
//     </ol>
//   </>
// ,
//   document.getElementById('root')
// )

ReactDOM.render( <App/>, document.getElementById('root'))

///////////////////////////////////////////



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
