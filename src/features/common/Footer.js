import React from "react";

const Footer = () => {
  return (
    <footer className="section mt-16 flex w-full flex-col items-center justify-center border-t border-slate-200 bg-white">
      <div className="w-full flex items-center justify-center px-14 py-14">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="flex items-center justify-center gap-2">
              <div className="h-8 w-8">
                <img src={"/ecommerce.png"} alt="ShopusLogo" />
              </div>
              <h1 className="text-2xl font-bold">Shopus</h1>
            </div>
            <p className="max-w-[300px] text-sm font-light text-slate-400">
              Company is an online store which issues product warranties as
              NFTs.
            </p>
            <p className="max-w-[300px] text-sm text-slate-400">
              Shopus &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
          <div className="flex items-start justify-center gap-16">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="mb-2 font-bold">Company</h4>
              <p className="text-xs text-slate-400">Terms</p>
              <p className="text-xs text-slate-400">Privacy Policy</p>
              <p className="text-xs text-slate-400">Contact</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="mb-2 font-bold">Category</h4>
              <p className="text-xs text-slate-400">Proccessor</p>
              <p className="text-xs text-slate-400">Graphics Card</p>
              <p className="text-xs text-slate-400">Motherboard</p>
              <p className="text-xs text-slate-400">Memory</p>
              <p className="text-xs text-slate-400">Storage</p>
              <p className="text-xs text-slate-400">Power Supply</p>
            </div>
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="mb-2 font-bold">Developers</h4>
              <p className="text-xs text-slate-400">Our Team</p>
              <p className="text-xs text-slate-400">About Project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-orange-600 py-2 text-sm text-white">
        Crafted with ❤️ by Team INCOGNI70
      </div>
    </footer>
  );
};

export default Footer;
