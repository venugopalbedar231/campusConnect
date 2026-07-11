import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function EventDetails() {
    const { id } = useParams(); 
    const [event, setEvent] = useState(null);
    useEffect(() =>{
        async function fetchEvent(){
            const response = await fetch(`http://localhost:3000/api/events/${id}`);
            const data = await response.json();
            setEvent(data);
        }
        fetchEvent();
    }, [id]);
    if(!event){
        return <div>Loading...</div>
    }
  return (
    <div>
          <div
              key={event._id}
              className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition"
          >
              <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                      {event.title}
                  </h2>

                  <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full capitalize">
                      {event.category}
                  </span>
              </div>

              <p className="text-gray-600 mb-5">
                  {event.description}
              </p>

              <div className="space-y-3 text-gray-700">

                  <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>{event.organizer}</span>
                  </div>

                  <div className="flex items-center gap-2">
                      <CalendarDays size={18} />
                      <span>
                          <strong>Starts:</strong>{" "}
                          {new Date(event.startTime).toLocaleString(
                              "en-IN",
                              {
                                  dateStyle: "medium",
                                  timeStyle: "short",
                              }
                          )}
                      </span>
                  </div>

                  <div className="flex items-center gap-2">
                      <Clock3 size={18} />
                      <span>
                          <strong>Ends:</strong>{" "}
                          {new Date(event.endTime).toLocaleString(
                              "en-IN",
                              {
                                  dateStyle: "medium",
                                  timeStyle: "short",
                              }
                          )}
                      </span>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default EventDetails