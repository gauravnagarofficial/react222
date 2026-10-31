function Student(props) {
  return (
    <h2>Hello {props.name}</h2>
  );
}

function App() {
  return (
    <div>
      <h1>Props Example</h1>

      <Student name="Gaurav" />
      <Student name="Rahul" />
      <Student name="Aman" />

    </div>
  );
}

export default App;