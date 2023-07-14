import React, { useState } from "react";
import Layout from "../component/Layout";
import nirajan from "../images/nirajan.jpg";
import { FaEllipsisH, FaPlusCircle } from "react-icons/fa";
import Member from "../component/member";

export default function Projectoverview() {
  const [open, isOpen] = useState(false);
  const [membersimage, setMembersimage] = useState([
    {
      image: nirajan,
    },
  ]);

  const [position, setPosition] = useState([{ name: "developer" }]);

  const handleMemberSelect = (member) => {
    setPosition([...position, { name: member.position }]);
  };

  return (
    <Layout>
      <div className="w-96 border rounded-2xl px-4 py-3 space-y-4">
        <div className="flex justify-between items-center">
          <div className="rounded-3xl bg-orange-200 w-32 flex text-center justify-center items-center h-10 text-blue-950 font-semibold font-serif">
            web design
          </div>
          <FaEllipsisH className="h-5 w-6" />
        </div>
        <div className="space-y-4 flex justify-center flex-col">
          <div className="flex space-x-1">
            {position.map((pos, index) => (
              <div className="flex" key={index}>
                {pos.name}
              </div>
            ))}
          </div>
          <div className="font-serif"></div>
          <div className="flex">
            <div className="bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500">
                50%
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="name"></div>
            <div className="flex justify-between">
              <div className="flex">
                {membersimage.map((member, index) => (
                  <div className="img" key={index}>
                    <img
                      src={member.image}
                      alt=""
                      srcset=""
                      className="w-10 rounded-full"
                    />
                  </div>
                ))}
              </div>
              <label htmlFor="upload" className="add">
                <FaPlusCircle
                  className="h-8 w-10"
                  onClick={() => isOpen(!open)}
                />
              </label>
            </div>
          </div>
          {open && (
            <div className="h-1/4 w-1/4 border rounded-md absolute bg-white">
              <Member
                onMemberSelect={(member) => handleMemberSelect(member)}
                // onimageSelect={handleimageselection}
              />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
