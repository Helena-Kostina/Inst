export default class instaService {
  constructor() {
    this._apiBase = "http://localhost:3000"; //   _- это неизменяемое значение
  }

  //поля классов, нативный api
  //ассинхронная функция es7 => async -  await
  // fetch - это api, который делает запрос к серверу
  getResource = async url => {
    const res = await fetch(`${this._apiBase}${url}`);

    //проверка прошел ли запрос
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}; received ${res.status}`);
    }

    //все ответы приходят в формате json -> в fetch есть свойство .json, который преобразует json в обычный оъект, с котрым мы можем работать дальше в ФАЙЛЕ
    // .json это ассинхронная фунция, которая возвращает promise, чтобы ответ записался необходимо поставить await, чтобы подаждать окончание выполнения опреации
    return await res.json();
  };

  //метод который поможет получить все посты
  getAllPosts = async () => {
    const res = await this.getResource("/posts/");

    return res;
  };
}
