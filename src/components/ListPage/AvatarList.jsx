import React from 'react';
import { Avatar, AvatarGroup } from '@mui/material';
import '@/styles/avatar.custom.css';

function AvatarList({ recentMessages, messageCount }) {
  console.log(recentMessages);
  return (
    <AvatarGroup
      spacing={13}
      max={4}
      total={messageCount}
      sx={{
        '& .MuiAvatar-root': {
          width: 24,
          height: 24,
          fontSize: 15,
          backgroundColor: '#fff',
        },
      }}
      renderSurplus={() => {
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
              +{messageCount - 3}
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
