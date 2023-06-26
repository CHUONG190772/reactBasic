import logo from "./logo.svg";
import "./App.scss";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import MyComponent from "./Example/MyComponent";
// import ListTodo from "./Todos/ListTodo";
//import Game from "./Games/Game";
import StudentForm from "./Quanlysinhvien/StudentForm";
import StudentList from "./Quanlysinhvien/StudentList";
function App() {
  // const App = () =>{
  const [students, setStudents] = useState([
    // Danh sách sinh viên mặc định
    {
      MaSV: "SV001",
      TenSV: "Nguyen Van A",
      NgaySinh: "01/01/2000",
      GioiTinh: "Nam",
      MaKhoa: "K001",
    },
    {
      MaSV: "SV002",
      TenSV: "Tran Thi B",
      NgaySinh: "02/02/2000",
      GioiTinh: "Nữ",
      MaKhoa: "K002",
    },
  ]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const addStudent = (student) => {
    // Thêm sinh viên mới vào danh sách sinh viên
    setStudents([...students, student]);
  };

  const editStudent = (student) => {
    // Thiết lập sinh viên đang được chỉnh sửa
    setEditingStudent(student);
  };
  const updateStudent = (updatedStudent) => {
    // Cập nhật thông tin sinh viên
    setStudents(
      students.map((student) =>
        student.MaSV === updatedStudent.MaSV ? updatedStudent : student
      )
    );
    setEditingStudent(null); // Kết thúc chế độ chỉnh sửa
  };

  const deleteStudent = (studentToDelete) => {
    // Xóa sinh viên
    setStudents(
      students.filter((student) => student.MaSV !== studentToDelete.MaSV)
    );
  };
  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };
  const searchStuents = () => {
    return students.filter((student) => {
      const lowerCaseKeyword = searchKeyword.toLowerCase();
      return (
        student.MaSV.toLocaleLowerCase().includes(lowerCaseKeyword) ||
        student.TenSV.toLocaleLowerCase().includes(lowerCaseKeyword) ||
        student.GioiTinh.toLocaleLowerCase().includes(lowerCaseKeyword) ||
        student.NgaySinh.toLocaleLowerCase().includes(lowerCaseKeyword) ||
        student.MaKhoa.toLocaleLowerCase().includes(lowerCaseKeyword)
      );
    });
  };
  const searchResults = searchStuents();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Quản lý sinh viên</h1>
        <div>
          <input
            type=" text "
            // placeholder="Tìm kiếm sinh viên"
            value={searchKeyword}
            onChange={handleSearchInputChange}
          />
          <button onClick={() => handleSearchInputChange(students)}>
            Tìm kiếm
          </button>

          {searchResults.length > 0 ? (
            searchResults.map((student) => (
              <div>
                <p>Ma sinh vien: {student.MaSV}</p>
                <p>Ten sinh vien: {student.TenSV}</p>
                <p>Ngay Sinh: {student.NgaySinh}</p>
                <p>Gioi Tinh: {student.GioiTinh}</p>
                <p>Ma Khoa: {student.MaKhoa}</p>
                <hr></hr>
              </div>
            ))
          ) : (
            <p>K thay sv nao.</p>
          )}
        </div>
        <StudentForm
          addStudent={addStudent}
          updateStudent={updateStudent}
          editingStudent={editingStudent}
        />
        <StudentList
          students={students}
          editStudent={editStudent}
          deleteStudent={deleteStudent}
          searchKeyword={searchKeyword}
          handleSearchInputChange={handleSearchInputChange}
          searchStuents={searchResults}
        />
      </header>
    </div>
  );
}

export default App;
