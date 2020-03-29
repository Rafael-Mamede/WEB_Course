import $ from 'jquery'

import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function(i, e) {
        const isTarget = $(this).attr('wm-city') === city || city === 'todas'
        if(isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
    $('[wm-city-button]').each(function (i, e) {
        if($(this).attr('wm-city-button') === city) {
            $(this).addClass('active')
        } else{
            $(this).removeClass('active')
        }
    })
}

$.fn.cityButtons = function() {
    const cities = new Set
    $('[wm-city]').each( function(i,e) {
        cities.add($(e).attr('wm-city'))
    })
    
    const btns = Array.from(cities).map( (city, id) => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).attr('wm-city-button', `${city}`).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })
    
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).attr('wm-city-button', 'todas').html('Todas')
    btnAll.click(e => filterByCity('todas'))
    btns.push(btnAll)
    
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)
    
    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function() {
    $('[wm-city-buttons]').cityButtons()
})
