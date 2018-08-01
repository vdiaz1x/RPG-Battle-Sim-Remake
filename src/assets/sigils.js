/*
|--------------------------------------------------------------------------
| Sigil Images
|--------------------------------------------------------------------------
*/

import elements from './elements';

// sigil for allies
import metal from './sigils/mercury.png';
import earth from './sigils/venus.png';
import wood from './sigils/earth.png';
import fire from './sigils/mars.png';
import thunder from './sigils/jupiter.png';
import air from './sigils/saturn.png';
import ice from './sigils/uranus.png';
import water from './sigils/neptune.png';
import light from './sigils/sun.png';
import dark from './sigils/moon.png';

// sigil for enemies
import chaos from './sigils/mars.png';
import fallen from './sigils/mars.png';
import magick from './sigils/mars.png';
import evil from './sigils/mars.png';
import death from './sigils/mars.png';
import end from './sigils/mars.png';

/*
|--------------------------------------------------------------------------
| Sigils
|--------------------------------------------------------------------------
*/

// list of sigils
const sigils = {
  [elements[0]]: fire,
  [elements[1]]: water,
  [elements[2]]: air,
  [elements[3]]: earth,
  [elements[4]]: thunder,
  [elements[5]]: ice,
  [elements[6]]: wood,
  [elements[7]]: metal,
  [elements[8]]: light,
  [elements[9]]: dark,
  [elements[10]]: chaos,
  [elements[11]]: fallen,
  [elements[12]]: magick,
  [elements[13]]: evil,
  [elements[14]]: death,
  [elements[15]]: end,
};

export default sigils;
