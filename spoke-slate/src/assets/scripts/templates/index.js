import {load} from '@shopify/theme-sections';
import '../sections/product';

// Import CSS
import '../../styles/templates/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  load('*')

  console.log('Init')

});
