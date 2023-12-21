// import { AiFillGift } from "react-icons/ai";
// import ListGroup from "./components/ListGroup.tsx";

// function App() {
//   const items = ["Starc", "Steve", "Green", "Warner", "Head"];

//   const handleSelectEvent = (item: string) => {
//     console.log("Selected item: " + item);
//   };
//   return (
//     <div>
//       <AiFillGift color="skyblue" size="30" />
//       <ListGroup
//         items={items}
//         title="Players"
//         onSelectedItem={handleSelectEvent}
//       />
//     </div>
//   );
// }

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

// function App() {
//   const [visibility, setVisibility] = useState(false);

//   return (
//     <div>
//       {visibility && (
//         <Alert onClose={() => setVisibility(false)}>
//           Hello <b>Starc</b>
//         </Alert>
//       )}
//       <Button color="info" onClick={() => setVisibility(true)}>
//         Click here...
//       </Button>
//     </div>
//   );
// }

// import Button from "./components/Button/Button.tsx";

// function App() {
//   return (
//     <div>
//       <Button color="danger" onClick={() => console.log("Button clicked")}>
//         Click here...
//       </Button>
//     </div>
//   );
// }

// export default App;

import Like from "./Like";


const App = () => {
  return (
    <Like onClick={()=>console.log("Clicked")}/>
  )
}

export default App
