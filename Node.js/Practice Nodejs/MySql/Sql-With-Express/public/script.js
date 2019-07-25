$(function(){
    let inp_name = $('#name');
    let inp_age = $('#age');
    let btn_submit = $('#submit');
    let table_person = $('#person');

    function refreshList(persons){

        table_person.empty();
        table_person.append(
            `<tr>
            <th>Person ID</th>
            <th>Name</th>
            <th>Age</th>
            
            </tr>`
        )
        for(person of persons)
        {
            table_person.append(
                `<tr>
                <td>${person.ID}</td>
                <td> ${person.NAME} </td>
                <td>${person.AGE}</td>
                </tr>`
            )
        }
    }
    $.get('/api',function(data){
        refreshList(data);
    })

    btn_submit.click(function(){
        
        $.post('/api',{
            name:inp_name.val(),
            age:inp_age.val()
        },
        function(data){
            refreshList(data);
        })
    })
    
        
    
})