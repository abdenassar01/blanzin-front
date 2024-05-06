export const appendArrayToSearchParams = (
  values: any,
  searchKey: string,
  searchParams: URLSearchParams
) => {
  if (values) {
    if (Array.isArray(values)) {
      values.forEach((item, index) => {
        searchParams.set(`${searchKey}[${index}]`, item);
      });
    } else {
      searchParams.set(`${searchKey}[0]`, values);
    }
  }
};
