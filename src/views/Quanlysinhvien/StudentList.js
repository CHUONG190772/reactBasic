import React from "react";

const StudentList = ({
  students,
  editStudent,
  deleteStudent,
  setSearchKeyword,
}) => {
  const handleEdit = (student) => {
    // Gọi hàm chỉnh sửa sinh viên từ component cha (App.js)
    editStudent(student);
  };

  const handleDelete = (student) => {
    // Gọi hàm xóa sinh viên từ component cha (App.js)
    deleteStudent(student);
  };
  const handleSearchInputChange = (event) => {
    setSearchKeyword(student);
  };
  const searchResults = searchStuents();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày Sinh</th>
            <th>Giới Tính</th>
            <th>Mã Khoa</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.MaSV}>
              <td>{student.MaSV}</td>
              <td>{student.TenSV}</td>
              <td>{student.NgaySinh}</td>
              <td>{student.GioiTinh}</td>
              <td>{student.MaKhoa}</td>
              <td>
                <button
                  id="edit"
                  className="fa fa-pencil"
                  onClick={() => handleEdit(student)}
                ></button>
              </td>
              <td>
                <button
                  id="delete"
                  className="fa-sharp fa-solid fa-trash"
                  onClick={() => handleDelete(student)}
                ></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StudentList;
