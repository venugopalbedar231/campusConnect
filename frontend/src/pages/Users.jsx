import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`);
            const data = await response.json();
            setUsers(data.user);
        }
        fetchUsers();
    }, []);

    return (
        <div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
            {users.map(user => (
                    <tr>
                        <td scope="col">{user.rollno}</td>
                        <td scope="col">{user.name}</td>
                        <td scope="col">{user.email}</td>
                        <td scope="col">{user.role}</td>
                    </tr>
            ))}
                </tbody>
                </table>
        </div>
    );
}

export default Users;