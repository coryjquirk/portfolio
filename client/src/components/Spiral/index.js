import React from "react";

export default function Spiral() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 1052" id="logo">
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="25%" stopColor="#23d5ab" stopOpacity="1.0" />
          <stop offset="75%" stopColor="#aea2db" stopOpacity="1.0" />
        </linearGradient>
      </defs>
      <path
        id="spiral"
        fill="none"
        stroke="url(#linear)"
        d="m351 487c0 8-11 4-14-1-6-11 4-24 15-27 19-5 37 11 40 30 4 27-18 50-44 53-35 4-64-25-66-59-3-42 32-77 73-79 50-3 90 39 92 88 2 57-46 104-102 105-65 2-117-53-119-117-1-72 60-131 131-132 80-1 144 67 145 146 1 87-74 158-160 158-95 0-171-81-171-175 0-102 88-185 190-184 110 1 198 95 197 204C557 615 456 709 340 708 215 706 115 598 117 475 119 342 233 236 364 238 504 240 616 361 614 500 611 648 484 766 337 763 182 760 58 626 61 472 65 309 206 179 367 183c170 4 306 151 302 320-4 178-158 319-335 315"
      />
    </svg>
  );
}
