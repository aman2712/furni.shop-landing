/**
 * Middleware to validate form inputs
 * @param {Object} fields
 * @returns {Object} {error, message}
*/
export default function fieldValidator(fields){
    for(const key in fields){
        if(fields.hasOwnProperty(key)){
            if(fields[key] === undefined){
                return {error: true, message: `${key} is required.`}
            }
            if(typeof fields[key] === 'string' && fields[key] === ''){
                return {error: true, message: `${key} is required`}
            }
        }
    }
    return {error: false, message: 'OK'}
}