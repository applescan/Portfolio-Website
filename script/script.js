const options = {
    bottom: '25px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '20px', // default: 'unset'
    time: '1s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: false // default: true
}

function addDarkmodeWidget() {
    new Darkmode(options).showWidget();
}
window.addEventListener('load', addDarkmodeWidget);