import $ from 'jquery'

const loadHtmlSuccessCallBack = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallBack.includes(callback)) {
        loadHtmlSuccessCallBack.push(callback)
    }
}

function loadIncludes(parent) {
    if(!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(i, e) {
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')

                loadHtmlSuccessCallBack.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()