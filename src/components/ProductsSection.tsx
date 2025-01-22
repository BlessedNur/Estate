import Image from "next/image";

function ProductsSection() {
  return (
    <section className="max-w-[1300px] mx-auto mt-32 mb-12 px-4 lg:px-0">
      <div className="header text-center relative mb-12">
        <div className="line h-0.5 w-full bg-gray-200 absolute bottom-2 -z-1"></div>
        <h2 className="font-bold text-2xl md:text-[30px] bg-white z-10 relative w-fit mx-auto p-4 px-8">
          Latest Products
        </h2>
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="image cursor-pointer relative aspect-[4/3] overflow-hidden">
              <div className="cover absolute w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40 grid place-content-center">
                <div className="text-white text-lg font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  View details
                </div>
              </div>
              <Image
                width={500}
                height={375}
                alt="house"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                src={"/images/pexels-luis-yanez-57302-206172.jpg"}
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg hover:text-blue-600 transition-colors cursor-pointer">
                399 sqft Tiny Home with Loft Bedroom
              </h3>
              <p className="text-[#666] text-lg mt-2">$ 35,000.00</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
