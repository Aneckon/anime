import axios from 'axios';

export function Fetch({ email, password, autch, username, setErrorServer }) {
  axios
    .post(`http://localhost:5000/api${autch}`, {
      email,
      password,
      username,
    })
    .then((res) => {
      const user = JSON.stringify(res.data.userData.user);
      localStorage.setItem('user', user);
      localStorage.setItem('token', res.data.userData.refreshToken);
    })
    .catch((error) => {
      setErrorServer(error.response.data);
    });
}

export function FetchLogoute() {
  axios.post(`http://localhost:5000/api/logoute`);
}

export async function FetchAddAnime({ name, img, categorie, studio, description }) {
  try {
    const res = await axios.post(`http://localhost:5000/api/create`, {
      name,
      img,
      categorie,
      studio,
      description,
    });
    console.log(res);
  } catch (error) {
    if (error === undefined) {
      console.log(error.res.data);
    }
  }
}
