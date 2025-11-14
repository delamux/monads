import { describe, expect, it } from 'vitest';
import { add } from '../domain/add';

describe('Main', () => {
	it('Should return 4 for 2 + 2', () => {
		expect(add(2, 2)).toBe(4);
	});
});
