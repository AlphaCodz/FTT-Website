export const errorMessages = (error: any) => {
  const response = Object.values(error).map((err) => {
    if (!Array.isArray(err)) return;
    return err[0];
  });

  return response;
};
