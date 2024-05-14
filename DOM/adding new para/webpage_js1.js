function change(){
    const heading=document.getElementsByTagName('h2').item(0);
    heading.firstChild.data="Welcome To The dynamic Website";

    const para=document.getElementsByTagName('p').item(0);
    para.firstChild.data="Hey This Is Para 1!!!";
// Creating New Element
    const newElement=document.createElement('p');
    // Creating New Text Node For Content
    const textnode=document.createTextNode("This is Second Para!!")
    // appending text node to created element 

    newElement.appendChild(textnode);

    // Appending Created element to parent node

    para.parentNode.appendChild(newElement);

}