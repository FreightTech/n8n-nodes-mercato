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
	// Copy icons from nodes and credentials source directories to dist
	return src(['nodes/**/openmercato.svg', 'credentials/**/openmercato.svg'], { base: '.' }).pipe(
		dest('dist'),
	);
}

function copyBundled() {
	const bundledSource = path.resolve('bundled', 'nats-bundled.js');
	const bundledDestination = path.resolve('dist', 'bundled');

	return src(bundledSource).pipe(dest(bundledDestination));
}

function copyPackageJson() {
	const packageSource = path.resolve('package.json');
	const packageDestination = path.resolve('dist');
	const { Transform } = require('stream');

	// Strip "dist/" prefix from paths so the package works when dist/ IS the root
	const stripDistPrefix = new Transform({
		objectMode: true,
		transform(file, enc, cb) {
			if (file.isBuffer()) {
				const pkg = JSON.parse(file.contents.toString());
				if (pkg.main) {
					pkg.main = pkg.main.replace(/^dist\//, '');
				}
				if (pkg.n8n) {
					if (pkg.n8n.nodes) {
						pkg.n8n.nodes = pkg.n8n.nodes.map((p) => p.replace(/^dist\//, ''));
					}
					if (pkg.n8n.credentials) {
						pkg.n8n.credentials = pkg.n8n.credentials.map((p) => p.replace(/^dist\//, ''));
					}
				}
				file.contents = Buffer.from(JSON.stringify(pkg, null, '\t') + '\n');
			}
			cb(null, file);
		},
	});

	return src(packageSource).pipe(stripDistPrefix).pipe(dest(packageDestination));
}
