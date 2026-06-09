import StudentCard from "./StudentCard";

function App() {
  return (
    <div className="App_Class">
    <h1>Student Information</h1>
    
    <div className="container">
    <StudentCard name="Ranapratap" course="Computer Science" marks="96"/></div>
    <div className="container">
    <StudentCard name="Mohit Sharma" course="Information Technology" marks="90"/>
    </div>
    <div className="container">
    <StudentCard name="Saurabh Kalia" course="Electronics" marks="91"/>
    </div>
    </div>
  );
  
}
export default App;