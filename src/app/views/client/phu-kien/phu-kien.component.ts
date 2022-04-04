import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phu-kien',
  templateUrl: './phu-kien.component.html',
  styleUrls: ['./phu-kien.component.css']
})
export class PhuKienComponent implements OnInit {
  dieuKien = false;
  phuKien = [
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/265x/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung_note20ultra_6.9_monarch_blk.00_std_pt01_1.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/265x/9df78eab33525d08d6e5fb8d27136e95/t/e/template_tai_nghe_galaxy_buds_2.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/265x/9df78eab33525d08d6e5fb8d27136e95/1/_/1_69_60.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/image/265x/9df78eab33525d08d6e5fb8d27136e95/m/i/milan_3_.jpg"
    }
  ];
  dienThoai = [
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/y/e/yellow_final_2.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/s/2/s22_4_1.jpg"
    },
    {
      name: "Ốp lưng UAG chống sốc Monarch cho Samsung Galaxy Note 20 Ultra",
      price: "1.305.000 ₫",
      img: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_12_pro_max_white_1.png"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
