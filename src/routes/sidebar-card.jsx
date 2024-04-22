import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.jpg";
import { GiShadowFollower } from "react-icons/gi";
import { FaGlobeAfrica, FaTwitter } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { TiThList } from "react-icons/ti";

const fetchProfile = async () => {
  const res = await fetch("https://api.github.com/users/osayiosas");

  return res.json();
};

export default function SidebarCard() {
  const { data, status } = useQuery(["profile"], fetchProfile);
  return (
    <section className="w-[80%] h-[95%] flex flex-col gap-11 p-6 bg-red-50 shadow-lg md:w-[90%] sm:w-[95%] sm:p-3 xs:h-full">
      <header className="flex justify-between items-center w-full mx-auto font-urbanist">
        <h1 className="text-3xl font-bold text-center  cursor-pointer transition-all hover:decoration-emerald-400 sm:text-xl">
          My GitHub Profile
        </h1>
        <Link
          to="/repo-list"
          className="border-2 border-emerald-100 rounded-lg py-1 px-4 text-black bg-pink-50 shadow-lg ring-2 ring-violet-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs"
        >
          Click to view Repos
        </Link>
      </header>

      <div className="font-worksans flex flex-col items-center gap-2">
        <Link
          to="error-boundary-test"
          className="border-2 border-red-100 rounded-lg py-1 px-2 text-white bg-red-200 shadow-lg ring-2 ring-red-200 ring-offset-2 transition-all hover:text-black hover:bg-white hover:shadow-sm hover:ring-offset-1 sm:text-sm sm:px-2 xs:text-xs"
        >
          ErrorBoundary
        </Link>
        <div className="h-[12rem] w-[12rem] rounded-xl shadow-xl bg-slate-100 overflow-hidden border-2 border-gray-200 ring-offset-2 ring-violet-200 transition-all hover:ring-2">
          <img
            src={status === "success" ? data.avatar_url : avatar}
            alt="profileimg"
            className="w-full h-full"
          />
        </div>
        <h2 className="font-normal text-2xl text-center">
          {status === "success" ? data.name : "Loading..."}
        </h2>
        <p className="text-center text-[0.9rem] px-2">
          {status === "success" ? data.bio : "Loading..."}
        </p>
        <div className="flex flex-col items-center justify-start gap-2 mt-2">
          <GiShadowFollower size={25} color="#E29494" />
          <p className="flex items-center">
            <span className="flex flex-col items-center">
              {status === "success" ? (
                <span className="text-3xl">{data.followers}</span>
              ) : (
                "Loading..."
              )}
              <span className="px-1">followers</span>
            </span>
            <span className="flex flex-col items-center">
              {status === "success" ? (
                <span className="text-3xl">{data.following}</span>
              ) : (
                "Loading..."
              )}
              <span className="px-1">following</span>
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center mt-2">
          <TiThList size={30} color="#E29494" />
          {status === "success" ? (
            <span className="text-4xl">{data.public_repos}</span>
          ) : (
            "Loading..."
          )}
          <p className="">Repo</p>
        </div>

        <div className="flex gap-3 justify-center xs:flex-wrap">
          <p className="flex items-center gap-1">
            <FaGlobeAfrica />
            {status === "success" ? data.location : "Loading..."}
          </p>
          <p className="flex items-center gap-1">
            <AiOutlineLink size={20} />
            {status === "success" ? (
              <a href={data.blog} target="_blank" rel="noopener noreferrer">
                {data.blog}
              </a>
            ) : (
              "Loading..."
            )}
          </p>
          <p className="flex items-center gap-1">
            <FaTwitter />
            {status === "success" ? (
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.twitter_username}
              </a>
            ) : (
              "Loading..."
            )}
          </p>
        </div>
      </div>

      <footer className="text-center">
        @
        <a
          href="https://github.com/osayiosas"
          target="_blank"
          className="transition-all hover:decoration-red-800"
        >
          Idisghe Osaigbovo
        </a>
      </footer>
    </section>
  );
}
