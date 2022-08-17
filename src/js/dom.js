import { pubsub } from "./pubsub.js";
export { dom }

const libs = {
    getFormData(event) {
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        return formProps;
    }
}

const dom = (function () {

    let h1 = document.getElementById('h1')
    let form = document.getElementById('form')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let data = libs.getFormData(e)
        pubsub.publish('citySearch', data)
    })

    let changeH1Text = (data) => {
        h1.innerText = data
    }

    pubsub.subscribe('cityDataReturned', changeH1Text())


})()
