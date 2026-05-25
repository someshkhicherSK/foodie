export default function Newsletter() {

  return (
    <section className="py-20">

      <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-10 text-center text-white">

        <h2 className="text-4xl font-bold">
          Subscribe Newsletter
        </h2>

        <p className="mt-4 text-orange-100">
          Get updates about new foods and offers.
        </p>

        <div className="flex mt-8 bg-white rounded-full overflow-hidden">

          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 outline-none text-gray-700"
          />

          <button className="bg-black text-white px-8">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}