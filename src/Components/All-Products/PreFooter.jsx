import React from "react";

const PreFooter = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <h2 className="mb-[23px] pb-[14px] border-b-[1px] border-gray-300">
            LATEST PRODUCTS
          </h2>
          <ul>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2017/06/475804-0286-1-370x493.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Dress
                </p>
                <div>
                  <span className="text-gray-400 text-[14px] font-medium">
                    $183.00
                  </span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2017/06/030506-0912-3-copy-370x493.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Lace Panel Midi
                </p>
                <div>
                  <span className="text-gray-400 text-[14px] font-medium">
                    $465.00
                  </span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2017/06/bombshell-velvet-dress-jpg.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Chain Dress
                </p>
                <div>
                  <span className="text-gray-400 text-[14px] font-medium">
                    $465.00
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-[23px] pb-[14px] border-b-[1px] border-gray-300">
            ON SALE
          </h2>
          <ul>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2017/06/2.2-3-370x493.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  NMSPACE UNIVERSE L/S
                </p>
                <div className="text-[14px] font-medium">
                  <span className="line-through text-gray-400 mr-[2px]">
                    $730.00
                  </span>{" "}
                  <span className="text-[#c62828]">$720.00</span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2017/06/2.1-2-370x493.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Cropped PU Biker Jacket
                </p>
                <div className="text-[14px] font-medium">
                  <span className="line-through text-gray-400 mr-[2px]">
                    $730.00
                  </span>{" "}
                  <span className="text-[#c62828]">$720.00</span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2016/03/15-555x740.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Gold Watch
                </p>
                <div className="text-[14px] font-medium">
                  <span className="line-through text-gray-400 mr-[2px]">
                    $740.00
                  </span>{" "}
                  <span className="text-[#c62828]">$650.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-[23px] pb-[14px] border-b-[1px] border-gray-300">
            FEATURED PRODUCTS
          </h2>
          <ul>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/5_1-9.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Pinstripe Blouse Dress
                </p>
                <div className="text-[14px] font-medium">
                  <span className="text-gray-400 mr-[2px]">$720.00</span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/5_1-10.jpg"
                alt="brand"
                width={70}
                className="mr-[20px]"
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Logo SweetShirt
                </p>
                <div className="text-[14px] font-medium">
                  <span className="mr-[2px] text-gray-400 line-through">
                    $710.00
                  </span>{" "}
                  <span className="text-[#c62828]">$700.00</span>
                </div>
              </div>
            </li>
            <li className="flex mb-[20px]">
              <img
                src="https://xstore.b-cdn.net/demos/wp-content/uploads/2015/12/3_1.jpg"
                alt="brand"
                className="mr-[20px]"
                width={70}
              />
              <div>
                <p className="text-black transition-[0.3s] hover:text-gray-500">
                  Classic bomber jacket
                </p>
                <div className="text-[14px] font-medium">
                  <span className="mr-[2px] text-gray-400">$650.00</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PreFooter;
