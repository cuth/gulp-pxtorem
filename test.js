var assert = require('assert');
var gutil  = require('gulp-util');
var pxtorem = require('./');

describe('gulp-pixrem', function() {
    it('should postprocess CSS using Pxtorem with the default pixel root value', function(done) {
        var stream = pxtorem();

        stream.on('data', function(data) {
            assert.equal(data.contents.toString(), 'code { font-size: 1rem; }');
            done();
        });

        stream.write(new gutil.File({
            contents: new Buffer('code { font-size: 16px; }')
        }));
    });

    it('should postprocess CSS using Pxtorem with a custom pixel root value', function(done) {
        var stream = pxtorem({
            root_value: 10
        });

        stream.on('data', function(data) {
            assert.equal(data.contents.toString(), 'code { font-size: 1.6rem; }');
            done();
        });

        stream.write(new gutil.File({
            contents: new Buffer('code { font-size: 16px; }')
        }));
    });
});