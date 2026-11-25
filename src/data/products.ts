export type Product = { 
    id: number; 
    name: string; 
    price: number; 
    image: string; 
    category: string; 
    stock: number; 
};

export const products: Product[] = [
  {
    id: 1,
    name: "Áo thun basic",
    price: 150000,
    image: "/images/ao-thun-basic.png",
    category: "Thời trang",
    stock: 12
  },
  {
    id: 2,
    name: "Quần jean slim",
    price: 420000,
    image: "/images/quan-jean-slim.png",
    category: "Thời trang",
    stock: 5
  },
  {
    id: 3,
    name: "Tai nghe Bluetooth",
    price: 690000,
    image: "/images/tai-nghe-bluetooth.png",
    category: "Điện tử",
    stock: 0
  },
  {
    id: 4,
    name: "Bình giữ nhiệt 500ml",
    price: 185000,
    image: "/images/binh-giu-nhiet.png",
    category: "Gia dụng",
    stock: 20
  },
  {
    id: 5,
    name: "Balo laptop 15 inch",
    price: 550000,
    image: "/images/balo-laptop.png",
    category: "Phụ kiện",
    stock: 8
  },
  {
    id: 6,
    name: "Chuột không dây",
    price: 245000,
    image: "/images/chuot-khong-day.png",
    category: "Điện tử",
    stock: 15
  },

{
  id: 7,
  name: "Áo hoodie oversize",
  price: 350000,
  image: "/images/ao-hoodie.png",
  category: "Thời trang",
  stock: 10
},
{
  id: 8,
  name: "Giày sneaker",
  price: 590000,
  image: "/images/giay-sneaker.png",
  category: "Thời trang",
  stock: 7
},
{
  id: 9,
  name: "Đồng hồ thông minh",
  price: 890000,
  image: "/images/dong-ho-thong-minh.png",
  category: "Điện tử",
  stock: 6
},
{
  id: 10,
  name: "Bàn phím cơ",
  price: 750000,
  image: "/images/ban-phim-co.png",
  category: "Điện tử",
  stock: 9
},
{
  id: 11,
  name: "Đèn bàn LED",
  price: 280000,
  image: "/images/den-ban-led.png",
  category: "Gia dụng",
  stock: 15
},
{
  id: 12,
  name: "Túi tote canvas",
  price: 120000,
  image: "/images/tui-tote.png",
  category: "Phụ kiện",
  stock: 20
},
];
