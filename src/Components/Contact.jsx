import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-44 my-10">
        <h2 className="text-2xl font-bold py-2">Fill out the form</h2>
        <form className="w-[50%] pl-10 border p-10" action="">
          <div className="flex justify-between">
            <div className="my-2">
              <label className="py-3 font-bold" htmlFor="">First Name</label>
              <br />
              <input className="px-4 py-2 border-black border my-3" type="text" placeholder="First name" />
            </div>
            <div className="my-2">
              <label className="py-3 font-bold" htmlFor="">Last Name</label>
              <br />

              <input className="px-4 py-2 border-black border my-3" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="my-2">
            <label className="py-3 font-bold" htmlFor="">Contact Info:</label>
            <br />
            <input className="px-4 py-2 border-black border my-3" type="number" placeholder="number" />
            <br />
            <input className="px-4 py-2 border-black border my-3" type="email" placeholder="Email" />
          </div>
          <div className="my-2">
            <label className="py-3 font-bold">Query?</label>
            <br />
            <textarea className="border border-black " placeholder="Enter your text here" />
          </div>
          <button className="px-4 py-2 border bg-[#CDE1DF]">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
