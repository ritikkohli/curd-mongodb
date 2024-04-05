import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

const getTopics = async () => {
  try {
      const res = await fetch("http://localhost:3000/api/topics",{
        cache:'no-store',
      });

      if(!res.ok){
        throw new Error('failed to load')
      }
      return res.json();
  } catch (error) {
      console.log(error)
  }

}

export default async function TopicsList(e) {

    const { topics } = await getTopics();
    return (
      <>
      {topics.map((t)=>(

      <div className="border-2 border-blue-400 p-5 flex justify-between items-start mb-5"
          key={t._id}
      >
        <div className="">
          <h1 className="font-bold text-2xl">{t.title}</h1>
          <div className="">{t.description}</div>
        </div>

        <div className="flex justify-between items-center gap-2">
          <RemoveBtn id={t._id}/>
          <Link href={`/editTopic/${t._id}`}>
            <HiPencilAlt size={24}/>
          </Link>          
        </div>        
      </div>
      ))}
      </>
    );
}  