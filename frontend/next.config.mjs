// /** @type {import('next').NextConfig} */

// const nextConfig = {

//   images: {

//     remotePatterns: [

//       {

//         protocol: "http",

//         hostname:
//           "localhost",

//         port: "5000",

//         pathname:
//           "/uploads/**",

//       },

//     ],

//   },

// };

// export default nextConfig;
/**    
 @type {import('next').NextConfig} */

const nextConfig = {

  turbopack: {

    root: __dirname,

  },

  images: {

    remotePatterns: [

      {

        protocol: "http",

        hostname:
          "localhost",

        port: "5000",

        pathname:
          "/uploads/**",

      },

      {

        protocol: "https",

        hostname:
          "foodie-qsnw.onrender.com",

        pathname:
          "/uploads/**",

      },

    ],

  },

};

export default nextConfig;