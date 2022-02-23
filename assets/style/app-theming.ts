import * as eva from '@eva-design/eva';
import * as material from '@eva-design/material';
import customEva from './app-mapping-eva.json';
import customMaterial from './app-mapping-material.json';

export const appMappings = {
  eva: {
    mapping: eva.mapping,
    customMapping: customEva,
  },
  material: {
    mapping: material.mapping,
    customMapping: customMaterial,
  },
};

export const appThemes = {
  eva: {
    light: eva.light,
    dark: eva.dark,
    brand: {
      light: eva.light,
      dark: eva.dark,
    },
  },
  material: {
    light: material.light,
    dark: material.dark,
    brand: {
      light: material.light,
      dark: material.dark,
    },
  },
};
