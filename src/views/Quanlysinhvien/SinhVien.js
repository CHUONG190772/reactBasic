class SinhVien {
  constructor(MaSV, TenSV, NgaySinh, GioiTinh, MaKhoa) {
    this.MaSV = MaSV;
    this.TenSV = TenSV;
    this.NgaySinh = NgaySinh;
    this.GioiTinh = GioiTinh;
    this.MaKhoa = MaKhoa;
  }
}

class Khoa {
  constructor(MaKhoa, TenKhoa) {
    this.MaKhoa = MaKhoa;
    this.TenKhoa = TenKhoa;
  }
}

export { SinhVien, Khoa };
