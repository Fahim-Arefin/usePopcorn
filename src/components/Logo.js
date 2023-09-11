import React from "react";
// flex basis-1/5 shrink-0 p-2 space-x-2 items-center
function Logo() {
  return (
    <div className="mx-auto lg:mx-0 flex p-2 space-x-2 items-center">
      <span className="text-3xl" role="img">
        🍿
      </span>
      <h1 className="text-white text-xl font-semibold tracking-widest">
        usePopcorn
      </h1>
    </div>
  );
}

export default Logo;
