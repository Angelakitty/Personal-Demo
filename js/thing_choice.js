/*װ���л����*/

function $(id){return document.getElementById(id);}/*��ȡԪ��*/
function changeImage(){
	var o=$("game");
	var index=o.selectedIndex;//��ȡ�������е�ѡ����
	$("show").src=$("game").options[index].value;  //����ͼƬ
}