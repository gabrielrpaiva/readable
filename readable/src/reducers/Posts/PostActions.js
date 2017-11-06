import * as ReadableApi from '../../utils/Api'

export default {
    mudarTexto(texto) {
         return {
              type: 'MUDAR_TEXTO',
              payload: texto
         }
    }
}