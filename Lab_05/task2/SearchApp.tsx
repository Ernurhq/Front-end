import React, { useState } from 'react';
import { User } from '../task1/types';
import UserCard from '../task1/UserCard';

const INITIAL_DATA: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "Diana", email: "diana@mail.com", age: 29 }
];

const SearchApp = () => {
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) => u.name.toLowerCase().includes(term.toLowerCase()))
    );
  };

  const handleClear = () => {
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleSearch} 
        placeholder="Search..." 
      />
      <button onClick={handleClear}>Clear</button>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard key={user.email} user={user}>
            <span>Status: Active</span>
          </UserCard>
        ))
      )}
    </div>
  );
};

export default SearchApp;
