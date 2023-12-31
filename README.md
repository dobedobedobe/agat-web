# Adapted from YATAS - Yet Another Tailwind Apline Starter

<a href="https://yatas.netlify.app/" target="_blank">
  <img alt="YATAS Logo" width="350" src="./src/img/logo.svg">
</a>

Minimal 11ty starter project that build css with tailwindcss cli and [esbuild](https://esbuild.github.io/) for javascript.

## [Demo](https://yatas.netlify.app/)

[Adapted from YATAS](https://github.com/yhaefliger/yatas)

## Stack

* TailwindCSS v3
* p5.js for Landing Page
* Netlify CMS

## Install

```
npm install
```

## Local dev with netlify cms

First run 

```
npx netlify-cms-proxy-server
```
then run

```
npm run start
```

## Local dev without netlify cms

run

```
npm run start
```

## Build

Minified production build

```
npm run build
```

## Assets versioning

This starter includes a small js script to which can add a hash to your assets when building for production builds.
The script will look for files to include a hash (based on the md5 of the built file content) eg: ```styles.734a7607648afdb.css``` instead of ```styles.css```.

The entry point for matching regular file path to versionned path is generated as an 11ty global data object in ```_data/hash.json``` with the simple structure
```js
{
  '/path/to/resource.css': '/path/to/resource.hash.css'
}
```

In your 11ty template, you can then simply retrieve the versioned path from the array ```{{ hash['/path/to/resource.css'] | url }}```

If you want to add other assets to this generated data array, simply include the path in the ```assets``` const in the ```hash.js``` file in the root directory (files listed below are already included).

```js
const assets = [
  '/css/styles.css',
  '/js/scripts.js'
];
```

## Additional info for AG site
> for any additional JS files, add in the ```assets``` folder but dont add them in the ```assets``` array in the ```hash.js``` file instead just in the versioned path like so ```{{ hash['/path/to/resource.css'] | url }}``` - this will collate onto to the ```scripts.js``` and generate a single JS file in ```_site``` 
