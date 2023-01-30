function changeBackground(background) {
    switch(background) {
        case 'main':
            setStyles()
        break;
        
        case 'service':
            setStyles('rgba(241, 54, 54, 0.56)','360','170vh','0')
        break;
        
        case 'subscribe':
            setStyles('none')
        break;
        
        case 'team':
        break;
        
        case 'contacts':
        break;
        }
}
function setStyles(background,deg,widht,disp) {
    let bgStyles = document.getElementById('background')
    let elmemGl = document.getElementById('gl1')
    console.log(elmemGl)
    if (!background) {
        elmemGl.style.color='black'
        bgStyles.style.borderBottom='170vh solid rgba(153, 153, 153, 0.8)'
        bgStyles.style.transform='rotate(270deg)'
    } else {
        elmemGl.style.color='white' 
        bgStyles.style.borderBottom=`${widht} solid ${background}`
        bgStyles.style.transform=`rotate(${deg}deg)`
        (background === 'none') ? bgStyles.style.display = 'none' : 
    }

}
