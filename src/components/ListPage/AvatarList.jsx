import React from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import '@/styles/avatar.custom.css';

function AvatarList({ recentMessages }) {
  return (
    <AvatarGroup
      spacing={13}
      max={4}
      sx={{
        '& .MuiAvatar-root': {
          width: 24,
          height: 24,
          fontSize: 15,
          backgroundColor: '#fff',
        },
      }}
      renderSurplus={(surplus) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{ fontSize: '1.2rem', color: '#555', textAlign: 'center' }}
            >
              +{surplus.toString()[0]}
            </span>
          </div>
        );
      }}
    >
      {recentMessages.map((value, index) => (
        <Avatar
          key={index}
          alt={value.sender}
          src={value.profileImageURL}
          style={{ position: 'relative', zIndex: index }}
          sx={{ width: '28px', height: '28px' }}
        />
      ))}
    </AvatarGroup>
  );
}
export default AvatarList;
