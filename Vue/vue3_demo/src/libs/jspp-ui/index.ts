import Carousel from './Carousel/index.vue';

export default {

    install(app: any, options: any) {
        app.component(Carousel.name, Carousel)
    }
}