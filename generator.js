module.exports = (api, options, rootOptions) => {
  console.log(api.entryFile);

  api.onCreateComplete(() => {
    console.log(api.entryFile);
  });
};
