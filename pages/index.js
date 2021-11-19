import Header from "../components/header";
import { useSession } from "next-auth/client";
export default function Home() {
  const [session] = useSession();

  return (
    <div>
      <Header />
      {session ? (<div>
        <h1 className=" font-bold text-3xl m-10 self-center text-green-500"> You are logged in try to visit a route from the header  </h1> </div>
      ) : (
       <div className="m-10 self-center text-red-500"> <h1 className="justify-center font-bold text-3xl "> Log in first </h1> </div>
      )}
    </div>
  );
}
