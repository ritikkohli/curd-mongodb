"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";


export default function EditTopicForm({id, title, description}) {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const res = await fetch(`https://curd-mongodb.vercel.app/api/topics/${id}`,{
                method:'PUT',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if(!res.ok){
                throw new Error('Failed to update topic')
            }
            router.push('/')
            router.refresh();
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e)=>setNewTitle(e.target.value)}
            className="border border-slate-500 px-8 py-2"
            value={newTitle}
            type="text"
            placeholder="Topic title"
        />
        <input
            onChange={(e)=>setNewDescription(e.target.value)}
            className="border border-slate-500 px-8 py-2"
            value={newDescription}
            type="text"
            placeholder="Topic description"
        />
        <button
            type="submit"
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
            update Topic
        </button>
      </form>
  )
}
