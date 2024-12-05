// export default defineEventHandler(async () => {
//   const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg';
//   const blogId = '3462907902652169422'; 

//   const url = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }

//     const data = await response.json();

//     // Log data untuk memverifikasi bahwa kita mendapatkan data yang benar
//     console.log('Fetched Data:', data);

//     return data; // Mengembalikan objek data yang berisi array "items"
//   } catch (error) {
//     console.error('Error fetching Blogger API:', error.message);
//     throw createError({
//       statusCode: 502,
//       statusMessage: 'Failed to fetch data from Blogger API',
//     });
//   }
// });

import axios from 'axios'

export default defineEventHandler(async (event) => {

  const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg';
    const blogId = '3462907902652169422'; 
  const { id } = event.context.params

  const { data } = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/${id}`, {
    params: {
      key: apiKey,
    },
  })

  return data
})
