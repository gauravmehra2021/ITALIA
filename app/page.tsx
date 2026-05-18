export default function ProductCard() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100 px-4">
      <div className="flex max-w-2xl overflow-hidden rounded-xl bg-white shadow-lg">
        
        {/* Left Image Section */}
        <div className="w-1/2">
          <img
            src="https://i.ibb.co/7ztJFPH/image-product-desktop.jpg"
            alt="Perfume"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-1/2 p-8 text-black">
          <p className="mb-4 tracking-[6px] text-gray-500 uppercase">
            Perfume
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Non fugit nesciunt reprehenderit fugiat esse nam quam
            cupiditate animi recusandae laboriosam.
          </p>

          {/* Price Section */}
          <div className="mb-8 flex items-center">
            <p className="text-4xl font-bold text-green-700">
              $149.99
            </p>

            <span className="ml-6 text-gray-500 line-through">
              $169.99
            </span>
          </div>

          {/* Button */}
          <button className="w-full rounded-xl bg-green-800 py-4 font-bold text-white transition hover:bg-green-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}