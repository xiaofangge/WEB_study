let obj = {};
const weakRef = new WeakRef(obj);

const registry = new FinalizationRegistry(value => {
    console.log(`The object ${value} will be garbage collected`);
})
registry.registry(obj, 'myObj');
