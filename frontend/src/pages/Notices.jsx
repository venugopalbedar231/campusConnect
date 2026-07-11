import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Notices() {
    const [notices, setNotices] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    
    async function fetchNotices() {
        if(loading || !hasMore) return;
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/notices?page=${page}&limit=2`);
        const data = await response.json();
        if(data.notices.length === 0){
            setHasMore(false);
        }
        else{
            setNotices(prev => [...prev, ...data.notices])
            setPage(prev => prev + 1);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchNotices();
    }, []);
    useEffect(() => {
        function handleScroll(){
            if (loading || !hasMore) return;
            if(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight -50){
                fetchNotices();
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [page, loading, hasMore])

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
                   Notices
                </h1>

                <div className="grid gap-6">
                    {notices.map((notice) => (
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

                                <Link to={`/notices/${notice._id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition">
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                    
                {loading && <div className="flex justify-center py-6">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
                </div>}
                {!hasMore && <p className="text-center text-gray-600">No more notices</p>}
                </div>
            </div>
        </div>
    );
}

export default Notices;