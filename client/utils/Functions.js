import web3 from '../../ethereum/web3'
import $ from 'jquery'

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
export function format_datetime(unformatted_datetime, format){
    var part_date = unformatted_datetime.split(" ")
    var part_format = format.split(" ")
    if(part_date.length === 2){
        var f_date          = part_format[0] ? part_format[0] : 'd/m/Y'
        var f_time          = part_format[1] ? part_format[1] : 'H:m'
        var all2412         = part_format[2] ? part_format[2] : false
        var current_date    = format_date(unformatted_datetime, f_date)
        var current_time    = format_hour(part_date[1], f_time, all2412)
        return current_date+' - '+current_time
    }
    return null
}
export function format_date(unformatted_date, format) {
    if(unformatted_date == '' || unformatted_date == null || unformatted_date == undefined){
        return 'TBA'
    }
    var formattedDate = new Date(unformatted_date)
    var d = formattedDate.getDate()
    var m =  formattedDate.getMonth() + 1
    var Y = formattedDate.getFullYear()
    var smonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    var return_date = ''
    switch(format){
        case 'd/m/Y':
            return_date = ('0'+d).slice(-2)+'/'+('0'+m).slice(-2)+'/'+Y
        break;
        case 'd sm Y':
            return_date = ('0'+d).slice(-2)+' '+smonths[m-1]+' '+Y
        break;
        default: 
            return_date = Y+'-'+('0'+m).slice(-2)+'-'+('0'+d).slice(-2)
    }
    return return_date
}
export function format_hour(unformatted_hour, format, all2412 = false){
    if(unformatted_hour == '' || unformatted_hour == null || unformatted_hour == undefined){
        return 'TBA'
    }
    var formattedHour = unformatted_hour
    var unformatted_hour_ = unformatted_hour.split(' ')
    if(unformatted_hour_.length > 1){
        formattedHour = unformatted_hour_[1]
    }
    var formattedHour_ = formattedHour.split(':')
    var H = formattedHour_[0]
    var m = formattedHour_[1]
    var s = formattedHour_[2]

    var return_hour = ''
    var type_format = format
    var format_ = format.split(' ')
    var aditional = ''
    if(format_.length > 1){
        type_format = format_[0]
        aditional = format_[1]
    }
    if(all2412){
        aditional = 'AM'
        if(H > 12){
            aditional = 'PM'
            H = parseFloat(H) - 12
        }
    }
    switch(type_format){
        case 'H:m:s':
            return_hour = ('0'+H).slice(-2)+':'+('0'+m).slice(-2)+':'+('0'+s).slice(-2)+' '+aditional
        break;
        case 'H:m':
            return_hour = ('0'+H).slice(-2)+':'+('0'+m).slice(-2)+' '+aditional
        break;
        default: 
            return_hour = ('0'+H).slice(-2)+':'+('0'+m).slice(-2)+':'+('0'+s).slice(-2)+' '+aditional
    }
    return return_hour
}
export function routing_bet(date_to_play, address_link_to_bet){
    if(date_to_play == '' || date_to_play == null || date_to_play == undefined){
        return 'javascript:void(0);'
    }
    return '/betting/final/'+address_link_to_bet;
}
export function formatEtherFromWei(ammount, currency){
    return web3.utils.fromWei(ammount, currency)
}
export function formatEtherToWei(ammount, currency){
    return web3.utils.toWei(ammount, currency)
}
export function getBettingFootballSchema(){
    const BettingSchema = [
        {
            type: 'marker',
            player1: 0,
            player2: 0, 
            other: null, 
            winnerOption: 0, 
            checked: false,
            contribution: 0
        }, 
        {
            type: 'marker',
            player1: 0,
            player2: 1, 
            other: null, 
            winnerOption: 1, 
            checked: false,
            contribution: 0
        }, 
        {
            type: 'marker',
            player1: 0,
            player2: 2, 
            other: null, 
            winnerOption: 2, 
            checked: false,
            contribution: 0
        }, 
        {
            type: 'marker',
            player1: 1,
            player2: 0, 
            other: null, 
            winnerOption: 3, 
            checked: false,
            contribution: 0
        },
        {
            type: 'marker',
            player1: 1,
            player2: 1, 
            other: null, 
            winnerOption: 4, 
            checked: false,
            contribution: 0
        },
        {
            type: 'marker',
            player1: 1,
            player2: 2, 
            other: null, 
            winnerOption: 5, 
            checked: false,
            contribution: 0
        },
        {
            type: 'marker',
            player1: 2,
            player2: 0, 
            other: null, 
            winnerOption: 6, 
            checked: false,
            contribution: 0
        },
        {
            type: 'marker',
            player1: 2,
            player2: 1, 
            other: null, 
            winnerOption: 7, 
            checked: false,
            contribution: 0
        },
        {
            type: 'marker',
            player1: 2,
            player2: 2, 
            other: null, 
            winnerOption: 8, 
            checked: false,
            contribution: 0
        },
        {
            type: 'other',
            player1: 'Another\nresult\nwins [player1].',
            player2: null, 
            other: null, 
            winnerOption: 9, 
            checked: false,
            contribution: 0
        },
        {
            type: 'other',
            player1: null,
            player2: null, 
            other: 'Another\nresult\ntied.', 
            winnerOption: 10, 
            checked: false,
            contribution: 0
        },
        {
            type: 'other',
            player1: null,
            player2: 'Another\nresult\nwins [player2].',
            other: null, 
            winnerOption: 11, 
            checked: false,
            contribution: 0
        }
    ]
    return BettingSchema
}
export function filterFloat(evt,input){
    var tempValue = input.val();
    if($(window).width() >= 768 ){
        // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
        var key = window.Event ? evt.which : evt.keyCode;    
        //var chark = String.fromCharCode(key);
        //var tempValue = input.val()+chark;
        var new_value = '';
        if((key >= 48 && key <= 57) || (key >= 96 && key <= 105)){
            if(filter(tempValue)=== false){
                new_value = tempValue.substring(0, (tempValue.length - 1));
                input.val(new_value);
                return false;
            }else{
                return true;
            }
        }else{
            if(key == 8 || key == 13 || key == 0) {
              return true;
            }else if(key == 46 || key == 110){
                if(filter(tempValue)=== false){
                    new_value = tempValue.substring(0, (tempValue.length - 1));
                    input.val(new_value);
                    return false;
                }else{
                    return true;
                }
            }else{
                new_value = tempValue.substring(0, (tempValue.length - 1));
                input.val(new_value);
                return false;
            }
        }
    }else{
        if(filter(tempValue)=== false){
            new_value = tempValue.substring(0, (tempValue.length - 1));
            input.val(new_value);
            return false;
        }else{
            return true;
        }
    }
}
export function filter(__val__){
    var preg = /^([0-9]+\.?[0-9]{0,4})$/; 
    if(preg.test(__val__) === true){
        return true;
    }else{
       return false;
    }
}
export function format_money(ammount, fixed=4, currency='Ether.'){
    var format_ammount = ammount.toFixed(fixed)
    if(currency !== ''){
        format_ammount += ' '+currency
    }
    return format_ammount
}
export async function getClientDetails(){
    var accept_language = navigator.language || navigator.userLanguage;
    var browser_height = $(window).height();
    var browser_width = $(window).width();
    var user_agent = navigator.userAgent;
    const gp = await $.getJSON('http://www.geoplugin.net/json.gp?jsoncallback=?')
    var client_details = {
        accept_language: accept_language, 
        browser_height: browser_height, 
        browser_width: browser_width, 
        user_agent: user_agent, 
        browser_ip: gp.geoplugin_request, 
        session_hash: localStorage.jwtToken,
        city: gp.geoplugin_city,
        region: gp.geoplugin_region,
        region_code: gp.geoplugin_regionCode,
        region_name: gp.geoplugin_regionName,
        country_code: gp.geoplugin_countryCode,
        country_name: gp.geoplugin_countryName,
        in_eu: gp.geoplugin_inEU,
        continent_code: gp.geoplugin_continentCode,
        continent_name: gp.geoplugin_continentName,
        latitude: gp.geoplugin_latitude,
        longitude: gp.geoplugin_longitude,
        timezone: gp.geoplugin_timezone,
        currency_code: gp.geoplugin_currencyCode,
        currency_symbol: gp.geoplugin_currencySymbol,
        currency_symbol_utf8: gp.geoplugin_currencySymbol_UTF8,
        currency_converter: gp.geoplugin_currencyConverter
    }
    return client_details
}
export function getMobileOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "WINPHONE";
    }
    if (/android/i.test(userAgent)) {
        return "ANDROID";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "IPHONE";
    }
    return "WEB";
}
export function scrollAnimate($element, diff, time = 1500){
    $('html, body').animate({
        scrollTop:  parseInt($element.offset().top - diff)
      }, time, function(){});
}
export function diff_minutes(dt2, dt1){
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
}