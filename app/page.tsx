import client from "@/db";

async function getUserData(){
  const res = await client.user.findFirst();
  return res;
} 

export default async function Home() {
  const userData = await getUserData();

  return (
    <div>
      This is root route
      <div>{userData?.id}</div>
      <div>{userData?.email}</div>
      <div>{userData?.password}</div>
    </div>
  );
}
