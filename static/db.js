const resolveRequest = (req, opt) => {
	return req instanceof IDBRequest
		? new Promise((resolve, reject) => {
			req.onerror = (event) => {
				console.log(event.target.error);

				if (opt && opt.onerror)
					opt.onerror(req.error);

				reject(req.error);
			};
			req.onsuccess = (event) => {
//				console.log(event.target.result);

				if (opt && opt.onsuccess)
					opt.onsuccess(req.result);

				resolve(req.result);
			};
			if (opt && typeof (opt) == 'object')
				Object.keys(Object.getPrototypeOf(req))
					.filter(key => typeof (opt[key]) == 'function')
					.forEach(key => req[key] = (event) => opt[key](event.target.result));
		})
		: Promise.resolve();
};

const get = (db, name, key) => {
	let tx = db instanceof IDBTransaction ? db : db.transaction(name);
	let store = tx.objectStore(name);
	return resolveRequest(key ? store.get(key) : store.getAll());
};
const add = (db, name, ...objects) => {
	let tx = db instanceof IDBTransaction ? db : db.transaction(name, 'readwrite');
	let store = tx.objectStore(name);
	return objects.reduce((prev, curr) => prev.then(() => resolveRequest(store.add(curr))), Promise.resolve());
};
const put = (db, name, ...objects) => {
	let tx = db instanceof IDBTransaction ? db : db.transaction(name, 'readwrite');
	let store = tx.objectStore(name);
	return objects.reduce((prev, curr) => prev.then(() => resolveRequest(store.put(curr))), Promise.resolve());
};

export default (name, version, onupgradeneeded, onblocked) => {
	return resolveRequest(window.indexedDB.open(name, version), {
		onsuccess: (db) => {
			db.get = (name, keyPath) => get(db, name, keyPath);
			db.add = (name, ...objects) => add(db, name, ...objects);
			db.put = (name, ...objects) => put(db, name, ...objects);
			db.readwrite = (...storeNames) => {
				let tx = db.transaction(storeNames, 'readwrite');
				tx.get = (name, keyPath) => get(tx, name, keyPath);
				tx.add = (name, ...objects) => add(tx, name, ...objects);
				tx.put = (name, ...objects) => put(tx, name, ...objects);
				// tx.commit = (func) => {
				// 	if (func)
				// 		func(tx);

				// 	return resolveRequest(tx.commit());
				// }
				return tx;
			};
		},
		onupgradeneeded: typeof (onupgradeneeded) == 'function' ? onupgradeneeded : (db) => {
			Object.keys(onupgradeneeded)
				.filter(name => !db.objectStoreNames.contains(name))
				.forEach(name => {
					let options = onupgradeneeded[name];

					db.createObjectStore(name, typeof (options) == 'string' ? { keyPath: options } : options);
				});
		},
		onblocked
	});
}