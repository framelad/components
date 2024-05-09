import { useState } from 'react';
import { GithubUser } from './GithubUser';

const GithubUsers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://api.github.com/users/${searchTerm}`);
            const userData = await response.json();
            setUsers([...users, userData]);
        } catch (error) {
            console.error(error);
        }

        setSearchTerm('');
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter a GitHub username"
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {users.map((user, index) => (
                    <GithubUser key={index} username={user.login} />
                ))}
            </div>
        </div>
    );
};

export default GithubUsers;
