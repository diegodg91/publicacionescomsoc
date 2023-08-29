const documentos = [
    {
    id:'1',
    categoria: 'investigaciones cientificas', 
    idCategoria: '03',
    titulo:'Intervencion comunicacional para promover la participación y el dialogo entre directivos y mandos medios',
    descripcion:'El propósito del presente trabajo es fortalecer la comunicación interna en el Instituto Superior San José para lograr una mayor participación de los docentes y el personal no docente en las propuestas institucionales y para mejorar la comunicación de éstos con los mandos superiores.',
    url: 'https://drive.google.com/file/d/1v9xJCmWGEPlWKGARjrKbtn-D6_gLYzmO/view?usp=sharing',
    image: './img/caratulas/ic.jpg'
    },
    {
        id:'2',
        categoria: 'produccion comunicacional', 
        idCategoria: '05',
        titulo:'Manual del buen uso de redes sociales',
        descripcion:'Este manual servirá como una guía de usos y estilos para la administración de redes sociales del Gobierno del Chaco, apuntando a unificar la identidad discursiva bajo el objetivo de fortalecer un modelo de Gobierno Abierto.',
        url: 'https://drive.google.com/file/d/1iEVua36oEYv57W9jzSdntkOlEBpk94ai/view',
        image: './img/caratulas/prc.jpg'
        },

        {
            id:'3',
            categoria: 'informes de intervencion', 
            idCategoria: '04',
            titulo:'Comunicación estrategica - Invico',
            descripcion:'Este trabajo tiene como principal objetivo establecer un plan de comunicación que permita dejar de lado una visión reduccionista existente en el Instituto de Vivienda de Corrientes.',
            url: 'https://drive.google.com/file/d/1AotOuH8OWk2IJ_260AV2EFP0uEORJT58/view',
            image: './img/caratulas/idi.jpg'
            },

            {
                id:'4',
                categoria: 'informes de intervencion', 
                idCategoria: '04',
                titulo:'Con la camiseta puesta',
                descripcion:'Es un proyecto realizado en la radio escolar FM 87.9 “Héroes de Malvinas” de lalocalidad de Pedro R. Fernández, Corrientes; con la intención de resignificar el rol pedagógico-comunitario de la misma, y contribuir a dinamizar los procesos de aprendizaje y la creatividad de alumnos, alumnas y docentes.',
                url: 'https://drive.google.com/file/d/11trCrhs0jnLk7yS6hBq6T66H_o6N0XXd/view',
                image: './img/caratulas/idi.jpg'
                },

                {
                    id:'5',
                    categoria: 'investigaciones cientificas', 
                    idCategoria: '05',
                    titulo:'Construccion de identidad correntina',
                    descripcion:'En esta investigación, se tiene como objetivo encontrar marcas o huellas de identidad correntina en el discurso de Gustavo Valdés construido durante su campaña a gobernador en su cuenta de Facebook.',
                    url: 'https://drive.google.com/file/d/1xJiwTw3_1MvGobKcrAlFsSaKfkOwf6JF/view',
                    image: './img/caratulas/ic.jpg'
                    },
                    {
                        id:'6',
                        categoria: 'produccion comunicacional', 
                        idCategoria: '06',
                        titulo:'Soportes audiovisuales como herramientas para la comunicación institucional estrategica',
                        descripcion:'Esta presentación final de tesina plantea la producción de un pack de videos institucionales que serán utilizados por la Facultad de Ingeniería (UNNE) como herramienta para lo comunicación externa de la institución.',
                        url: 'https://drive.google.com/file/d/1gLO9eNw8R2JmQb9J1hGbpByqcR7z-JcU/view',
                        image: './img/caratulas/prc.jpg'
                        },
                        {
                            id:'7',
                            categoria: 'produccion comunicacional', 
                            idCategoria: '07',
                            titulo:'Pagina web: "Memoria Correntina". Sobre "el correntinazo de 1999"',
                            descripcion:'Se trata de la creación del sitio memoriacorrentina.com, donde se generarán contenidos periodísticos referidos al Correntinazo de 1999.',
                            image: './img/caratulas/prc.jpg'
                            },
                            {
                                id:'8',
                                categoria: 'produccion comunicacional', 
                                idCategoria: '08',
                                titulo:'Voces diversas',
                                descripcion:'Aborda la Marcha del Orgullo del colectivo LGBTTTIQ en Corrientes desde su construcción social, política y cultural, entendida como una práctica comunicativa vinculada al reclamo de los derechos humanos en pos de una sociedad democrática más inclusiva.',
                                url: 'https://drive.google.com/file/d/1vQHgJjY0eFwS4YcaaqdF1PmWZzb_ewjW/view',
                                image: './img/caratulas/prc.jpg'
                                },
                                {
                                    id:'9',
                                    categoria: 'investigaciones cientificas', 
                                    idCategoria: '09',
                                    titulo:'Analisis y descripción del comportamiento participativo, de los seguidores de la serie de TV, "El Marginal"',
                                    descripcion:'Desarrolla un recorrido exploratorio y descriptivo sobre los procesos de comportamiento participativo de los fans de la serie de Tv El Marginal, en una comunidad privada de seguidores en Facebook.',
                                    url: 'https://drive.google.com/file/d/19B9-uRTpMICijJcP4JdimVSo_OX20NaT/view',
                                    image: './img/caratulas/ic.jpg'
                                    },
                                    {
                                        id:'10',
                                        categoria: 'produccion comunicacional', 
                                        idCategoria: '10',
                                        titulo:'Serie documental sonora:"Pinceladas de memoria":Abordaje',
                                        descripcion:'Esta tesina presenta la serie documental sonora &quot;Pinceladas de Memoria&quot; compuesta por tres capítulos donde se presenta la historia del mural &quot;Argentina, dolor y Esperanza” de Amanda Mayor de Piérola.',
                                        url: 'https://drive.google.com/file/d/1m01qd5TsNogJTgekCB6V9QY1KHh0Vp29/view',
                                        image: './img/caratulas/prc.jpg'
                                        },
                    
                    
];

export const getData = new Promise((resolve, reject)=>{

    let condition = true;
    setTimeout(()=>{
        if(condition){
            resolve(documentos)
        }else{
            reject(console.log('error'))
        }
    }, 2000)
})