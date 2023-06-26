import logo from "./logo.svg";
import "./App.scss";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import SinhVien from "./SinhVien/SinhVien";
// import Khoa from "./SinhVien/Khoa";
import SinhVienForm from "./SinhVien/SinhVienForm";
import SinhVienList from "./SinhVien/SinhVienList";
import "./SinhVien/Hocsinh.scss";

function App() {
  const [sinhViens, setSinhViens] = useState([
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
      MaKhoa: "K003",
    },
    {
      MaSV: "SV003",
      TenSV: "Le Van C",
      NgaySinh: "11/01/2000",
      GioiTinh: "Nam",
      MaKhoa: "K004",
    },
    {
      MaSV: "SV004",
      TenSV: "Pham Thi D",
      NgaySinh: "15/02/2000",
      GioiTinh: "Nữ",
      MaKhoa: "K002",
    },
  ]);
  const [editingSinhVien, setEditingSinhVien] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  const themSinhVien = (sinhVien) => {
    setSinhViens([...sinhViens, sinhVien]);
  };

  const suaSinhVien = (sinhVien) => {
    setSinhViens(
      sinhViens.map((sv) => (sv.MaSV === sinhVien.MaSV ? { ...sinhVien } : sv))
    );
    setEditingSinhVien(null);
  };

  const xoaSinhVien = (maSV) => {
    setSinhViens(sinhViens.filter((sv) => sv.MaSV !== maSV));
  };

  const handleAdd = () => {
    setEditingSinhVien(null);
  };

  const handleEdit = (sinhVien) => {
    setEditingSinhVien(sinhVien);
  };

  const handleDelete = (maSV) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa sinh viên này không?"
    );
    if (confirmed) {
      xoaSinhVien(maSV);
    }
  };

  const handleMultipleDelete = () => {
    const selectedSVs = sinhViens.filter((sv) => sv.isSelected);
    const confirmed = window.confirm(
      `Bạn có chắc chắn muốn xóa ${selectedSVs.length} sinh viên đã chọn không?`
    );
    if (confirmed) {
      selectedSVs.forEach((sv) => xoaSinhVien(sv.MaSV));
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const searchSinhViens = () => {
    if (searchKeyword.trim() === "") {
      return sinhViens;
    }

    const lowerCaseKeyword = searchKeyword.toLowerCase();
    return sinhViens.filter(
      (sv) =>
        sv.MaSV.toLowerCase().includes(lowerCaseKeyword) ||
        sv.TenSV.toLowerCase().includes(lowerCaseKeyword) ||
        sv.GioiTinh.toLowerCase().includes(lowerCaseKeyword) ||
        sv.NgaySinh.toLowerCase().includes(lowerCaseKeyword) ||
        sv.MaKhoa.toLowerCase().includes(lowerCaseKeyword)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Quản lý sinh viên</h1>
        <SinhVienForm
          themSinhVien={themSinhVien}
          suaSinhVien={suaSinhVien}
          editingSinhVien={editingSinhVien}
          handleAdd={handleAdd}
        />
        <div className="search">
          <input
            type=" text "
            value={searchKeyword}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearchInputChange}>Tìm kiếm</button>
        </div>
        <SinhVienList
          sinhViens={searchSinhViens()}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleMultipleDelete={handleMultipleDelete}
        />
      </header>
    </div>
  );
}

export default App;
