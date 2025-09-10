const { default: axios } = require("axios");
// Запрос на отправку заявки
// data  = { link: string, file: Blob, message: string, price: number}
const requestApplication = async (data) => {
  try {
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/request`,
      data
    );
    return response;
  } catch (error) {
    return Error("Ошибка при отправке запроса");
  }
};

export { requestApplication  };
