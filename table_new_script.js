

function delete_row(no)
{
document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
	var new_ip=document.getElementById("new_ip0").value;
	 var new_port=document.getElementById("new_port0").value;
	 var new_label=document.getElementById("new_label0").value;
		
	 var table=document.getElementById("data_table");
	 var table_len=(table.rows.length);
	 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'>" +
		"<td id='ip_col"+table_len+"'>" +
				"<label id='IP Address'>IP Address : </label> " +
				"<input type='text' disabled='disabled' id='new_ip"+table_len+"' name='ip' value='"+new_ip+"' ></td>" +
		"<td id='port_col"+table_len+"'>" +
				"<label id='Port'>Port : </label> " +
				"<input type='text' id='new_port"+table_len+"' name='port' disabled='disabled' value='"+new_port+"' ></td>" +
		"<td id='label_col"+table_len+"'>" +
				"<label id='Label'>Label : </label> " +
				"<input type='text' id='new_label"+table_len+"' name='label' disabled='disabled' value='"+new_label+"' ></td>" +
		"<td> <input type='button' value='-' onclick='delete_row("+table_len+")'></td>"+
		"</tr>";
	 document.getElementById("new_ip0").value="";
	 document.getElementById("new_port0").value="";
	 document.getElementById("new_label0").value="";
}

