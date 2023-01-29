function changeBackground(background) {
    switch(background) {
        case 'main':
            setStyles()
        break;
        
        case 'service':
            setStyles("green",'360')
        break;
        
        case 'subscribe':
        break;
        
        case 'team':
        break;
        
        case 'contacts':
        break;
        }
}
function setStyles(background,deg) {
    let bgStyles = document.getElementById('background')
    let elmemGl = document.getElementById('gl1')
    console.log(elmemGl)
    if (!background) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        elmemGl.style.color='black'
        bgStyles.style.borderBottom='100vh solid red'
        bgStyles.style.transform='rotate(270deg)'
    } else {
        elmemGl.style.color='white' 
        bgStyles.style.borderBottom=`100vh solid ${background}`
        bgStyles.style.transform=`rotate(${deg}deg)`
    }
}
