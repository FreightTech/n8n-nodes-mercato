const path = require('path');
const { task, src, dest, parallel } = require('gulp');

task('build:icons', copyIcons);
task('build:bundle', copyBundled);
task('build:package', copyPackageJson);
task('build:nodeicons', copyNodeIcons);

function copyIcons() {
	const iconsSource = path.resolve('icons', '*.{png,svg}');
	const iconsDestination = path.resolve('dist', 'icons');

	return src(iconsSource).pipe(dest(iconsDestination));
}

function copyNodeIcons() {
	// Copy icons from nodes source directories to dist
	return src('nodes/**/openmercato.svg', { base: 'nodes' }).pipe(dest('dist/nodes'));
}

function copyBundled() {
	const bundledSource = path.resolve('bundled', 'nats-bundled.js');
	const bundledDestination = path.resolve('dist', 'bundled');

	return src(bundledSource).pipe(dest(bundledDestination));
}

function copyPackageJson() {
	const packageSource = path.resolve('package.json');
	const packageDestination = path.resolve('dist');

	return src(packageSource).pipe(dest(packageDestination));
}
