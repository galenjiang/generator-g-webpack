## build project

### production enviroment
```
npm run build
```

### development
inline mode, auto refresh
```
npm run dev
```

### issue
* dev-server

[webpack-dev-server@2.5.0 in wsl throw a error](https://github.com/webpack/webpack-dev-server/issues/955)
* babel

use babel compiler, only transform from ts, remove type, not type-checking. use IDE(vsc), tsserver or plugins to type-checking.
npm package: typescript tslint are need.

eslint can not lint under eslint-babel plugin, eslint disabled

