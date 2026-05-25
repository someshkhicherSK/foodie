const categories = [
  {
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },

  {
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    name: "Pasta",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9",
  },

  {
    name: "Drinks",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e",
  },

  {
    name: "Dessert",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  },

  {
    name: "Biryani",
    image:
      "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
];


export default function CategorySection() {

  return (

    <section className="py-16 bg-orange-50">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Food Categories
          </h2>

          <p className="text-gray-500 mt-4">
            Explore your favorite food categories
          </p>

        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((category) => (

            <div
              key={category.name}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >

              <img
                src={category.image}
                alt={category.name}
                className="h-36 w-full object-cover"
              />

              <div className="p-4 text-center">

                <h3 className="text-lg font-bold text-red-500">
                  {category.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}