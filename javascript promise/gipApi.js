const input = document.getElementById("input");
const button = document.getElementById("button");
const container = document.getElementById("container");
const loading = document.getElementById("loading");

// button.addEventListener("click", () => {
//   const inputValue = input.value;
//   console.log(inputValue);
// });

button.addEventListener("click", async () => {
  loading.style.display = "flex";

  const { data } = await getGiphyData(input.value);
  loading.style.display = "none";

  data.forEach((element) => {
    const imgTag = `img src=${element.images.original.url}/>`;
    container.innerHTML += imgTag;
  });

  // data.forEach((element) => {
  //   const imgTag = document.createElement("img");
  //   imgTag.src = element.images.original.url;
  //   container.appendChild(imgTag);
  // });
});

const getGiphyData = async (searchInput) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${searchInput}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;
  const result = await fetch(url);
  console.log(result);

  return result.json;
};
