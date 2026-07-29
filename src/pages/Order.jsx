import { Link } from 'react-router-dom'

export default function Order() {
  return (
    <main className="order-page-main">
      <section className="relative grid grid-cols-[1fr_1fr] items-center gap-[40px] w-full min-h-[600px] px-[64px] py-[60px] bg-[#2f247d] overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(47,36,125,0.8) 0%, rgba(45,35,125,0.9) 100%)' }} />
        <div className="relative z-[2] max-w-[550px]">
          <h1 className="m-0 text-white font-heading text-[52px] font-bold leading-[1.15] tracking-[-1.2px]">Order Fresh Baker's Inn Goods</h1>
          <p className="mt-[24px] text-[rgba(255,255,255,0.95)] font-body text-[20px] leading-[1.6]">Choose your favorite bread, pies, scones and donuts. Place your order for pickup or delivery and we will have it ready fresh for you.</p>
          <a href="#order-form" className="inline-block mt-[32px] px-[32px] py-[16px] rounded-[4px] bg-gold text-white text-center font-heading text-[22px] font-bold no-underline hover:bg-[#c19d4b] hover:-translate-y-[2px] transition-all">ORDER NOW</a>
        </div>
        <div className="relative z-[2] flex items-center justify-center h-full">
          <img src="/asset/groupheader bread.png" alt="Fresh Baker's Inn bakery products" className="block w-full max-w-[500px] h-auto object-contain" />
        </div>
      </section>

      <section className="px-[64px] py-[80px] bg-white text-center max-md:px-[32px] max-sm:px-[20px]">
        <div className="max-w-[800px] mx-auto">
          <h2 className="m-0 text-[#2d237d] font-heading text-[48px] font-bold leading-[1.15] tracking-[-1.2px]">How It Works</h2>
          <ol className="mt-[32px] pl-[24px] text-[#2f247d] font-body text-[20px] leading-[1.8] text-left">
            <li className="my-[16px]">Select the products you want and choose your order type.</li>
            <li className="my-[16px]">Submit your order and our team will confirm the details.</li>
          </ol>
        </div>
      </section>

      <section className="px-[64px] py-[80px] bg-[#f9f8f5]" id="order-form">
        <div className="max-w-[900px] mx-auto">
          <h2 className="m-0 mb-[48px] text-[#2d237d] text-center font-heading text-[48px] font-bold leading-[1.15] tracking-[-1.2px]">Place Your Order</h2>
          <form className="flex flex-col gap-[24px]" method="POST" action="mailto:menelisingwenya7@gmail.com?subject=Order%20from%20Website">
            <div className="grid grid-cols-2 gap-[24px] max-md:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="order-name" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Your Name</label>
                <input type="text" id="order-name" name="name" required placeholder="Enter your name" className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="order-email" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Email</label>
                <input type="email" id="order-email" name="email" required placeholder="Enter your email" className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px] max-md:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="order-phone" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Phone</label>
                <input type="tel" id="order-phone" name="phone" required placeholder="Enter your phone number" className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="order-product" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Product</label>
                <select id="order-product" name="product" required className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]">
                  <option value="">Select a product</option>
                  <option value="Premium Soft White Bread">Premium Soft White Bread</option>
                  <option value="Family Loaf High Energy Brown">Family Loaf High Energy Brown</option>
                  <option value="Family Loaf High Energy White">Family Loaf High Energy White</option>
                  <option value="Premium Low Gi Seed-Loaf">Premium Low Gi Seed-Loaf</option>
                  <option value="Premium High Energy Brown Loaf">Premium High Energy Brown Loaf</option>
                  <option value="Classic Meat Pie">Classic Meat Pie</option>
                  <option value="Golden Pie">Golden Pie</option>
                  <option value="Cheese & Onion Pie">Cheese & Onion Pie</option>
                  <option value="Fresh Scones">Fresh Scones</option>
                  <option value="Jam Scones">Jam Scones</option>
                  <option value="Classic Donut">Classic Donut</option>
                  <option value="Donut And Tea">Donut And Tea</option>
                  <option value="Sugar Glaze Donut">Sugar Glaze Donut</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[24px] max-md:grid-cols-1">
              <div className="flex flex-col">
                <label htmlFor="order-quantity" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Quantity</label>
                <input type="number" id="order-quantity" name="quantity" min="1" required placeholder="Enter quantity" className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="order-kind" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Pickup or Delivery</label>
                <select id="order-kind" name="order-type" required className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)]">
                  <option value="">Select order type</option>
                  <option value="Pickup">Pickup</option>
                  <option value="Delivery">Delivery</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col col-span-full">
              <label htmlFor="order-notes" className="mb-[8px] text-[#2d237d] font-heading text-[16px] font-bold">Order Notes</label>
              <textarea id="order-notes" name="notes" placeholder="Add any special instructions or delivery details" rows="5" className="px-[16px] py-[12px] border-2 border-[#dcd6c8] rounded-[4px] font-body text-[16px] focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(191,154,74,0.1)] resize-vertical"></textarea>
            </div>
            <button type="submit" className="w-full px-[24px] py-[16px] mt-[16px] border-none rounded-[4px] bg-gold text-white font-heading text-[20px] font-bold cursor-pointer hover:bg-[#c19d4b] hover:-translate-y-[2px] transition-all active:translate-y-0">Send Order Request</button>
          </form>
        </div>
      </section>
    </main>
  )
}