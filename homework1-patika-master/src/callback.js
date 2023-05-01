
import axios from "axios";

// Fonksiyon async olarak tanımlanır
 async function getData(userId) {
  try{
    const {data:user} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const {data:posts} =await axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`);
    user.posts =posts
    return user;
  } catch (error) {
    // Hata oluşursa hata mesajını gösterir
    console.error(error.message);
  }  
}
export default getData;