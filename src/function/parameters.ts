// オプションパラメータを持つ関数
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('User is signed in! Username is', username);
    return true;
  } else {
    console.log('failed');
    return false;
  }
};
// デフォルトパラメータを持つ関数
export const isUserSignedIn2 = (
  userId: string,
  username: string = 'No NAME'
): boolean => {
  if (userId === 'ABC') {
    console.log('User is signed in! Username is', username);
    return true;
  } else {
    console.log('failed');
    return false;
  }
};

// レストパラメータを持つ関数
export const sumProductsPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  });
};


