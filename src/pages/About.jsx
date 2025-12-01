import { useState } from 'react';
import "../../src/indec.css"
function Story() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-gray-500">
        Home / About
      </div>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="lar">Our Story</h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <div>
            <img 
              src="/fcc89aaa7b85f8c1dcce81e71e2eb178be13bd4d.jpg"
              alt="Our story" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl border">
              <div className="text-4xl font-bold">10.5k</div>
              <p className="text-gray-600 mt-2">Sellers active our site</p>
            </div>
            <div className="bg-red-600 text-white p-8 rounded-xl">
              <div className="text-4xl font-bold">33k</div>
              <p className="mt-2">Monthly Product Sale</p>
            </div>
            <div className="bg-white p-8 rounded-xl border">
              <div className="text-4xl font-bold">45.5k</div>
              <p className="text-gray-600 mt-2">Customer active in our site</p>
            </div>
            <div className="bg-white p-8 rounded-xl border">
              <div className="text-4xl font-bold">25k</div>
              <p className="text-gray-600 mt-2">Annual gross sale in our site</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center">
          {['Tom Cruise', 'Emma Watson', 'Will Smith'].map((name, i) => (
            <div key={i}>
              <img 
                src="/Frame 874.png" 
                className="rounded-xl mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="text-gray-600">
                {i == 0 ? 'Founder & Chairman' : i == 1 ? 'Managing Director' : 'Product Designer'}
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">Truck</span>
              </div>
              <h3 className="text-xl font-bold mb-2">FREE AND FAST DELIVERY</h3>
              <p className="text-gray-600">Free delivery for all orders over $140</p>
              </div>
            <div>
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">Headphones</span>
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3>
              <p className="text-gray-600">Friendly 24/7 customer support</p>
            </div>
            <div>
              <div className="w-24 h-24 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-white">Shield</span>
              </div>
              <h3 className="text-xl font-bold mb-2">MONEY BACK GUARANTEE</h3>
              <p className="text-gray-600">We return money within 30 days</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Story;