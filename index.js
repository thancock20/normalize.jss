import fs from 'fs';
import { cssToJss } from 'jss-cli';

const css = fs.readFileSync('./node_modules/normalize.css/normalize.css', 'utf8');

export default cssToJss({code: css});
