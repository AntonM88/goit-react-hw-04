import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImg = async (query, page) => {
  const { data } = await axios.get("search/photos", {
    headers: {
      Authorization: "Client-ID 3epLdoRXfdB02LB_Es4o_55chXkvzZ56DNswKj1YESs",
    },
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return data;
};
