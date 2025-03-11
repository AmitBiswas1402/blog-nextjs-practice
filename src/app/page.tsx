import axios from "axios";
import Loading from "./loading";

async function getUserDetails() {
  const response = await axios.get(
    "http://localhost:3001/api/user"
  );
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  if(!userData){
    return <h1>
      Loading
    </h1> 
  }

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          <div>
            Email: {userData?.email}

          </div>
        </div>
      </div>
    </div>
  );
}
