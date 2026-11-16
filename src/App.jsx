import StudentProfileCard from './StudentProfileCard'

function App() {
  return (
    <main>
      <h1>Student Directory</h1>
      <div className="directory">
        <StudentProfileCard
          name="Sukhrob"
          studentId="202537508"
          major="Computer Science"
          year="2nd year"
          gpa="4.3"
        />
        <StudentProfileCard
          name="Muso"
          studentId="202537265"
          major="Computer Science"
          year="2nd year"
          gpa="4.3"
        />
        <StudentProfileCard
          name="Jasurbek"
          studentId="202537234"
          major="Computer Science"
          year="2nd year"
          gpa="4.0"
        />
      </div>
    </main>
  )
}

export default App
