/***********************************************

  "_gulpfile.js"

  Created by Michael Cheng on 02/07/2016 13:47
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

'use strict';

const LIBRARIES = [
	'binding',
	'dragdrop',
	'history',
	'http',
	'template',
	'test',
	'toast',
	'snackbar' //Snackbar needs toast to be first
];

const HEADER_FILE = 'quantum-header.js';
const QUANTUM_JS = 'quantum.js';

const gulp = require('gulp');
const concat = require('gulp-concat');


/**
 * Build quantum.js
 */
gulp.task('quantum', quantum);




function generateGlobs() {
	return LIBRARIES.map(lib => `../${lib}/**/*.min.js`);
}

function quantum() {
	console.log('Building quantum.js...');
	let libraries = generateGlobs();

	//Add library header to beginning of output
	libraries.unshift(HEADER_FILE);

	gulp
		.src(libraries)
		.pipe(concat(QUANTUM_JS))
		.pipe(gulp.dest('./'));
}