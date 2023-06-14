import React, { useState, useEffect } from "react";
import "./Student.scss";

const StudentForm = ({ addStudent, updateStudent, editingStudent }) => {
  const [student, setStudent] = useState({
    MaSV: "",
    TenSV: "",
    NgaySinh: "",
    GioiTinh: "",
    MaKhoa: "",
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kiểm tra thông tin đã nhập đủ chưa
    if (!student.MaSV || !student.TenSV || !student.MaKhoa) {
      alert("Vui lòng nhập đầy đủ Mã SV, Tên SV và Khoa");
      return;
    }
    if (editingStudent) {
      updateStudent(student);
    } else {
      // Gọi hàm thêm sinh viên từ component cha (App.js)
      addStudent(student);
    }
    // Xóa trắng các ô nhập
    setStudent({
      MaSV: "",
      TenSV: "",
      NgaySinh: "",
      GioiTinh: "",
      MaKhoa: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingStudent ? "Chỉnh sửa sinh viên" : "Thêm mới sinh viên"}</h2>
      <div>
        <label>Mã SV:</label>
        <input
          type="text"
          name="MaSV"
          value={student.MaSV}
          onChange={handleInputChange}
          readOnly={editingStudent ? true : false}
        />
      </div>
      <div>
        <label>Tên SV:</label>
        <input
          type="text"
          name="TenSV"
          value={student.TenSV}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Ngày Sinh:</label>
        <input
          type="text"
          name="NgaySinh"
          value={student.NgaySinh}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Giới Tính:</label>
        <input
          type="text"
          name="GioiTinh"
          value={student.GioiTinh}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Mã Khoa:</label>
        <input
          type="text"
          name="MaKhoa"
          value={student.MaKhoa}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{editingStudent ? "Cập nhật" : "Thêm mới"}</button>
    </form>
  );
};

export default StudentForm;
