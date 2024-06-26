import EditTopicForm from '@/components/EditTopicForm'
import React from 'react'

const getTopicById = async (id) => {
  try {
      const res = await fetch(`https://curd-mongodb.vercel.app/api/topics/${id}`,{
        cache:'no-store'
      })

      if(!res.ok){
        throw new Error('Failed to load topic !')
      }
      return res.json();

  } catch (error) {
    console.log(error)
  }
}

export default async function EditTopic({ params }) {
    const {id} = params;
    const {topic} = await getTopicById(id);
    const {title, description} = topic;

  return <EditTopicForm  id={id} title={title} description={description} />;
}
