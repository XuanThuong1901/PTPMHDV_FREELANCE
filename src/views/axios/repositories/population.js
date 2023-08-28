import axios from 'axios';

async function getpopulation() {
  const urlGetPopulation =
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

  try {
    let result = [];
    let responseData = await axios.get(urlGetPopulation);
    responseData.data.data.forEach(function (item) {
      let myObject = {};

      // tạo ra các thuộc tính trong myObject với vòng lặp các data được gán bằng item
      // và item['...'] là tên các thuộc tính mảng trên api
      myObject.nationId = item['ID Nation'];

      // ta push vào result
      result.push(myObject);
    });
    return result
  } catch (error) {
    throw error
  }
}
