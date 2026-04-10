import { useState, useEffect } from "react";

function App() {
  const [token, setToken] = useState("");
  const [students, setStudents] = useState([]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  // LOGIN
  const login = async () => {
    try {
      const response = await fetch(
        "http://localhost:5057/api/Auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // LOGOUT
  const logout = () => {
    setToken("");
    setStudents([]);
    alert("Logged out");
  };

  // FETCH STUDENTS
  const fetchStudents = async () => {
    try {
      const response = await fetch(
        "http://localhost:5057/api/Student",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStudents(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchStudents();
    }
  }, [token]);

  // ADD STUDENT
  const addStudent = async () => {
    const newStudent = {
      name,
      email,
      age: Number(age),
      course,
    };

    try {
      const response = await fetch(
        "http://localhost:5057/api/Student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newStudent),
        }
      );

      if (response.ok) {
        alert("Student added successfully");
        fetchStudents();
      } else {
        alert("Failed to add student");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Management System</h1>

      {!token ? (
        <div>
          <h2>Login</h2>
          <input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={login}>Login</button>
        </div>
      ) : (
        <div>
          <button onClick={logout}>Logout</button>

          <h2>Add Student</h2>

          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <br />

          <input
            placeholder="Course"
            onChange={(e) => setCourse(e.target.value)}
          />
          <br />

          <button onClick={addStudent}>Add Student</button>

          <h2>Student List</h2>

          {students.length === 0 ? (
            <p>No students found</p>
          ) : (
            <ul>
              {students.map((student) => (
                <li key={student.id}>
                  {student.name} - {student.email} - {student.age} -{" "}
                  {student.course}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default App;