import { useState } from "react";

const UpdatePassword = () => {
  const [old, setold] = useState("");
  const [newp, setnewp] = useState("");

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="bg-white md:p-15 p-6 md:my-0 mt-30">
        <form>
          <h1 className="text-4xl py-4 font-bold">Update Password</h1>
          <div className="py-1">
            <p>Old Password</p>
            <input
              type="text"
              value={old}
              onChange={(e) => {
                setold(e.target.value);
              }}
              className="outline-none border-2 border-blue-700 ps-1 rounded font-mono"
            />
          </div>
          <div className="py-1">
            <p>New Password</p>
            <input
              type="text"
              value={newp}
              onChange={(e) => {
                setnewp(e.target.value);
              }}
              className="outline-none border-2 border-blue-700 ps-1 rounded font-mono"
            />
          </div>

          <button className="bg-green-400 w-full mt-5 py-1 rounded-full hover:bg-green-300 hover:cursor-pointer">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
