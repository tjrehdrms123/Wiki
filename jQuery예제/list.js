$(function(){
	$('#btn-apply').on('click',doApply);
  $('#username').focus().on('keydown',doApply);
  $('.list > tbody').on('click','button',doDel2);
  $('.list > tfoot button').on('click',doDel2);
}); // 이벤트 등록

function doApply(e){
	if(e.type == 'keydown'){
  	var keycode = e.which || e.keyCode;
    if(keycode != 13)return;
  }
  var $username = $('#username');
  var addName = $username.val();
  if(!addName){
  	var msg = $username.attr('title');
    alert(msg);
    $username.focus();
    return;
  }
    var html = '<tr>';
    html += '<td><input type="checkbox"></td>';
    html += '<td>' + addName + '</td>';
    html += '<td><button type="button">삭제</button></td>';
    html += '</tr>';
    
    $('.list > tbody').append(html);
    $username.val("");
}
function doDel(e){
	if(confirm('정말로 삭제하시겠습니까?')){
  	if($(e.target).parents('tbody').length){
    	$(e.target).parents('tr').children().children('input').prop('checked',true);
    }
    $('.list > tbody td > input[type="checkbox"]:checked').parents('tr').remove();
  }
}
function doDel2(e){
	if(confirm('정말로 삭제하시겠습니까?')){
  	if($(e.target).parents('tbody').find(e.target).length){
    	$(e.target).parents('tr').remove();
    }else{
    	$('.list > tbody td > input[type="checkbox"]:checked').parents('tr').remove();
    }
    
  }
}	