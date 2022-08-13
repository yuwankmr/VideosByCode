import {csv} from './csv';

function sort_it(a, b) {
	return b.value - a.value;
}
// export const data = csv.sort(sort_it).slice(0, 100).reverse();
export const data = csv;
