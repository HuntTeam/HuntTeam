import axios from "axios";
export const requestApplication = async (data) => {
  try {
    const formData = new FormData();
    formData.append("link", data.link);
    formData.append("message", data.message);
    formData.append("client_name", data.client_name);
    formData.append("price", data.price);
    if (data.file) {
      formData.append("file", data.file);
    }
    let response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/request`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    return new Error("Ошибка при отправке запроса");
  }
};
