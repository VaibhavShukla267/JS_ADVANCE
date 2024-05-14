function generateTable(){


    const tbl=document.createElement('table');
    const tblbody=document.createElement('tbody');

    for(i=1;i<4;i++){
        const row=document.createElement('tr')
        for(j=1;j<4;j++){
            const column=document.createElement('td');
            const textnode=document.createTextNode(`the row is ${i},the column is ${j}`);
            column.appendChild(textnode);
            row.appendChild(column)

        }
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border","2");
    
}








