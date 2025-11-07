import React from "react";
import "./style.css"; // ✅ corrected path

function Products() {
  return (
    <div className="products">
      <div className="box">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.jA-Ur0BGzRyv6xv71L684QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Perfume bottle"
        />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img
          src="https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?cs=srgb&dl=pexels-valeriia-miller-3910071.jpg&fm=jpg"
          alt="Perfume with flowers"
        />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>

      <div className="box">
        <img
          src="https://perfumeheritage.com/cdn/shop/files/ai-generated-luxury-perfume-bottle-scented-liquid-elegance-in-a-spray-generated-by-ai-free-photo.jpg?v=1721860638&width=660"
          alt="Luxury perfume"
        />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
          Lasting Perfume
        </p>
      </div>
    </div>
  );
}

export default Products;
