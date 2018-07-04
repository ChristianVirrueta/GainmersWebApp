export function validateEmail(string) {
    var emailRegExp = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)
    if(emailRegExp.test(string)){
        return true
    }
    return false
}
export function handelize(string) {
    var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç'{}´-+¿?.,;:[]*¨¡!=()&%$#/\"_",
        //to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc                         ",
        to = " ",
        mapping = {};
    for(var i = 0, j = from.length; i < j; i++ )
        //mapping[ from.charAt( i ) ] = to.charAt( i );
        mapping[ from.charAt( i ) ] = to;

    var ret = [];
    for( var i = 0, j = string.length; i < j; i++ ) {
        var c = string.charAt( i );
        if( mapping.hasOwnProperty( string.charAt( i ) ) )
            ret.push( mapping[ c ] );
        else
            ret.push( c );
    }
    //return ret.join( '' );
    return ret.join( '' ).trim().replace( /[^-A-Za-z0-9]+/g, '-' ).toLowerCase();
  }