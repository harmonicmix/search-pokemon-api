const response = {
  sendResponse: async (
    res: {
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
    res.status(statusCode).json(resp);
  },
};

module.exports = response;
