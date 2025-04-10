import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <div>
            <p className="">Jessica</p>
            <p className="">follower 20</p>
            <p className="">2 min ago</p>
          </div>
          <div>
            <button className="btn btn-primary">follow</button>
          </div>
        </div>

        <div className="card-body">
          <h2 className="card-title">Card Title</h2>

          <div className="card-actions justify-end"></div>
        </div>
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-actions justify-start mt-2">
          {[...Array(3)].map((_, index) => (
            <div key={index}>
              <button className="btn btn-primary">
                {index === 0 ? "Like" : index === 1 ? "share" : "comment"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
