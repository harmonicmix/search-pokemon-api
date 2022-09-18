const response = {
  sendResponse: async (
    res: {
      header(arg0: string, arg1: string): unknown;
      status: (arg0: any) => {
        (): any;
        new (): any;
        json: { (arg0: { statusName: any; data: any }): void; new (): any };
      };
    },
    statusCode: any,
    statusName: any,
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
