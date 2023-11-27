import ListGroup from "./components/ListGroup.tsx";

function App() {
  const items = ["Starc", "Steve", "Green", "Warner", "Head"];

  const handleSelectEvent = (item: string) => {
    console.log("Selected item: " + item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        title="Players"
        onSelectedItem={handleSelectEvent}
      />
    </div>
  );
}

export default App;
