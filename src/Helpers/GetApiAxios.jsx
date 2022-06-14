import axios from "axios";

export const GetApi = async () => {
  try {
    const res = await axios({
      method: "get",
      url: "https://api.hatchways.io/assessment/students",
    });
    //console.log(res);
    const data = await res.data.students;
    //console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

