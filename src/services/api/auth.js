import { $get, $post } from './base';

const login = async (body) => {
  try {
    const res = await $post('login', body);

    return res;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const res = await $get('logout');

    return res;
  } catch (error) {
    throw error;
  }
};

export {
  login,
  logout,
};