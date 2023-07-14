import React, { useState } from "react";
import Layout from "./Layout";
import nirajan from "../images/nirajan.jpg";
import panda from "../images/panda.jpg";
import laugh from "../images/laugh.jfif";

export default function Member({ onMemberSelect }) {
  const demomember = [
    { id: 1, position: "devloper", image: nirajan },
    { id: 2, position: "devloper", image: panda },
    { id: 4, position: "devloper", image: laugh },
  ];
  const [selectedMember, setSelectedMember] = useState(null);
  const handleDoneClick = () => {
    const member = demomember.find((obj) => obj.id === selectedMember);
    onMemberSelect(member);
  };

  return (
    <>
      <div className="flex space-x-6">
        {demomember.map((member) => (
          <div
            className={`member ${
              selectedMember === member.id
                ? "selected border-2 border-red-700"
                : ""
            }`}
            key={member.id}
            onClick={() => setSelectedMember(member.id)}
          >
            <div className="pos">{member.position}</div>
            <img src={member.image} alt="" className="w-11 h-11" />
          </div>
        ))}
      </div>
      <input
        type="button"
        value="done"
        className="border rounded-2xl bg-slate-950 text-red-600 cursor-pointer hover:bg-slate-500 hover:text-white"
        onClick={handleDoneClick}
      />
    </>
  );
}
