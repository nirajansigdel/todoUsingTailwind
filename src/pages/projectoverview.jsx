import React, { useState } from "react";
import Layout from "../component/Layout";
import nirajan from "../images/nirajan.jpg";
import { FaEllipsisH, FaPlus, FaPlusCircle, FaTimes } from "react-icons/fa";
import Member from "../component/member";

export default function Projectoverview() {
  const [openmemberdiv, isOpenmemberdiv] = useState(false);
  const [opensetting, isopensetting] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [position, setPosition] = useState([{ name: "developer" }]);
  const [membersimage, setMembersimage] = useState([{ image: nirajan }]);
  const [cancelProject, setCancelProject] = useState(false);
  const [title, changeTitle] = useState();
  const [input, setinput] = useState();
  const handleinput = () => {
    changeTitle(input);
  };

  // ==================to show confirm box before cancel project==============================
  const cancelProjectHandler = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel the project?"
    );
    if (confirmed) {
      setCancelProject(true);
    }
  };
  // to set the position and image during the click on button=======================
  const handlememberdetail = (memberdetial) => {
    setPosition([...position, { position: memberdetial.position }]);
    setMembersimage([...membersimage, { image: memberdetial.image }]);
  };
  //  to remove the particular member================================
  const removeMember = (memberToRemove) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this member?"
    );
    if (confirmed) {
      const updatedPositions = position.filter(
        (pos) => pos.name !== memberToRemove.position
      );
      const updatedImages = membersimage.filter(
        (img) => img.image !== memberToRemove.image
      );
      setPosition(updatedPositions);
      setMembersimage(updatedImages);
    }
  };
  const demotitle = [
    { id: 1, titlename: "Web Design" },
    { id: 2, titlename: "Web Development" },
    { id: 3, titlename: "Software Development" },
    { id: 4, titlename: "Graphic design" },
    { id: 5, titlename: "Mobile application" },
  ];
  const selecttitle = () => {
    console.log("hello");
  };

  return (
    <Layout>
      {/*============================= to add the card ============================================== */}
      <FaPlus className="w-7 h-7" onClick={() => setOpenCard(!openCard)} />
      {openCard && (
        <div className=" w-52  bg-stone-600">
          {demotitle.map((demotitle) => (
            <div className="" key={demotitle.id}>
              <li
                onClick={selecttitle}
                className="cursor-pointer my-2 bg-red-500 hover:bg-red-400 rounded-3xl pl-1 list-none"
              >
                {demotitle.titlename}
              </li>
            </div>
          ))}
        </div>
      )}

      {/*===================== cancelproject state is used to cancle  the hole state =========================*/}
      {!cancelProject && (
        <div className="w-96 border rounded-2xl px-4 py-3 space-y-4">
          <div className="flex justify-between items-center">
            <div className="rounded-3xl bg-orange-200 w-32 flex text-center justify-center items-center h-10 text-blue-950 font-semibold font-serif">
              {title}
            </div>
            <FaEllipsisH
              className="h-5 w-6"
              onClick={() => isopensetting(!opensetting)}
            />
            {/* ================================================== open of the setting menu========================= */}
            {opensetting && (
              <div className="w-44 h-60 bg-stone-100 space-y-3">
                <li
                  onClick={cancelProjectHandler}
                  className=" cursor-pointer bg-red-200 rounded-3xl h-10 flex justify-center items-center hover:bg-red-300"
                >
                  cancle project
                </li>
                <li
                  onClick={() => changeTitle(!title)}
                  className=" cursor-pointer bg-red-200 rounded-3xl h-10 flex justify-center items-center hover:bg-red-300"
                >
                  change title
                </li>
                {/* ================================================== open of the change title option========================= */}
                {title && (
                  <div className="space-y-2">
                    <div className="div">your previous Name {title}</div>
                    <input
                      type="text"
                      className="border"
                      onChange={(e) => setinput(e.target.value)}
                    />
                    <button
                      onClick={handleinput}
                      className="w-28 rounded-3xl bg-slate-800 text-red-50"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* ==============get the position of member ==================*/}
          <div className="space-y-4 flex justify-center flex-col">
            <div className="flex space-x-1">
              {position.map((pos, index) => (
                <div className="flex" key={index}>
                  {pos.position}
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
            <div className="flex justify-between ">
              <div className=" relative flex space-x- ">
                {membersimage.map((member, index) => (
                  <div className="group" key={index}>
                    <div class="invisible group-hover:visible absolute bg-white border border-gray-300 py-1 px-3   z-10">
                      <FaTimes onClick={() => removeMember(member)} />
                    </div>
                    {/* ==============get the image of member ==================*/}
                    <img
                      src={member.image}
                      alt=""
                      srcset=""
                      className="w-11 h-11 rounded-full hover:cursor-pointer "
                    />
                  </div>
                ))}
              </div>
              <label htmlFor="upload" className="add">
                <FaPlusCircle
                  className="h-8 w-10"
                  onClick={() => isOpenmemberdiv(!openmemberdiv)}
                />
              </label>
            </div>

            {/* ================================================== open of add member option========================= */}
            {openmemberdiv && (
              <div className="h-1/4 w-5 border rounded-md absolute bg-white">
                <Member
                  onMemberSelectd={(memberdetial) =>
                    handlememberdetail(memberdetial)
                  }
                />
                {/* used for props ...get the value from the "member file" ..by sending the props request which return the image and position of member */}
              </div>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}
