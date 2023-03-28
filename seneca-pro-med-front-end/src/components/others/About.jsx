import React from "react";
import ZaneImg from "../../assets/images/ZaneImg.jpeg";

const About = () => {
  return (
    <div className="w-full py-16 px-20">
      <div className="flex flex-row justify-between gap-8">
        <div className="w-5/12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-9 text-gray-800 pb-4">
            About Us
          </h1>
          <p className="font-normal text-lg leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Doloremque quam cumque ipsa provident
            omnis. Neque quo eveniet odit iste alias, non ipsam reprehenderit
            voluptate error, obcaecati, ipsum aliquid quis animi!
          </p>
        </div>
        <div className="w-8/12">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 pt-12">
        <div className="w-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-9 text-gray-800 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-lg leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Autem, omnis eaque. Rem culpa dolorum
            voluptatum minima autem earum vel ex at delectus. Alias neque
            mollitia sapiente sunt facere ipsum hic.
          </p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-5 gap-6 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className=""
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="AlexImg"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alex
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="rounded-md block h-48 w-40"
                src={ZaneImg}
                alt="ZaneImg"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Zane
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className=""
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="JasonImg"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Jason
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className=""
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="HumamImg"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Humam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className=""
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="KevinImg"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Kevin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
