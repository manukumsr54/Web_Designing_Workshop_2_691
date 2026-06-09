import StudentCard from"./StudentCard"

function App() {
  return(
    <div className="App_Class">
      <h1>Student Card App</h1>
      <StudentCard name="vedant" course="CSE" marks="85"/>
      <StudentCard name="manu" course="CSE" marks="95"/>
      <StudentCard name="Rahul" course="CSE" marks="99"/>
    </div>
  );
}
export default App;
