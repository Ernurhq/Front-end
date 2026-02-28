import React from 'react';
import { User } from './types';

interface UserCardProps {
  user: User;
  isActive?: boolean;
  children: React.ReactNode;
}

const UserCard = ({ user, isActive = true, children }: UserCardProps) => {
  return (
    <div style={{ 
      opacity: isActive ? 1 : 0.5, 
      border: '1px solid #ccc', 
      padding: '15px', 
      margin: '10px',
      borderRadius: '8px'
    }}>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <div>{children}</div>
    </div>
  );
};

export default UserCard;