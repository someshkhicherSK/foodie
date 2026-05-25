export default function Hero() {

  return (

    <section className="py-16 md:py-24 bg-gradient-to-r from-red-500 to-orange-500 text-white">

      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Delicious Food
            Delivered Fast
          </h1>

          <p className="mt-6 text-base md:text-lg text-orange-100">
            Order your favorite meals anytime and enjoy fast delivery.
          </p>

          <button className="mt-8 bg-white text-red-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Order Now
          </button>

        </div>


        {/* RIGHT */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt=""
            className="rounded-3xl shadow-2xl h-[300px] md:h-[500px] w-full object-cover"
          />

        </div>

      </div>

    </section>

  );
}