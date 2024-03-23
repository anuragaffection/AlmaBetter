const reactElement = {
    type: 'div',
    props : {
        href : "https://google.com",
        target : '_blank',
    },
    children : 'click me to visit google '
}

const mainContainer = document.querySelector('#root');


function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);

}

customRender(reactElement, mainContainer);