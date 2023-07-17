import React from "react";
import Layout from "../component/Layout";

export default function Tasklist() {
  return (
    <Layout>
      <div class="relative inline-block">
        <div class="group">
          <div class="invisible group-hover:visible absolute bg-white border border-gray-300 py-2 px-4 top-[-25px] left-[-70px] z-10">
            <button class="text-red-500">Cancel</button>
          </div>
          <div class="hover:cursor-pointer">Hover over me</div>
        </div>
      </div>
    </Layout>
  );
}
