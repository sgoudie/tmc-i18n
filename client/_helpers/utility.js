// If case1 is equal to case2, return true, else false.
// For troubleshooting, uncomment top two lines
// var equals = c1 == c2 ? true : false;
// console.log(c1 + " equals " + c2 + "? - " + equals);
Template.registerHelper('capitalize', (text) => text.charAt(0).toUpperCase() + text.slice(1));

Template.registerHelper('equals', (c1, c2) => c1 === c2 ? true : false);

Template.registerHelper('bytesToFileSize', (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 0;
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  return `${(bytes / Math.pow(1024, i)).toFixed(1)} ${sizes[i]}`;
});

Template.registerHelper('instance', () => Template.instance());
