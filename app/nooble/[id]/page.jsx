import { getAllPostIds, getPostData } from "../../../lib/posts";
import Image from "next/image";
import Link from "next/link";

export default async function Post({ params }) {
  const { id } = params;
  const postData = await getPost(id);
  return (
    <div>
      <div className="">
        <div className="flex justify-center transition duration-600  px-5 items-center">
          <div className="mt-3"></div>

          <h1 className="text-5xl text-gray-500"> Nooble </h1>
        </div>

        <main className="">
          <div className="py-5 bg-[#161b22] rounded-md ml-[2.5%] m-2 xs:w-auto xl:w-[50%] text-3xl p-10 text-gray-500">
            <h2>{postData.title}</h2>
          </div>

          <div className="float-left bg-[#161b22] xs:w-auto xl:w-[50%] rounded-md p-10 text-xl text-gray-400 mt-2 mb-1 mr-2 ml-[2.5%]">
            <h3 className="underline">Übersicht:</h3>
            {postData.info}
          </div>

          <div className="float-left bg-[#161b22]  xl:w-[50%] xs:w-auto rounded-md p-10 text-xl  mt-2 mb-1 mr-2 ml-[2.5%] text-gray-500">
            <h3 className="underline">Weiterführende Links zum Lernfeld:</h3>
            <a href={postData.link1} target="_blank">
              {postData.title1}
            </a>
            <p>
              <a href={postData.link2} target="_blank">
                {postData.title2}
              </a>
            </p>
            <p>
              <a href={postData.link3} target="_blank">
                {postData.title3}
              </a>
            </p>
            <p>
              <a href={postData.link4} target="_blank">
                {postData.title4}
              </a>
            </p>
          </div>

          <Image
            width={650}
            height={650}
            src={postData.image}
            className=""
            alt="LF Image"
            priority
          />
        </main>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((p) => ({
    id: p.params.id,
  }));
}

async function getPost(id) {
  const postData = getPostData(id);
  return postData;
}
