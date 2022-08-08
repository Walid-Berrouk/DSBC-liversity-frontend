import React from "react";

export default function Scope() {
  return (
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg
        aria-hidden="true"
        class="w-5 h-5 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
  );
}
