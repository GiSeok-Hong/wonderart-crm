import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-full flex justify-center items-center bg-[#f3f3f3]">
      <article className="flex gap-20 flex-col items-center w-96 h-176 bg-white shadow-lg">
        <Image
          width={242}
          height={55}
          src="/images/logo-text-img.png"
          alt="로고"
          className="mt-32"
        />
        <div className="w-80 h-[343] flex-col">
          <label htmlFor="email">Email</label>
          <input name="email" className="w-full" type="email" />
          <label htmlFor="password">password</label>
          <input name="password" className="w-full" type="password" />
          <button className="bg-[#91E9F2] w-full text-white py-3 px-10">
            Login
          </button>
          <p>Forgot your password?</p>
        </div>
      </article>
    </div>
  );
}
