// An example script to copy the SLDS resources into your app
// my-app/scripts/copy-slds.mjs
import fs from 'fs-extra';
import path from 'path';

fs.copySync(
	path.join(
		'__dirname',
		'../node_modules/@salesforce-ux/design-system/assets/**/*'
	),
	path.join('__dirname', 'src/assets')
);
