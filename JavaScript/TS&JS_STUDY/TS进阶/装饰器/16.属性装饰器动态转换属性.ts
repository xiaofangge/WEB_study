{
    const ToLowerPropDecorator: PropertyDecorator = (target: Object, propertyKey: string | symbol) => {
        let value: string;
        Object.defineProperty(target, propertyKey, {
            get: () => value.toLowerCase(),
            set: (v) => value = v
        })
    }

    class Article {
        @ToLowerPropDecorator
        public title: undefined | string;
    }

    const article = new Article()
    article.title = 'FHLJFIOFIODFD'
    console.log(article.title)
}