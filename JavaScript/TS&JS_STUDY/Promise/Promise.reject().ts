Promise.reject(new Error('我错了')).catch(error => {
  console.log(error);  // Error: 我错了
});