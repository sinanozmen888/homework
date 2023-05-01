import getData from "./callback";

async function getUserInfo() {
  try {
    // Kullanıcıdan id bilgisi istenir
    const userId = Number(prompt("Enter user id:"));
    // getData fonksiyonu çağrılır ve kullanıcının verileri alınır
    const userData = await getData(userId);
    console.log(userData); // kullanıcının verileri konsola yazdırılır
  } catch (error) {
    console.error(error.message);
  }
}

getUserInfo();


