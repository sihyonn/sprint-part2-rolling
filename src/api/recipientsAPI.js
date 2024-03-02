import instance from '@/api/instance';
import { API_RECIPIENTS } from '@constants/API';

/**
 * 롤링페이퍼 받는 대상 목록을 조회하는 API
 */
const getRecipientsList = ({ limit, offset }) => {
  return instance({
    url: API_RECIPIENTS.RECIPIENTS,
    method: 'GET',
    params: { limit, offset },
  });
};

/**
 * 롤링페이퍼 받는 대상 생성 API
 */
const postRecipient = ({ data }) => {
  return instance({
    url: API_RECIPIENTS.RECIPIENTS,
    method: 'POST',
    data: data,
  });
};

/**
 * recipientId에 해당하는 롤링페이퍼 대상 조회 API
 */
const getRecipientDataById = (recipientId) => {
  return instance({
    url: API_RECIPIENTS.BY_ID(recipientId),
    method: 'GET',
  });
};

/**
 * recipientId에 해당하는 롤링페이퍼 대상 삭제 API
 */
const deleteRecipientById = (recipientId) => {
  return instance({
    url: API_RECIPIENTS.BY_ID(recipientId),
    method: 'DELETE',
  });
};

/**
 * 대상에게 보낸 메세지 조회 API
 */
const getMessageToRecipient = ({ recipientId, limit, offset }) => {
  return instance({
    url: API_RECIPIENTS.MESSAGES(recipientId),
    method: 'GET',
    params: { limit, offset },
  });
};

/**
 * 대상에게 보내는 메세지 생성 API
 */
const postMessagesToRecipient = ({ recipientId, data }) => {
  return instance({
    url: API_RECIPIENTS.MESSAGES(recipientId),
    method: 'POST',
    data: data,
  });
};

/**
 * 대상에게 단 리액션(이모지) 조회 API
 */
const getReactions = ({ recipientId, limit, offset }) => {
  return instance({
    url: API_RECIPIENTS.REACTIONS(recipientId),
    method: 'GET',
    params: { limit, offset },
  });
};
/**
 * 대상에게 달 리액션(이모지) 생성 API
 */
const postReactions = ({ recipientId }) => {
  return instance({
    url: API_RECIPIENTS.REACTIONS(recipientId),
    method: 'POST',
    data: data,
  });
};

export default {
  getRecipientsList,
  postRecipient,
  getRecipientDataById,
  deleteRecipientById,
  getMessageToRecipient,
  postMessagesToRecipient,
  getReactions,
  postReactions,
};
