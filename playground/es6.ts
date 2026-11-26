//1.
const shopName = "ShopMini";
let visitCount = 0;

visitCount += 1;

console.log(shopName);
console.log(visitCount);

//2.
console.log(`Chào mừng đến ${shopName}! Lượt xem: ${visitCount}`);

//3.
const discount = (price: number, percent = 10) =>
  price - (price * percent) / 100;

console.log(
  "Giá sau giảm:",
  discount(200000),
  discount(200000, 25)
);

//4.
const product = {
  id: 1,
  name: "Áo thun",
  price: 150000,
  tags: ["mới", "hot"]
};

const { name: productName, price } = product;

const [firstTag] = product.tags;

console.log(productName, price, firstTag);

//5.
const updated = { ...product, price: 120000 };      //tạo ra một đối tượng mới và sao chép các thuộc tính từ product sang updated.
                                                    //Sau đó, price của đối tượng mới được ghi đè thành 120000.
product.price = 0;                                  //chỉ thay đổi đối tượng ban đầu.

console.log("Giá gốc:", product.price);
console.log("Giá bản sao:", updated.price);

console.log(product.price, "->", updated.price);

const moreTags = [...product.tags, "giảm giá"];

console.log(moreTags);

//6.
const sum = (...numbers: number[]) =>
  numbers.reduce((a, b) => a + b, 0);

console.log("Tổng:", sum(1, 2, 3, 4));

//7.
const prices = [150000, 420000, 690000, 185000];

const vnd = prices.map(
  (p) => p.toLocaleString("vi-VN") + " đ"
);

const cheap = prices.filter((p) => p < 300000);

const firstExpensive = prices.find((p) => p > 400000);

const total = prices.reduce((acc, p) => acc + p, 0);

console.log({ vnd, cheap, firstExpensive, total });

//8.
type User = {
  name: string;
  address?: {
    city?: string;
  };
};

const guest: User = {
  name: "Khách"
};

console.log(guest.address?.city ?? "Chưa có địa chỉ");

//9.
const fakeFetchProducts = (): Promise<string[]> =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve(["Áo thun", "Quần jean"]),
      500
    )
  );

async function main() {
  console.log("Đang tải sản phẩm...");

  const names = await fakeFetchProducts();

  console.log("Đã tải:", names);
}

main();