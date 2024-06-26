import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:my-28 lg:px-8">
      <div className="flex justify-center items-start">
        <h1
          className="max-w-2xl text-center"
          style={{ color: "#3c4043", fontWeight: "600", fontSize: "32px" }}
        >
          With immersive audio, clearer calls, and more, they're the perfect
          earbuds for Pixel.2
        </h1>
      </div>
      <div className="my-24 flex justify-center">
        <div className="max-w-5xl w-full grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square">
              <img
                src="https://lh3.googleusercontent.com/l7x6bIzuSylKcT4xNrr9iF6hh-LeFy8K_HeuSf2jM12CulYTRP9ifREKFAXGRLSf5UCEX4NJlxrE8sGnhpaCyl0faktXT9Hd2X4=rw-e365-w3000"
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="aspect-square">
              <img
                src="https://lh3.googleusercontent.com/4Dd_0a-_2zAtGFouT11Eqxz0VG_2xHteH_VWojoWGKoMX6EiV3no69VLIRQBu8ZRw8rhT3xCk36No5XtCJ86ZnahxRGlZXYbkA=rw-e365-w3000"
                alt=""
                className="w-full h-full object-cover bg-blue-100 rounded-3xl"
              />
            </div>
          </div>
          <div className="aspect-[2/1]">
            <img
              src="https://lh3.googleusercontent.com/ipDAxevXnTWM0BOs4sfJvL9pSAv2z-Egnd9t0WnPvnlkxSPv-xzpSIh8nc34MYuY1G366JodIk1EidVQRva1VSZEYcGAq6CbSSk=rw-e365-w3000"
              className="w-full h-full object-cover bg-blue-100 rounded-3xl"
              alt=""
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-square order-last md:order-first">
              <img
                src="https://lh3.googleusercontent.com/x1CI2fDPyouo8AyUNusv1Wpcc-sIKDHyrt84_Mv2z9x9oUsi_dKGEzhPiiN4J-Bqb3Akaaejp0EFaqdTPLQ203rKfn17MlenPh9v=rw-e365-w3000"
                alt=""
                className="w-full h-full object-cover bg-blue-100 rounded-3xl"
              />
            </div>
            <div className="aspect-square">
              <img
                src="https://lh3.googleusercontent.com/bG8yj9Eqt6LScgeVsUhzsxFmHMUUy3kuPYPUhVCQGly-Mh15Sx16BLBMlsO1x9GLPWb37Yj92ja__nzhi7hvh0OoOfNOUa6F_g=rw-e365-w3000"
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="aspect-square bg-blue-100 rounded-3xl flex items-center justify-center">
              <div className="text-3xl text-center max-w-sm">
                Up to 31 hours of total listening time.3
              </div>
            </div>
            <div className="aspect-square bg-blue-100 rounded-3xl flex items-center justify-center">
              <div className="text-3xl text-center max-w-sm">
                Up to 31 hours of total listening time.3
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features;
