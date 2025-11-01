const HeroSection = () => {
    return(
        <main className=" hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>

                </div>

                <div className="shopping">
                    <p>Also Available On</p>

                    <div className="brand-icons">
                        <img src="https://th.bing.com/th/id/OIP.BHsDLmb5Z-pq2W2DwOaZCAHaGF?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" width='50px' height='50px' alt="amazon" />
                        <img src="https://tse3.mm.bing.net/th/id/OIP.vBmeNfhXI1Sue8fAfAmKWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" width='70px' height='50px' alt="flipkart" />
                    </div>
                </div>

            </div>
             
             <div className="hero-img">
                <img  width='500px' height='600px' src="https://static.super-shop.com/893005-nike-sb-shoes-sb-zoom-dunk-high-pro-university-red-university-red-white-w1920w.jpg" alt="hero-img" />
             </div>
        </main>


    )
}
export default HeroSection;