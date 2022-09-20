const response = {
  sendResponse: async (
    res: any,
    statusCode: number,
    statusName: string,
    data: any
  ) => {
    const resp = {
      statusName,
      data,
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.status(statusCode).json(resp);
  },
};

module.exports = response;
