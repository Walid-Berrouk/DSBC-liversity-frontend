import React from "react";
import Scope from "./Scope";

export default function Searchbar() {
  return (
    <div className="w-[32rem]">
      <form>
        <div class="relative">
          <Scope />
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-black text-lg placeholder:text-black bg-gray-50 rounded-lg outline-none"
            placeholder="Search for sessions"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2 -translate-y-1/2 top-1/2 px-4 py-2"
          >
            <img src="https://placehold.co/32x32.png" alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
