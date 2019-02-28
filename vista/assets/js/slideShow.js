//animation list: card, fade, box3D, glide

$(document).ready(function () {
    $('.slideWiz').slideWiz(
        {
            auto: true,
            speed: 5000,
            type : 'slice',
            row: 9,
            file : [
                {
                    src: {
                        main: "https://picsum.photos/1920/1200?image=1081",
                        cover: "vista/assets/img/d_cars.jpg"
                    },
                    title: 'Nuestros productos financieros te montan en el vehículo que deseas.',
                    desc: '¡Si lo quieres, lo puedes comprar! En TusPrestamos te ofrecemos opciones para que adquieras' +
                    '                     el vehículo que anhelas con tasas y condiciones acorde a tus necesidades.',
                    button: {
                        text: 'Soluciones Financieras',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#fff'
                    }
                },
                {
                    src: {
                        main: "https://picsum.photos/1920/1200?image=760",
                        cover: "vista/assets/img/facilidad.jpg"
                    },
                    title: 'Facilidades en pestamos',
                    desc: 'Contamos con préstamos destinados a cubrir tus necesidades de efectivo para adquirir bienes de consumo' +
                    '                   , muebles, electrodomésticos y realizar alguna actividad o pagar el servicio que desees.',
                    button: {
                        text: 'Más Información',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#fff'
                    }
                },
                {
                    src: {
                        main: "https://picsum.photos/1920/1200?image=755",
                        cover: "vista/assets/img/tasa_interes.jpg"
                    },
                    title: 'La mejor tasa ',
                    desc: 'Con nuestros Certificados Financieros en Pesos le ofrecemos una atractiva tasa de' +
                    '                    interés anual, permitiéndole rentabilizar su inversión y obteniendo mucho más por su dinero.',
                    button: {
                        text: 'Conoce Más',
                        url: 'https://github.com/iamwizzdom/slideWiz',
                        class: 'btn btn-medium btn-primary',
                        color: '#fff'
                    }
                },
                {
                    src: {
                        main: "https://picsum.photos/1920/1200?image=726",
                        cover: "vista/assets/img/tarifas.jpg"
                    },
                    title: 'Beneficios',
                    desc: 'Tasa de interés anual competitiva.' +
                    '                    Disponibilidad inmediata del dinero, en caso de requerirlo antes de la fecha de vencimiento.',
                    button: {
                        text: 'Conoce Más',
                        url: false,
                        class: 'btn btn-medium btn-primary',
                        color: '#fff'
                    }
                }
            ]

        }
    );
});
