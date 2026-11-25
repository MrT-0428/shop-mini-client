export default function Footer() { 
    const year = new Date().getFullYear(); 
    return ( 
    <footer className="footer"> 
    <div className="container"> 
        <p>© {year} LKTShop · Bài tập môn Công nghệ lập trình hiện đại</p> 
        <p>Hotline: 035 8822 605 · Email: toan042805@gmail.com</p> 
        </div> 
        </footer> 
    ); 
}