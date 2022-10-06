const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
const storyText = '外気温は華氏94度でしたので、:insertx:は散歩に行きました。 彼らが:inserty:についたとき、 しばし恐怖におののき、そして :insertz:。  Bob は一部始終を見ていたが、驚きを隠せなかった-:insertx:が300ポンドもあり、暑い日でした。';
const insertX = ['ゴブリン', '大きいパパ', 'クリスマスのおじさん'];
const insertY = ['スープのレストラン', 'ディズニーランド', 'ホワイトハウス'];
const insertZ = ['自然発火した', '歩道の水溜りに溶けた', 'ナメクジになり、這いながら去っていった'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
