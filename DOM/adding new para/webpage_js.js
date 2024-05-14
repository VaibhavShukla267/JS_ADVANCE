const heading=document.getElementsByTagName('h2').item(0);
// undefined
heading
{/* <h2>​Header​</h2>​ */}
heading.data="Welcome"
// 'Welcome'
heading.firstChild.data="welcome";
// 'welcome'
const para=document.getElementsByTagName('p').item(0);
// undefined
para
{/* <p>​Paragraph​</p>​ */}
para.firstChild.data="Our World Of Ozz"
'Our World Of Ozz'






function change() {
    // document.getElementsByTagName("h2") returns a NodeList of the <h2>
    // elements in the document, and the first is number 0:
    const header = document.getElementsByTagName("h2").item(0);
  
    // The firstChild of the header is a Text node:
    header.firstChild.data = "A dynamic document";
  
    // Now header is "A dynamic document".
  
    // Access the first paragraph
    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is the first paragraph.";
  
    // Create a new Text node for the second paragraph
    const newText = document.createTextNode("This is the second paragraph.");
  
    // Create a new Element to be the second paragraph
    const newElement = document.createElement("p");
  
    // Put the text in the paragraph
    newElement.appendChild(newText);
  
    // Put the paragraph on the end of the document by appending it to
    // the body (which is the parent of para)
    para.parentNode.appendChild(newElement);
  }
  

