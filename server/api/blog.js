import axios from 'axios';

export default defineEventHandler(async () => {
  const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg'; // Ganti dengan API Key Anda
  const blogId = '3462907902652169422'; // Ganti dengan Blog ID Anda

  const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;
  const { data } = await axios.get(url);

  return data.items; // Mengembalikan daftar postingan
});


