import axios from "axios";
import Image from "next/image";
async function getUserData() {
    await new Promise((r) => {setTimeout(r,5000)})
    const response = await axios.get('https://dummyjson.com/products')
    return response.data
}
export default async function Home() {
  const data = await getUserData()
  console.log(data)
  // return response.data;
  return (
    <div>
      <h1>Nithya gastro and liver clinic</h1>
    </div>
  );
}
