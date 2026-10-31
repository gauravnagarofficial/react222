function App() {

  function sayHello() {
    alert("Hello Gaurav!");
  }

  return (
    <div>
      <h1>Event Handling Example</h1>

      <button onClick={sayHello}>
        Click Me
      </button>

    </div>
  );
}

export default App;