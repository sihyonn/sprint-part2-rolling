import instance from '@/api/instance';
import { API_MESSAGES } from '@constants/API';

/**
 * 카드 메시지 정보를 가져오는 API
 */
const getCardMessage = (messageId) => {
  return instance({
    url: API_MESSAGES.BY_ID(messageId),
    method: 'GET',
  });
};

/**
 * 카드 메시지를 전체 수정하는 API
 */
const putCardMessage = ({ messageId, message }) => {
  return instance({
    url: API_MESSAGES.BY_ID(messageId),
    method: 'PUT',
    data: { message },
  });
};

/**
 * 카드 메시지를 부분 수정하는 API
 */
const patchCardMessage = ({ messageId, message }) => {
  return instance({
    url: API_MESSAGES.BY_ID(messageId),
    method: 'PATCH',
    data: { message },
  });
};

/**
 * 카드 메시지를 삭제하는 API
 */
const deleteCardMessage = (messageId) => {
  return instance({
    url: API_MESSAGES.BY_ID(messageId),
    method: 'DELETE',
  });
};

export default {
  getCardMessage,
  putCardMessage,
  patchCardMessage,
  deleteCardMessage,
};
