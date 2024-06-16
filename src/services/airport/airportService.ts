import axiosInstance from "@/lib/api";

export const getDomesticAirports = async () => {
  try {
    const res = await axiosInstance.get("/api/airport/domestic");
    return res.data;
  } catch (err) {
    // todo 에러에 따른 핸들링
    console.log(err);
  }
};

export const getInternationalAirports = async () => {
  try {
    const res = await axiosInstance.get("/api/airport/international");
    return res.data;
  } catch (err) {
    // todo 에러에 따른 핸들링
    console.log(err);
  }
};
