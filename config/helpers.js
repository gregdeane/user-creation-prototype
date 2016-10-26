import path from 'path';
const ROOT = path.resolve(__dirname, '..');

export function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [ROOT].concat(args));
}
