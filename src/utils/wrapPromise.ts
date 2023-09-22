// https://dev.to/darkmavis1980/a-practical-example-of-suspense-in-react-18-3lln
function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let response: any;

  const suspender = promise.then(
    res => {
      status = 'success';
      response = res;
    },
    err => {
      status = 'error';
      response = err;
    },
  );

  const handler: any = {
    pending: () => {
      throw suspender
    },
    error: () => {
      throw response;
    },
    default: () => response,
  };

  const read = () => {
    const result = handler[status] ? handler[status]() : handler.default();
    return result;
  };

  return { read };
}

export default wrapPromise;