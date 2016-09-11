/***********************************************

  "_gulpfile.js"

  Created by Michael Cheng on 02/07/2016 13:47
            http://michaelcheng.us/
            michael@michaelcheng.us
            --All Rights Reserved--

***********************************************/

'use strict';

/* globals require */

const gulp = require('gulp');
const concat = require('gulp-concat');

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


/**
 * Build Quantum.js
 */
gulp.task('quantum', quantum);




function quantum() {
	console.log('Building Quantum.js...');
	let libraries = LIBRARIES.map(lib => `../${lib}/${lib}.min.js`);

	//Add library header to beginning of output
	libraries.unshift(HEADER_FILE);

	libraries.forEach(l => console.log(`${l}`));

	return gulp
		.src(libraries)
		.pipe(concat(QUANTUM_JS))
		.pipe(gulp.dest('./'));
}