// import ListGroup from "./components/ListGroup.tsx";

// function App() {
//   const items = ["Starc", "Steve", "Green", "Warner", "Head"];

//   const handleSelectEvent = (item: string) => {
//     console.log("Selected item: " + item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         title="Players"
//         onSelectedItem={handleSelectEvent}
//       />
//     </div>
//   );
// }
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [visibility, setVisibility] = useState(false);

  return (
    <div>
      {visibility && (
        <Alert onClose={() => setVisibility(false)}>
          Hello <b>Starc</b>
        </Alert>
      )}
      <Button color="info" onClick={() => setVisibility(true)}>
        Click here...
      </Button>
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Button color="info" onClick={() => console.log("Button clicked")}>
//         Click here...
//       </Button>
//     </div>
//   );
// }

export default App;
