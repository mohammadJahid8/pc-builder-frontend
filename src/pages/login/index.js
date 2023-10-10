import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className=" w-full max-w-[17rem] p-2 py-3 mx-auto">
        <h1 className="text-center font-semibold text-xl mb-2">Login</h1>

        <button
          className="flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full mb-2"
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://pc-builder-kappa-beryl.vercel.app/",
            })
          }
        >
          <FcGoogle size={30} className="me-2" />
          <span>Continue with Google</span>
        </button>
        <button
          className="flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-base font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
          onClick={() =>
            signIn("github", {
              callbackUrl: "https://pc-builder-kappa-beryl.vercel.app/",
            })
          }
        >
          <BsGithub size={28} className="me-2" />
          <span>Continue with Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
