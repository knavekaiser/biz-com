const baseApiUrl = process.env.NEXT_PUBLIC_BIZ_APP_BASE_URL;

const endpoints = {
  baseApiUrl,

  topics: `${baseApiUrl}/api/chat/topics`,
  chat: `${baseApiUrl}/api/chat/:chat_id`,
};

export default endpoints;
