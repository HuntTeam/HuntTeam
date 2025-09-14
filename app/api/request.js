import axios from "axios";

export const requestApplication = async (data) => {
  const formData = new FormData();
  formData.append("link", data.link.trim());
  if (data.message) formData.append("message", data.message.trim());
  formData.append("client_name", data.client_name.trim());
  formData.append("price", data.price);
  if (data.file) formData.append("file", data.file);

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/request`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    if (!response.data.success) {
      throw response.data;
    }

    return response.data;
  } catch (err) {
    if (err.response) {
      throw err.response.data;
    } else {
      throw err;
    }
  }
};
