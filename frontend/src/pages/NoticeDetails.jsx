import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function EventDetails() {
    const { id } = useParams(); 
    const [notice, setNotice] = useState(null);
    useEffect(() =>{
        async function fetchNotice(){
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/notices/${id}`);
            const data = await response.json();
            setNotice(data);
        }
        fetchNotice();
    }, [id]);
    if(!notice){
        return <div>Loading...</div>
    }
  return (
    <div>
          <div
          key={notice._id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-600"
      >
          <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  {notice.category}
              </span>

              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {notice.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-5">
                  {notice.content}
              </p>
          </div>
      </div>
    </div>
  )
}

export default EventDetails