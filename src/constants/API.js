export const API_IMAGES = Object.freeze({
  BACKGROUND: '/background-images/',
  PROFILE: '/profile-images/',
});

export const API_MESSAGES = Object.freeze({
  BY_ID: (messageId) => `/messages/${messageId}`,
});

export const API_RECIPIENTS = Object.freeze({
  RECIPIENTS: '/recipients/',
  BY_ID: (recipientId) => `/recipients/${recipientId}`,
  MESSAGES: (recipientId) => `/recipients/${recipientId}/messages`,
  REACTIONS: (recipientId) => `/recipients/${recipientId}/reactions`,
});
