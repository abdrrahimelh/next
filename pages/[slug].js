import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../components/header";
import Image from "next/image";
import { getSession } from "next-auth/client"


function Mypage() {
  const router = useRouter();
  const { slug } = router.query;
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const response = await fetch("/api/" + slug);
    setComments(response.status);
  };
  fetchComments();

  return (
    <div>
      <Header />
      <div className="flex text-3xl">
        {199 < parseInt(comments) && parseInt(comments) <= 299 ? (
          <div class="flex">
            <p className="font-extrabold text-green-400">
              The request for {slug} was successful
            </p>
            <Image src="/img/success.gif" alt="" width={80} height={80}></Image>
          </div>
        ) : (
          <div class="flex content-center">
           <p className="font-extrabold text-red-400">
            The request for {slug} was unsuccessful
          </p>
            <Image className="ml-5 " src="/img/error.gif" alt="" width={80} height={80}></Image>
          </div>
          
        )}
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}
export default Mypage;
