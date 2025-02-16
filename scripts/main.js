
import { world } from "@minecraft/server"
import { MessageFormData, ModalFormData} from "@minecraft/server-ui"


//Iniciamos un Evento Mundial con Propiedad <<ItemUse>>
world.afterEvents.itemUse.subscribe((dat) => {
    //desestructuramos el objeto ItemUse
    const { itemStack, source } = dat
    // crea MessageformData / Datos del formulario de mensaje
    const messageform = new MessageFormData()
        .body("deseas comprar un diamante?")
        .title(`shop`)
        .button1("no")
        .button2("si")
    // crea ModalformData / Datos del formulario de modales
    const modalform = new ModalFormData()
        //Palanca On/Of true/False
        .toggle('Toggle w/o default')
        .toggle('Toggle w/ default', true)
        //Deslisante (solo valores de tipo Number=> 0, 50, 5, 30)
        .slider('Slider w/o default', 0, 50, 5)
        .slider('Slider w/ default', 0, 50, 5, 30)
        //Menu desplegable (valores de tipo String/Caracter || ${Variables})
        .dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3'])
        .dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2)
        //Campo de TExto (Tres valores=>titulo, texto invisible, texto ya escrito)String/Caracter || ${Variables}
        .textField('Input w/o default', 'type text here')
        .textField('Input w/ default', 'type text here', 'this is default')

    //abrimos formularios con condicional Switch o IF (Switch)
    switch (/*obtenemos el ID del Item atraves de la propiedad TypeId*/itemStack.typeId) {
        //Case 1 = Stick/Palo => abrir formulario de mensaje en source[jugador]
        case "minecraft:stick": messageform.show(source);
            //rompemos para no seguir evaluando Casos 
            break;

        //Case 2 = iron_ingot/lingote de hierro => abrir formulario de modales en source[jugador]
        case "minecraft:iron_ingot ": modalform.show(source);
            //Rompemos
            break;
    }

})

