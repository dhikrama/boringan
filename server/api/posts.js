import axios from 'axios'

export default defineEventHandler(async (event) => {

    const apiKey = 'AIzaSyA2-Ljqejll0cpOEH0xF3eLd2FrYmmoBLg';
    const blogId = '3462907902652169422'; 
  const { data } = await axios.get(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts`, {
    params: {
      key: apiKey,
    },
  })

  return data.items
})
