import { useEffect, useState } from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Events() {
    const [events, setEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    async function fetchEvents() {
        if(loading || !hasMore) return;
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/events?page=${page}&limit=2`);
        const data = await response.json();
        if(data.events.length === 0){
            setHasMore(false);
        }
        else{
            setEvents(prev => [...prev, ...data.events])
            setPage(prev => prev + 1);
        }
        setLoading(false);
    }

    useEffect(() => {

        fetchEvents();
    }, []);
    useEffect(() => {
        function handleScroll(){
            if (loading || !hasMore) return;
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -50){
                fetchEvents();
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page, loading, hasMore])

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4">

                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Upcoming Events
                </h1>

                <div className="space-y-6">

                    {events.map((event) => (
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

                            <div className="mt-6">
                                <Link to={`/events/${event._id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                {loading && <div className="flex justify-center py-6">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                </div>}
                {!hasMore && <p className="text-center text-gray-600">No more events</p>}
                </div>
            </div>
        </div>
    );
}

export default Events;