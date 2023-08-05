import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-full flex justify-center items-center bg-[#F3F3F3]">
      <article className="flex gap-20 flex-col items-center w-96 h-176 bg-white shadow-lg">
        <Image
          width={242}
          height={55}
          src="/images/logo-text-img.png"
          alt="로고"
          className="mt-32"
        />
        <div className="w-80 h-[343] flex-col">
          <div className="mb-5">
            <label className="font-normal" htmlFor="email">
              Email
            </label>
            <input
              name="email"
              className="w-full h-8 pl-2 shadow-inner"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25) inset" }}
              type="email"
            />
          </div>
          <div className="mb-5">
            <label className="font-normal" htmlFor="password">
              password
            </label>
            <input
              name="password"
              className="w-full h-8 pl-2 shadow-inner"
              style={{ boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.25) inset" }}
              type="password"
            />
          </div>

          <button className="bg-[#91E9F2] w-full text-white py-3 px-10 mb-6">
            Login
          </button>
          <p>Forgot your password?</p>
        </div>
      </article>
    </div>
  );
}
