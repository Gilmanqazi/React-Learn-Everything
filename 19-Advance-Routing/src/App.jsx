import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
// import Courses from './Pages/Contact';
// import CourseDetails from './Pages/CourseDetails';
import Contact from "./Pages/Contact.jsx";
// import Navbar2 from './components/Navbar2';

const App = () => {
  
  const Hoodies = [
    {
      img: "https://www.youngwar.com/cdn/shop/files/LightGreyVintageHoodieproductshot_1024x1024@2x.png?v=1706224190",
      title: "Classic Grey Hoodie",
      price: "₹1,999"
    },
    {
      img: "https://assets.ajio.com/medias/sys_master/root/20241103/kVDM/67272b6d260f9c41e8b34f94/-473Wx593H-700690671-black-MODEL.jpg",
      title: "Black Oversized Hoodie",
      price: "₹2,499"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-j41wgWpOkQ5-E9kJcLkLL_CO_6HYmrJbGA&s",
      title: "Beige Streetwear Hoodie",
      price: "₹2,199"
    },
    {
      img: "https://levi.in/cdn/shop/files/0004F0005_1_Front.jpg?v=1729683104",
      title: "Maroon Pullover Hoodie",
      price: "₹1,899"
    },
    {
      img: "https://m.media-amazon.com/images/I/51gYtDYtbcL._AC_UY350_.jpg",
      title: "Navy Blue Premium Hoodie",
      price: "₹2,299"
    },
    {
      img: "https://boathousestores.com/cdn/shop/files/KOL-24N11-PNE-PIN-1.jpg?v=1767191850",
      title: "Olive Green Hoodie",
      price: "₹2,099"
    }
  ];

  
  const Womens = [
    {
      img: "https://static.cilory.com/745720-thickbox_default/hot-pink-schiffli-casual-cotton-top.jpg.webp",
      title: "Casual Pink Top",
      price: "₹1,299"
    },
    {
      img: "https://m.media-amazon.com/images/I/91IgemfGjSL._AC_UY1100_.jpg",
      title: "Floral Summer Dress",
      price: "₹2,499"
    },
    {
      img: "https://www.only.in/cdn/shop/files/255107201_g0.jpg?v=1745899577&width=2048",
      title: "Denim Blue Jeans",
      price: "₹1,899"
    },
    {
      img: "https://images.meesho.com/images/products/454917334/fqbsy_512.webp?width=512",
      title: "Oversized Hoodie",
      price: "₹2,299"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJqjxhQYX3WyqJxt_6lTQXv9TRdVBvSdZi2g&s",
      title: "Winter Jacket",
      price: "₹3,499"
    },
    {
      img: "https://images.meesho.com/images/products/73919508/ekp5v_512.webp",
      title: "Ethnic Kurti",
      price: "₹1,599"
    }
  ];


  const KidsData = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1bSkrwmImbfBEF1SbtOA0byU5f-X8BVyYg&s",
      title: "Kids Cartoon T-Shirt",
      price: "₹799"
    },
    {
      img: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/N05738s3.jpg?im=Resize,width=750",
      title: "Kids Denim Jacket",
      price: "₹1,999"
    },
    {
      img: "https://www.wearduds.com/cdn/shop/files/rafiki_fleece_hoodie_boys_girls_orange_black_trendy_kids_warm_sporty_cozy_comfortable_casual.png?v=1756803908",
      title: "Kids Casual Hoodie",
      price: "₹1,299"
    },
    {
      img: "https://m.media-amazon.com/images/I/915HoXZy9wL._AC_UY1100_.jpg",
      title: "Kids Summer Dress",
      price: "₹1,099"
    },
    {
      img: "https://ae-pic-a1.aliexpress-media.com/kf/Sf10f0f1ae3434e31b3342bba725571b8h/Spring-Autumn-Kids-Boys-Casual-Sport-Pants-Thin-Fleece-Trousers-Jogger-Pant-for-Children-Loose-Sweatpant.jpg_640x640Q90.jpg_.webp",
      title: "Kids Jogger Pants",
      price: "₹999"
    },
    {
      img: "https://images.meesho.com/images/products/289890232/ib8cb_512.webp?width=512",
      title: "Kids Party Wear Shirt",
      price: "₹1,499"
    }
  ];
  
  
  
  

  return (
    <div className="h-screen bg-black text-white ">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/About" element={<About />} />

        <Route path="/Contact" element={<Contact />} />

        {/* Dunamic Routing */}
        {/* <Route path='/Courses/:CoursesId' element={<CourseDetails/>}/>   */}

        {/* Nested Routing */}
        <Route path="/Product" element={<Product />}>
        <Route index element={
          <div className="text-center py-10 text-2xl font-bold">Choose a category
          </div>
        }/>
        
          <Route path="Men" element={<Men data={Hoodies} />} />
          <Route path="Women" element={<Women dataWomen={Womens} />} />
          <Route path="Kids" element={<Kids dataKids={KidsData} />} />
        </Route>

        {/* Agar User Kuch Bhi Ant Shnt Likh De To Ye NotFound Wala Page Khul Jayenga */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
};

export default App;
