# gulp-pxtorem

This is a Gulp plugin for [pxtorem](https://github.com/cuth/pxtorem).

### Installation

```shell
npm install gulp-pxtorem --save-dev
```

### Example

```js
var pxtorem = require('gulp-pixrem');

gulp.task('css', function() {
    gulp.src('css/**/*.css')
        .pipe(pxtorem())
        .pipe(gulp.dest('css'));
});
```