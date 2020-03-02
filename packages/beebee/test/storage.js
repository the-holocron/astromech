import { storage } from '../src/';

describe('Storage utilities', () => {
	beforeEach(() => storage.deleteAll());

	it('should get the value of an item', () => {
		const KEY = 'foo';
		const VALUE = 'bar';
		storage.set(KEY, VALUE);
		const foo = storage.get('foo');
		expect(window.localStorage.getItem).toHaveBeenLastCalledWith(KEY);
		expect(foo).toBe(VALUE);
	});

	it('should set an item', () => {
		const KEY = 'foo';
		const VALUE = 'bar';
		storage.set(KEY, VALUE);
		expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(VALUE));
		expect(window.localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
		expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1);
	});

	it('should delete an item', () => {
		const KEY = 'foo';
		const VALUE = 'bar';
		storage.set(KEY, VALUE);
		expect(window.localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(VALUE));
		expect(window.localStorage.__STORE__[KEY]).toBe(JSON.stringify(VALUE));
		expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(1);
		storage.delete('foo');
		expect(window.localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
		const foo = storage.get('foo');
		expect(foo).toBeNull();
	});

	it('should delete all items', () => {
		const KEY1 = 'foo';
		const VALUE1 = 'bar';
		const KEY2 = 'baz';
		const VALUE2 = 'quux';
		storage.set(KEY1, VALUE1);
		storage.set(KEY2, VALUE2);
		expect(storage.getAll()).toEqual([ { [KEY1]: JSON.stringify(VALUE1) }, { [KEY2]: JSON.stringify(VALUE2) } ]);
		storage.deleteAll();
		expect(window.localStorage.clear).toHaveBeenCalledWith();
		expect(window.localStorage.__STORE__).toEqual({});
		expect(Object.keys(window.localStorage.__STORE__)).toHaveLength(0);
	});

	it('should get all items', () => {
		const KEY1 = 'foo';
		const VALUE1 = 'bar';
		const KEY2 = 'baz';
		const VALUE2 = 'quux';
		storage.set(KEY1, VALUE1);
		storage.set(KEY2, VALUE2);
		expect(storage.getAll()).toEqual([ { [KEY1]: JSON.stringify(VALUE1) }, { [KEY2]: JSON.stringify(VALUE2) } ]);
	});
});
