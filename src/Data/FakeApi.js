const documentos = [
    {
    id:'1',
    categoria: 'investigaciones cientificas', 
    idCategoria: '03',
    titulo:'Intervencion comunicacional para promover la participación y el dialogo entre directivos y mandos medios',
    descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    url: 'https://drive.google.com/file/d/1v9xJCmWGEPlWKGARjrKbtn-D6_gLYzmO/view?usp=sharing',
    image: './img/caratulas/ic.jpg'
    },
    {
        id:'2',
        categoria: 'produccion comunicacional', 
        idCategoria: '05',
        titulo:'Manual del buen uso de redes sociales',
        descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        url: 'https://drive.google.com/file/d/1iEVua36oEYv57W9jzSdntkOlEBpk94ai/view',
        image: './img/caratulas/prc.jpg'
        },

        {
            id:'3',
            categoria: 'informes de intervencion', 
            idCategoria: '04',
            titulo:'Comunicación estrategica - Invico',
            descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
            url: 'https://drive.google.com/file/d/1AotOuH8OWk2IJ_260AV2EFP0uEORJT58/view',
            image: './img/caratulas/idi.jpg'
            },

            {
                id:'4',
                categoria: 'informes de intervencion', 
                idCategoria: '04',
                titulo:'Con la camiseta puesta',
                descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                url: 'https://drive.google.com/file/d/11trCrhs0jnLk7yS6hBq6T66H_o6N0XXd/view',
                image: './img/caratulas/idi.jpg'
                },

                {
                    id:'5',
                    categoria: 'investigaciones cientificas', 
                    idCategoria: '05',
                    titulo:'Construccion de identidad correntina',
                    descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                    url: 'https://drive.google.com/file/d/1xJiwTw3_1MvGobKcrAlFsSaKfkOwf6JF/view',
                    image: './img/caratulas/ic.jpg'
                    },
                    {
                        id:'6',
                        categoria: 'produccion comunicacional', 
                        idCategoria: '06',
                        titulo:'Soportes audiovisuales como herramientas para la comunicación institucional estrategica',
                        descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                        url: 'https://drive.google.com/file/d/1gLO9eNw8R2JmQb9J1hGbpByqcR7z-JcU/view',
                        image: './img/caratulas/prc.jpg'
                        },
                        {
                            id:'7',
                            categoria: 'produccion comunicacional', 
                            idCategoria: '07',
                            titulo:'Pagina web: "Memoria Correntina". Sobre "el correntinazo de 1999"',
                            descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                            url: 'https://drive.google.com/file/d/1rISrPIqsj9VOzH04qzX8dNV30kcf8ANF/view',
                            image: './img/caratulas/prc.jpg'
                            },
                            {
                                id:'8',
                                categoria: 'produccion comunicacional', 
                                idCategoria: '08',
                                titulo:'Voces diversas',
                                descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                                url: 'https://drive.google.com/file/d/1vQHgJjY0eFwS4YcaaqdF1PmWZzb_ewjW/view',
                                image: './img/caratulas/prc.jpg'
                                },
                                {
                                    id:'9',
                                    categoria: 'investigaciones cientificas', 
                                    idCategoria: '09',
                                    titulo:'Analisis y descripción del comportamiento participativo, de los seguidores de la serie de TV, "El Marginal"',
                                    descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
                                    url: 'https://drive.google.com/file/d/19B9-uRTpMICijJcP4JdimVSo_OX20NaT/view',
                                    image: './img/caratulas/ic.jpg'
                                    },
                                    {
                                        id:'10',
                                        categoria: 'produccion comunicacional', 
                                        idCategoria: '10',
                                        titulo:'Serie documental sonora:"Pinceladas de memoria":Abordaje',
                                        descripcion:'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
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