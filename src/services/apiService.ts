export interface ApiConfig {
  key: string;
  base: string;
}
export const api: ApiConfig = {
  key: "bce209d37b6dfc97118fe00cd9ab1f42",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const searchPressed = (location: string) => {
  fetch(`${api.base}weather?q=${location}&units=metric&appid=${api.key}`)
    .then((res) => res.json())
    .then((result: any) => {
      console.log(result);
    });
};
