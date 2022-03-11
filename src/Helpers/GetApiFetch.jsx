
export const GetApi = async () => {
  try {
    const res = await fetch({
      method: "get",
      url: "https://api.hatchways.io/assessment/students",
    });
    console.log(res);
    const data = await res.data.students();

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

GetApi();
