function Footer() {
  return (
    <>
      <div className=" bg-orange-600">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3 font-bold"> Welcome to Shopus </h3>
            <p>Your one-stop shop for PC components</p>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-white font-medium">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              © Team INCOGNI70, 2023.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">About us</span>
              <span className="px-2 border-l">Contact us</span>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
