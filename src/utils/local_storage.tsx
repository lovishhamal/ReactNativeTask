import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAsyncstorage = async (key: string, value: any) => {
  if (!key) return;
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getAsyncStorage = async (key: string, parse = true) => {
  if (!key) return;
  const storage: any = await AsyncStorage.getItem(key);
  if (storage && parse) {
    return JSON.parse(storage);
  }
  return storage;
};

export const removeAsyncStorage = async (key: string) => {
  if (!key) return;
  await AsyncStorage.removeItem(key);
};
