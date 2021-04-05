import genericsBasicSample from './generics/basic';
import genericsAdvancedSample from './generics/advanced';
import { logMessage } from './function/basic';
import {
  isUserSignedIn,
  isUserSignedIn2,
  sumProductsPrice,
} from './function/parameters';
// genericsBasicSample();
// genericsAdvancedSample();
// logMessage('Hello world!');
isUserSignedIn('ABC', 'Jack');
isUserSignedIn('ddd');
isUserSignedIn2('ABC');
const arrayNum = [10, 20, 30, 40, 50];
const sum = sumProductsPrice(60, ...arrayNum);
console.log(sum);
