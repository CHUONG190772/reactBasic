import React from "react";
// import Khoa from "./Khoa";

const SinhVienList = ({
  sinhViens,
  handleEdit,
  handleDelete,
  handleMultipleDelete,
}) => {
  const handleCheckboxChange = (event, sinhVien) => {
    sinhVien.isSelected = event.target.checked;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mã SV</th>
            <th>Tên SV</th>
            <th>Ngày Sinh</th>
            <th>Giới Tính</th>
            <th>Mã Khoa</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {sinhViens.map((sinhVien) => (
            <tr key={sinhVien.MaSV}>
              <td>{sinhVien.MaSV}</td>
              <td>{sinhVien.TenSV}</td>
              <td>{sinhVien.NgaySinh}</td>
              <td>{sinhVien.GioiTinh}</td>
              <td>{sinhVien.MaKhoa}</td>
              <td>
                <button onClick={() => handleEdit(sinhVien)}>Sửa</button>
                <button
                  className="delete"
                  onClick={() => handleDelete(sinhVien.MaSV)}
                >
                  Xóa
                </button>
                <input
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, sinhVien)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="delete" onClick={handleMultipleDelete}>
        Xóa
      </button>
    </div>
  );
};

export default SinhVienList;
