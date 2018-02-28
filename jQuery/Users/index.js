$(document).ready(function() {
    $("button").click(function() {
        // $("#data").append("<tr>" +"<td>"+$("input[name='first']").val()+"</td>"+"<td>Hello</td>"+"<td>Hello</td>"+"<td>Hello</td>"+"</tr>");
        $("#data").append(`
            <tr>
                <td>`+$("input[name='first']").val()+`</td>
                <td>`+$("input[name='last']").val()+`</td>
                <td>`+$("input[name='email']").val()+`</td>
                <td>`+$("input[name='phone']").val()+`</td>
            </tr>
        `);
        $("input").val($(this).attr("placeholder"));
    });
});