export default async function Users() {
    await new Promise((resolve)=>setTimeout(resolve, 5000));
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return (
        <div className="grid grid-cols-2 gap-2 p-4 bg-black" >
            {users.map(user => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
                    <div className="flex flex-col space-y-1">
                        <h2 className="text-lg font-semibold">{user.name}</h2>
                        <p className="text-sm">{user.username}</p>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <div className="text-md">{user.email}</div>
                        <div className="text-md">{user.phone}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
