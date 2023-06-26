import React, { useState, useEffect } from "react";
import SinhVien from "./SinhVien";

const SinhVienForm = ({
  themSinhVien,
  suaSinhVien,
  editingSinhVien,
  handleAdd,
}) => {
  const [maSV, setMaSV] = useState("");
  const [tenSV, setTenSV] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [maKhoa, setMaKhoa] = useState("");

  useEffect(() => {
    if (editingSinhVien) {
      setMaSV(editingSinhVien.MaSV);
      setTenSV(editingSinhVien.TenSV);
      setNgaySinh(editingSinhVien.NgaySinh);
      setGioiTinh(editingSinhVien.GioiTinh);
      setMaKhoa(editingSinhVien.MaKhoa);
    } else {
      setMaSV("");
      setTenSV("");
      setNgaySinh("");
      setGioiTinh("");
      setMaKhoa("");
    }
  }, [editingSinhVien]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (maSV.trim() === "" || tenSV.trim() === "" || maKhoa.trim() === "") {
      alert("Vui lòng nhập đủ thông tin sinh viên");
      return;
    }

    const sinhVien = new SinhVien(maSV, tenSV, ngaySinh, gioiTinh, maKhoa);

    if (editingSinhVien) {
      suaSinhVien(sinhVien);
    } else {
      themSinhVien(sinhVien);
    }

    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mã SV:
        <input
          type="text"
          value={maSV}
          onChange={(e) => setMaSV(e.target.value)}
        />
      </label>
      <label>
        Tên SV:
        <input
          type="text"
          value={tenSV}
          onChange={(e) => setTenSV(e.target.value)}
        />
      </label>
      <label>
        Ngày Sinh:
        <input
          type="text"
          value={ngaySinh}
          onChange={(e) => setNgaySinh(e.target.value)}
        />
      </label>
      <label>
        Giới Tính:
        <input
          type="text"
          value={gioiTinh}
          onChange={(e) => setGioiTinh(e.target.value)}
        />
      </label>
      <label>
        Mã Khoa:
        <input
          type="text"
          value={maKhoa}
          onChange={(e) => setMaKhoa(e.target.value)}
        />
      </label>
      <button type="submit">{editingSinhVien ? "Cập nhật" : "Thêm mới"}</button>
    </form>
  );
};

export default SinhVienForm;
