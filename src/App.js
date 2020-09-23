import React from 'react';
import {sum, diff, prod, div} from './Calc'; 

function App() {
  return (
    <>
      <ol>
        <li>sum of two num {sum(2,3)}</li>
        <li>difference of two num {diff(2,3)}</li>
        <li>product of two num {prod(2,3)}</li>
        <li>division of two num {div(2,3)}</li>
      </ol>
    </>
  )
}

export default App;

//3rddddddddddd
// const name = "aniket shivam tiwari";
// const favprog = "sherlock";

// function myName(){
//   let name = "tiwari";
//   return name;
// }

// export default name;
// export {favprog, myName};

//3rdddddd

// 2ndddddddd
// import React from 'react';

// function App(){
//   let currdate = new Date();
//   currdate = currdate.getHours();
//   let gretting = '';
//   let cssstyle = {};

//   if(currdate >=1 && currdate < 12){
//     gretting = 'Good Morning';
//     cssstyle.color = "green";
//   }else if(currdate >= 12 && currdate < 19){
//     gretting = 'Good Evening';
//     cssstyle.color = "orange";
//   }else{
//     gretting = 'Good Night';
//     cssstyle.color = "black";
//   }

//   return (
//     <>
//       <div>
//         <h1>
//           Hello Sir, <span style={cssstyle}>{gretting}</span>
//         </h1>
//       </div>
//     </>
//   );
// }

// export default App;
//2ndddddddddd


//1st 

// import React from 'react';
// import Heading from './Heading';
// import Paragraph from './Paragraph';
// import List from './List';

// function App() {
//   return (
//     <>
//     <Heading/>
//     <Paragraph/>
//     <List/>
//     </>
//   )
// }

// export default App;

//1st